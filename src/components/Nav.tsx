"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#demos", label: "Demos" },
  { href: "#about", label: "About" },
  { href: "#kit", label: "Toolkit" },
  { href: "#experience", label: "Background" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile panel on Escape. The masthead is sticky rather than
  // fixed, so there is no scroll lock to manage.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="mast">
      <div className="wrap mast-in">
        <a className="wordmark" href="#top">
          {site.name}
          <span>.</span>
        </a>

        <nav className="navlinks" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="cta" href="#contact">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobnav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="wrap mobnav" id="mobnav">
          {[...links, { href: "#contact", label: "Contact" }].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
