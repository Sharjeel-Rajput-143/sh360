"use client";
import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
export type VisualItem = { id:string; title:string; src:string; alt:string; description:string; labels:readonly string[]; href?:string; caption?:string };
export default function VisualSelector({ id, label, items, variant="capability" }: { id:string; label:string; items:VisualItem[]; variant?:"capability"|"environment" }) {
  const [active,setActive]=useState(0);
  function keySelect(event:KeyboardEvent<HTMLButtonElement>, index:number) {
    let next=index;
    if(event.key==="ArrowRight"||event.key==="ArrowDown") next=(index+1)%items.length;
    else if(event.key==="ArrowLeft"||event.key==="ArrowUp") next=(index-1+items.length)%items.length;
    else if(event.key==="Home") next=0;
    else if(event.key==="End") next=items.length-1;
    else return;
    event.preventDefault();setActive(next);document.getElementById(`${id}-tab-${next}`)?.focus();
  }
  const item=items[active];
  return <div className={`vs-selector vs-${variant}`} data-selection={item.id}>
    <div role="tablist" aria-label={label} className="vs-tabs">
      {items.map((entry,i)=><button type="button" role="tab" key={entry.id} id={`${id}-tab-${i}`} aria-controls={`${id}-panel`} aria-selected={active===i} tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>keySelect(e,i)}><span aria-hidden="true">0{i+1}</span>{entry.title}<b aria-hidden="true">↗</b></button>)}
    </div>
    <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="vs-panel">
      <figure className="vs-figure">
        <div className="vs-image-stack">
          {items.map((entry,i)=><Image key={entry.id} src={entry.src} alt={active===i?entry.alt:""} aria-hidden={active!==i} width={1536} height={1024} sizes="(max-width:700px) 100vw, 65vw" className={active===i?"vs-active-image":""} unoptimized />)}
        </div>
        <figcaption>{item.caption??"Reference environment photography · not SH360 project work"}</figcaption>
      </figure>
      <div className="vs-detail" key={item.id}>
        <p className="ix-eyebrow">{variant==="capability"?"ENGINEERING CAPABILITY":"PROPERTY CONSIDERATIONS"}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul className="vs-scope">{item.labels.map(text=><li key={text}>{text}</li>)}</ul>
        {item.href&&<Link href={item.href} className="ix-button">Scope & requirements <span aria-hidden="true">↗</span></Link>}
      </div>
    </div>
  </div>;
}
