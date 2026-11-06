"""Read-only route smoke test. Run against the local dev or production server."""
import json
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from html.parser import HTMLParser
catalog=json.loads(Path('data/catalog.json').read_text())
slugs=['electrical-engineering','iot-smart-automation','ev-charging','plumbing','carpentry','cleaning','property-maintenance']
routes=[('/',200),('/services',200),('/?q=wiring',200),('/?saved=1',200),('/projects',200),('/privacy',200),('/terms',200),('/admin/login',200),('/api/admin/catalog',401),('/services/not-a-service',404)]
routes += [('/services/'+s,200) for s in slugs]
routes += [('/p/'+p['id'],200) for p in catalog['products']]
routes += [('/?tab='+c['id'],200) for c in catalog['categories']]
routes += [('/photography/electrical-installation-'+str(width)+'.webp',200) for width in [640,1280,1920]]
routes += [('/photography/LICENSE.md',200)]
routes += [('/visuals/'+n+'.webp',200) for n in ['building','electrical','smart','ev','plumbing','carpentry','interior','switchgear','wiring-detail','ev-installation','joinery-detail']]
routes += [("/hero-concepts",200)]
routes += [("/hero-concepts/"+concept,200) for concept in ["a","b","c"]]
routes += [("/hero-concepts/not-a-concept",404),("/hero-concepts/toString",404)]
routes += [("/hero-previews/"+concept+"-"+size+".jpg",200) for concept in ["a","b","c"] for size in ["desktop","mobile"]]
class Sections(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids=[]
    def handle_starttag(self,tag,attrs):
        if tag == "section": self.ids.append(dict(attrs).get("id"))
def check(item):
    path,expected=item
    try:
        with urllib.request.urlopen('http://localhost:3000'+path,timeout=60) as r:
            status=r.status
            body=r.read()
    except urllib.error.HTTPError as e:
        status=e.code
        body=e.read()
    assert status==expected,(path,status,expected)
    if path == '/':
        assert b'Engineering the Spaces' in body, 'Corrective hero missing'
        assert b'electrical-installation-1280.webp' in body, 'Temporary hero photograph missing'
        parser=Sections();parser.feed(body.decode())
        assert parser.ids.count('capabilities') == 1, parser.ids
        assert 'engineering' not in parser.ids and 'property-services' not in parser.ids, parser.ids
        if not any(p.get('verified') is True for p in json.loads(Path('data/evidence.json').read_text())['projects']):
            assert 'projects' not in parser.ids, 'Unverified work must stay hidden'
    if path.startswith('/hero-concepts/') and expected == 200:
        assert b'PENDING APPROVAL' in body, path
        assert b'noindex' in body, path
    if path.startswith('/services/') and expected==200:
        assert b'Project or service description' in body,path
    return f'{status} {path}'
with ThreadPoolExecutor(max_workers=3) as pool:
    for result in pool.map(check,routes):print(result)
with urllib.request.urlopen('http://localhost:3000/admin',timeout=30) as r:
    assert r.url.endswith('/admin/login'),r.url
print(f'PASS: {len(routes)} routes/assets; unauthenticated admin redirects to login.')
