"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-text transition-colors hover:text-accent"
        >
          <span className="text-primary">/</span>
          {site.name.split(" ")[0].toLowerCase()}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-lg border border-line-strong bg-elevated px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile trigger — 44px target */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-muted transition-colors hover:text-text md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {[...links, { href: "#contact", label: "Get in touch" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-line/60 text-base text-muted transition-colors last:border-0 hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
