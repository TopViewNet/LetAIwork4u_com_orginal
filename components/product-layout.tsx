"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const productLinks = [
  { href: "/products/enterprise-ai-chatbot", labelKey: "products.enterpriseAIChatbot.title" },
  { href: "/products/intelligent-voice-assistant", labelKey: "products.intelligentVoiceAssistant.title" },
  { href: "/products/business-process-automation", labelKey: "products.businessProcessAutomation.title" },
  { href: "/products/predictive-analytics-platform", labelKey: "products.predictiveAnalyticsPlatform.title" },
  { href: "/products/custom-ai-development", labelKey: "products.customAIDevelopment.title" },
  { href: "/products/ai-implementation-services", labelKey: "products.aiImplementationServices.title" },
]

export function ProductLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <div className="container grid gap-8 px-4 py-20 pt-28 md:grid-cols-[220px_1fr] md:px-6">
        <aside className="hidden md:block">
          <div className="sticky top-24 rounded-lg border bg-card p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">{t("nav.products")}</h2>
            <nav className="grid gap-1">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm hover:bg-muted">
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  )
}
