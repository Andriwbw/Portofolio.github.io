"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "My Projects" },
  { href: "#contact", label: "Contact" },
]

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all",
        scrolled ? "bg-background/80 backdrop-blur border-b border-[var(--color-border)]" : "bg-transparent",
      )}
      role="navigation"
      aria-label="Primary"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-wide">
          {"Muhammad Andri Wibowo"}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* minimal mobile: let native hash navigation handle it */}
          <a
            href="#projects"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm bg-[var(--brand)] text-[var(--brand-foreground)] hover:brightness-95 transition-colors"
          >
            {"Explore"}
          </a>
        </div>
      </div>
    </header>
  )
}
