"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const solutionLinks = [
  { href: "/solutions/ai-solutions", labelKey: "solutions.ai.title" },
  { href: "/solutions/custom-software", labelKey: "solutions.software.title" },
  { href: "/solutions/core-it-services", labelKey: "solutions.core.title" },
  { href: "/solutions/data-solutions", labelKey: "solutions.data.title" },
  { href: "/solutions/cybersecurity", labelKey: "solutions.security.title" },
  { href: "/solutions/training-consulting", labelKey: "solutions.training.title" },
]

export function SolutionsSidebar() {
  const { t } = useLanguage()

  return (
    <aside className="rounded-lg border bg-card p-4">
      <h2 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">{t("nav.solutions")}</h2>
      <nav className="grid gap-1">
        {solutionLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm hover:bg-muted">
            {t(link.labelKey)}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
