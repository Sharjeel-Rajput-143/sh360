"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark, SearchIcon, HeartIcon } from "./Icons";
import { useShop } from "./ShopProvider";
import { services } from "@/lib/services";
import { useBrand } from "./BrandProvider";
export default function PublicHeader() {
  const [open, setOpen] = useState(false),
    [menu, setMenu] = useState("");
  const { query, setQuery, searchOpen, setSearchOpen, showSaved, savedIds } =
    useShop();
  const brand = useBrand();
  const pathname = usePathname();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menu) {
        setMenu("");
        document.getElementById(`toggle-${menu}`)?.focus();
        return;
      }
      if (searchOpen) {
        setSearchOpen(false);
        document.getElementById("toggle-search")?.focus();
        return;
      }
      if (open) {
        setOpen(false);
        document.getElementById("toggle-navigation")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setSearchOpen, menu, searchOpen, open]);
  const close = () => {
    setOpen(false);
    setMenu("");
  };
  return (
    <header className="px-header">
      <div className="px-header-inner">
        <Link href="/#top" className="px-logo" onClick={close}>
          <LogoMark />
          <span>
            {brand}
            <small>ENGINEERING & INTEGRATED SERVICES</small>
          </span>
        </Link>
        <nav
          id="public-nav"
          aria-label="Main navigation"
          className={open ? "open" : ""}
        >
          <Link
            href="/#top"
            onClick={close}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          {["Solutions", "Services"].map((label, i) => (
            <div
              className="px-dropdown"
              key={label}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                )
                  setMenu("");
              }}
            >
              <button
                id={`toggle-${label}`}
                onClick={() => setMenu(menu === label ? "" : label)}
                aria-expanded={menu === label}
                aria-controls={`menu-${label}`}
              >
                {label} <span aria-hidden="true">⌄</span>
              </button>
              {menu === label && (
                <div className="px-dropdown-list" id={`menu-${label}`}>
                  {services.slice(i === 0 ? 0 : 3, i === 0 ? 3 : 7).map((s) => (
                    <Link
                      href={`/services/${s.slug}`}
                      aria-current={
                        pathname === `/services/${s.slug}` ? "page" : undefined
                      }
                      key={s.slug}
                      onClick={close}
                    >
                      {s.title}
                      <span>↗</span>
                    </Link>
                  ))}
                  {i === 1 && (
                    <Link href="/services#products" onClick={close}>
                      View service catalog ↗
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/projects"
            onClick={close}
            aria-current={pathname === "/projects" ? "page" : undefined}
          >
            Projects
          </Link>
          <Link href="/#about" onClick={close}>
            About
          </Link>
          <Link href="/#contact" onClick={close}>
            Contact
          </Link>
        </nav>
        <div className="px-tools">
          <Link className="px-quote" href="/#contact">
            Get a Quote <span>↗</span>
          </Link>
          <button
            id="toggle-search"
            aria-label="Search services"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen(!searchOpen);
              setOpen(false);
            }}
          >
            <SearchIcon />
          </button>
          {/* A document navigation resets transient search state before opening saved services. */}
          <a
            href={"/services?saved=1#products"}
            aria-label={`Saved services (${savedIds.length})`}
          >
            <HeartIcon filled={showSaved} />
          </a>
          <button
            id="toggle-navigation"
            className="px-mobile"
            aria-expanded={open}
            aria-controls="public-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {searchOpen && (
        <form
          className="px-search"
          role="search"
          action="/services#products"
          onSubmit={(e) => {
            if (document.querySelector(".px-catalog #products")) {
              e.preventDefault();
              setSearchOpen(false);
              document.querySelector(".px-catalog #products")?.scrollIntoView();
            }
          }}
        >
          <label htmlFor="service-search">Find a service</label>
          <input
            id="service-search"
            name="q"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try wiring, lighting or cleaning…"
            autoFocus
          />
          <button className="px-button" type="submit">
            Search ↗
          </button>
        </form>
      )}
    </header>
  );
}
