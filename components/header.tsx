"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, Menu, Mic, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/platforms", labelKey: "nav.platforms" },
  { href: "/products", labelKey: "nav.products" },
  { href: "/solutions", labelKey: "nav.solutions" },
  { href: "/news", labelKey: "nav.news" },
  { href: "/pricing", labelKey: "nav.pricing" },
  { href: "/contact", labelKey: "nav.contact" },
]

const voiceAgentUrl = "https://letaiwork4uagent.vercel.app"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

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

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white xl:px-3",
                pathname === item.href && "bg-white text-slate-950 hover:bg-white hover:text-slate-950",
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={voiceAgentUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative hidden md:inline-flex"
          >
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-sm transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
            <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition group-hover:-translate-y-0.5">
              <Mic className="h-4 w-4" />
              <span className="hidden xl:inline">{t("nav.voiceAgent")}</span>
              <span className="absolute right-0 top-0 -mr-1 -mt-1 h-3 w-3 animate-ping rounded-full bg-white opacity-75" />
            </span>
          </a>
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 xl:inline-flex"
          >
            {t("nav.getStarted")}
          </Link>
          <button
            type="button"
            aria-label="Navigation"
            className="rounded-md p-2 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
              {t(item.labelKey)}
            </Link>
          ))}
          <a
            href={voiceAgentUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative mt-3 flex justify-center"
            onClick={() => setOpen(false)}
          >
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-sm" />
            <span className="relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-medium text-white shadow-lg">
              <Mic className="h-4 w-4" />
              {t("nav.voiceAgent")}
              <span className="absolute right-0 top-0 -mr-1 -mt-1 h-3 w-3 animate-ping rounded-full bg-white opacity-75" />
            </span>
          </a>
        </nav>
      )}
    </header>
  )
}
