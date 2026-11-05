/** Original architectural systems diagram — illustrative, not an as-built engineering drawing. */
export default function ArchitecturalSystems() {
  return <div className="sh-art-frame">
    <div className="sh-building">
      <svg viewBox="0 0 680 500" role="img" aria-labelledby="sh-model-title sh-model-desc" xmlns="http://www.w3.org/2000/svg">
        <title id="sh-model-title">Isometric property showing electrical, smart-home and EV infrastructure</title>
        <desc id="sh-model-desc">A sectional architectural diagram of two rooms, a distribution board, lighting circuits, smart controls, and an electric vehicle charger connected by highlighted pathways. Conceptual illustration.</desc>
        <defs>
          <linearGradient id="sh-floor" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#dae6ea"/><stop offset="1" stopColor="#a6bdc9"/></linearGradient>
          <linearGradient id="sh-wall" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#f5fafb"/><stop offset="1" stopColor="#d7e4eb"/></linearGradient>
          <linearGradient id="sh-side" x1="0" x2="1"><stop stopColor="#a6c0ce"/><stop offset="1" stopColor="#7699ad"/></linearGradient>
          <filter id="sh-glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M48 281 304 148 640 307 385 451Z" fill="#819cac" opacity=".14"/>
        <path d="M66 260 294 140 611 286 382 408Z" fill="url(#sh-floor)" stroke="#7c9bad" strokeWidth="2"/>
        <path d="M66 260 382 408 382 430 66 281Z" fill="#a4bac5"/>
        <path d="M382 408 611 286 611 307 382 430Z" fill="#829eae"/>
        <path d="M66 260V111L294 13V140Z" fill="url(#sh-wall)" stroke="#9eb6c3" strokeWidth="2"/>
        <path d="M294 13 611 156V286L294 140Z" fill="#e0ebef" stroke="#9eb6c3" strokeWidth="2"/>
        <path d="M66 111 294 13 611 156 382 258Z" fill="#e7f0f3" opacity=".24"/>
        <path d="M294 140V13M294 140 382 182" stroke="#91acba" strokeWidth="3"/>
        <path d="M66 111 382 258 382 408" stroke="#90aebc" strokeWidth="2" opacity=".55"/>
        <path d="M382 258 611 156" stroke="#acc2cb" strokeWidth="3"/>
        <path d="M110 155 177 126 177 224 110 257Z" fill="#b4cbd3" stroke="#7a9ba9" strokeWidth="2"/>
        <path d="M123 157 163 139 163 211 123 231Z" fill="#e9f3f6" stroke="#92b4c2"/>
        <path d="M139 153 139 224M151 148 151 218" stroke="#c2d8e0"/>
        <path d="M435 101 546 152 546 225 435 172Z" fill="#acc5d1" stroke="#7f9eae" strokeWidth="2"/>
        <path d="M445 118 535 160 535 204 445 163Z" fill="#cfe5ec"/>
        <path d="M490 138V183" stroke="#9abdc9" strokeWidth="2"/>
        <path d="M202 209 245 190 245 264 202 284Z" fill="#1a394b" stroke="#0d2e41" strokeWidth="2"/>
        <path d="M210 214 237 202 237 254 210 267Z" fill="#527384"/>
        {Array.from({length:4},(_,i)=><g key={i}><path d={`M215 ${220+i*10} 233 ${212+i*10}`} stroke="#d8eff4" strokeWidth="3"/><circle cx="231" cy={214+i*10} r="2" fill="#21d4e5"/></g>)}
        <path d="M243 242 294 218 369 255 431 228 479 250" stroke="#00a7c4" strokeWidth="5" strokeLinecap="round" fill="none" filter="url(#sh-glow)"/>
        <path d="M243 242 294 218 369 255 431 228 479 250" stroke="#a2f4fb" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 10" fill="none"/>
        <path d="M294 218 294 125 368 162" stroke="#00a7c4" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M369 255 369 175" stroke="#00a7c4" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M368 162 395 150 421 162 393 176Z" fill="#fefefe" stroke="#7697a7"/>
        <path d="M421 162V169L393 184V176Z" fill="#aec8d4"/>
        <path d="M345 224 367 213 383 221 360 233Z" fill="#dce9ec" stroke="#819ca9"/>
        <path d="M360 233V279L383 266V221Z" fill="#7b9dad"/>
        <rect x="359" y="239" width="11" height="15" rx="2" fill="#193c51" transform="skewY(-26)"/>
        <circle cx="364" cy="245" r="2" fill="#34d3e3"/>
        <path d="M485 260 515 244 542 256 512 272Z" fill="#cadde4" stroke="#819eaa"/>
        <path d="M512 272V338L542 323V256Z" fill="#a4c1ce"/>
        <path d="M485 260V326L512 338V272Z" fill="#7898aa"/>
        <path d="M495 278 507 284V308L495 302Z" fill="#103c50"/>
        <circle cx="501" cy="291" r="4" fill="#35d2e6"/>
        <path d="M383 288 443 320 478 302 495 309" fill="none" stroke="#00b4c9" strokeWidth="4" strokeLinecap="round" filter="url(#sh-glow)"/>
        <path d="M153 318 220 281 297 316 232 352Z" fill="#e9f0f2" stroke="#9bb1bb" strokeWidth="2"/>
        <path d="M153 318V338L232 372V352ZM232 352V372L297 336V316Z" fill="#a0bcc8"/>
        <path d="M188 318 224 299 265 316 230 335Z" fill="#c6dae2"/>
        <path d="M182 281 182 257 228 237 228 262" fill="none" stroke="#678d9e" strokeWidth="6" strokeLinecap="round"/>
        <path d="M221 282 221 267 263 246" fill="none" stroke="#789eae" strokeWidth="7" strokeLinecap="round"/>
        <path d="M436 338c6-24 21-35 45-35h40c24 0 40 14 44 35l6 11H427z" fill="#2a4d5f"/>
        <path d="M449 334c5-16 16-22 32-22h35c14 0 27 9 32 22Z" fill="#c9e1e9"/>
        <circle cx="461" cy="350" r="12" fill="#173443" stroke="#91aab6" strokeWidth="4"/>
        <circle cx="545" cy="350" r="12" fill="#173443" stroke="#91aab6" strokeWidth="4"/>
        <circle cx="243" cy="242" r="5" fill="#00c3d9" stroke="white" strokeWidth="2"/>
        <circle cx="369" cy="255" r="5" fill="#00c3d9" stroke="white" strokeWidth="2"/>
        <circle cx="495" cy="309" r="5" fill="#00c3d9" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
    <span className="sh-system-tag sh-tag-power">01 / Power distribution</span>
    <span className="sh-system-tag sh-tag-iot">02 / Smart control</span>
    <span className="sh-system-tag sh-tag-ev">03 / EV charging</span>
    <span className="sh-art-caption">Conceptual building systems illustration · Not to scale</span>
  </div>;
}
