import Image from "next/image";
import { serviceMedia } from "@/lib/story-media";
export default function ServiceVisual({slug}:{slug:string}){
 const media=serviceMedia[slug];if(!media)return null;
 return <figure className={`vs-service-visual vs-service-${slug}`}><Image src={media.src} alt={media.alt} width={1536} height={1024} sizes="(max-width:700px) 100vw, 60vw" priority unoptimized/><figcaption>{media.kind==="illustration"?"AI-generated architectural study · illustrative, not an installation design":"Reference photography · not a completed SH360 project"}</figcaption></figure>;
}
