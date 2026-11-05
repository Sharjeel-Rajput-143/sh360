"use client";

import { useEffect, useState } from "react";
import { useBrand } from "./BrandProvider";
import { LogoMark, SearchIcon, CloseIcon } from "./Icons";
import { scrollToProducts, useShop } from "./ShopProvider";
import WhatsAppLink from "./WhatsAppLink";

export default function RevampHeader() {
  const brand = useBrand();
  const { categories, select, query, setQuery, searchOpen, setSearchOpen } = useShop();
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setMobile(false); setDropdown(null); setSearchOpen(false); }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [setSearchOpen]);

  function choose(id: string) {
    select(id);
    setMobile(false);
    setDropdown(null);
    scrollToProducts();
  }

  const named = (part: string) => categories.find(c => [c.id, c.name.toLowerCase(), c.label.toLowerCase()].some(x => x.includes(part)))?.id;
  const solutions = [
    { title: "Electrical Engineering", id: named("electrical") },
    { title: "IoT & Smart Automation", id: named("smart") || named("iot") },
    { title: "EV Charging Solutions", id: named("ev") }
  ];
  const services = [
    { title: "Plumbing", id: named("plumb") },
    { title: "Carpentry", id: named("carpent") },
    { title: "Cleaning", id: named("clean") },
    { title: "Property Maintenance", id: named("maint") }
  ];
  const menu = (label: string, items: typeof solutions) => (
    <div className="sh-nav-item">
      <button className="sh-menu-toggle" type="button" aria-expanded={dropdown === label} onClick={() => setDropdown(dropdown === label ? null : label)}>{label}</button>
      {dropdown === label && <div className="sh-dropdown">
        {items.map(item => item.id
          ? <button type="button" key={item.title} onClick={() => choose(item.id!)}>{item.title}</button>
          : <WhatsAppLink key={item.title}>{item.title} — inquire</WhatsAppLink>)}
        <button type="button" onClick={() => { setMobile(false); setDropdown(null); scrollToProducts(); }}>View all services</button>
      </div>}
    </div>
  );

  return <header className="sh-header">
    <div className="sh-header-inner">
      <a href="#top" className="logo" onClick={() => { setMobile(false); setDropdown(null); }}>
        <LogoMark className="logo-mark" />
        <span><span className="sh-brand-name">{brand}</span><span className="sh-brand-descriptor">Engineering & Integrated Services</span></span>
      </a>
      <nav className={`sh-nav${mobile ? " is-open" : ""}`} aria-label="Primary navigation" id="sh-primary-nav">
        <a href="#top" onClick={() => setMobile(false)}>Home</a>
        {menu("Solutions", solutions)}
        {menu("Services", services)}
        <a href="#videos" onClick={() => setMobile(false)}>Our Work</a>
        <a href="#how" onClick={() => setMobile(false)}>Our Process</a>
        <a href="#contact" onClick={() => setMobile(false)}>Contact</a>
      </nav>
      <WhatsAppLink className="sh-header-cta">Get a Quote</WhatsAppLink>
      <div className="sh-header-tools">
        <button className="icon-btn" type="button" aria-label="Search services" aria-expanded={searchOpen} onClick={() => { setSearchOpen(!searchOpen); setMobile(false); }}><SearchIcon /></button>
        <button className="sh-menu-button" type="button" aria-label={mobile ? "Close navigation" : "Open navigation"} aria-controls="sh-primary-nav" aria-expanded={mobile} onClick={() => { setMobile(!mobile); setDropdown(null); }}>{mobile ? <CloseIcon/> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}</button>
      </div>
    </div>
    {searchOpen && <div className="sh-search-panel"><form role="search" onSubmit={e => { e.preventDefault(); setSearchOpen(false); scrollToProducts(); }}><SearchIcon/><input type="search" autoFocus value={query} onChange={e => setQuery(e.target.value)} aria-label="Search services" placeholder="Search electrical, charging, plumbing, cleaning…" /><button type="submit">Show results</button></form></div>}
  </header>;
}
