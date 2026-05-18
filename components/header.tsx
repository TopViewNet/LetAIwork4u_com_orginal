"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/platforms", label: "Plattformen" },
  { href: "/products", label: "Produkte" },
  { href: "/solutions", label: "Loesungen" },
  { href: "/news", label: "KI Feed" },
  { href: "/pricing", label: "Preise" },
  { href: "/contact", label: "Kontakt" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
            <Bot className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-bold text-white">LetAIwork4u</span>
            <span className="block text-xs text-slate-400">AI, Voice, LegalTech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white text-slate-950 hover:bg-white hover:text-slate-950",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Navigation"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-slate-950 px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
