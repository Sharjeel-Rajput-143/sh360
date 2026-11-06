"""Read-only route smoke test. Run against the local dev or production server."""
import json
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
catalog=json.loads(Path('data/catalog.json').read_text())
slugs=['electrical-engineering','iot-smart-automation','ev-charging','plumbing','carpentry','cleaning','property-maintenance']
routes=[('/',200),('/projects',200),('/privacy',200),('/terms',200),('/admin/login',200),('/api/admin/catalog',401),('/services/not-a-service',404)]
routes += [('/services/'+s,200) for s in slugs]
routes += [('/p/'+p['id'],200) for p in catalog['products']]
routes += [('/?tab='+c['id'],200) for c in catalog['categories']]
routes += [('/visuals/'+n+'.webp',200) for n in ['building','electrical','smart','ev','plumbing','carpentry','interior']]
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
    if path.startswith('/services/') and expected==200:
        assert b'Project or service description' in body,path
    return f'{status} {path}'
with ThreadPoolExecutor(max_workers=3) as pool:
    for result in pool.map(check,routes):print(result)
with urllib.request.urlopen('http://localhost:3000/admin',timeout=30) as r:
    assert r.url.endswith('/admin/login'),r.url
print(f'PASS: {len(routes)} routes/assets; unauthenticated admin redirects to login.')
