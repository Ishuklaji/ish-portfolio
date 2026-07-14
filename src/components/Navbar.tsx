"use client";

import { useState } from "react";
import { nav, personal } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="shrink-0 whitespace-nowrap text-base font-semibold text-foreground">
          Ish Bandhu Shukla
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-5 py-5 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
