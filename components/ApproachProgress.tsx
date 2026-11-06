"use client";
import { useEffect,useRef,useState } from "react";
const stages=[
 ["Requirements","Tell us about the property, the issue or planned improvement, location and any useful photos or equipment details."],
 ["Assessment","Discuss existing conditions, access and technical requirements. Establish whether a site assessment or further information is needed."],
 ["Scope and quotation","Review the tasks, materials, exclusions and quotation. Clarify responsibilities and arrangements before agreeing to proceed."],
 ["Execution and handover","Arrange access for the agreed work, review the completed scope and discuss operating instructions, care information and remaining items."],
];
export default function ApproachProgress(){
 const ref=useRef<HTMLOListElement>(null);const [reached,setReached]=useState(-1);
 useEffect(()=>{if(!ref.current||typeof IntersectionObserver==="undefined")return;const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){setReached(current=>Math.max(current,Number((entry.target as HTMLElement).dataset.step)));}});},{rootMargin:"0px 0px -15% 0px",threshold:0.2});ref.current.querySelectorAll("li").forEach(el=>observer.observe(el));return()=>observer.disconnect();},[]);
 return <ol ref={ref} className="bp-approach-stages vs-progress" aria-label="Project approach">{stages.map(([title,text],i)=><li key={title} data-step={i} data-reached={i<=reached} aria-current={i===reached?"step":undefined}><span aria-hidden="true">0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>;
}
