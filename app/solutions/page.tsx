"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SolutionsPage() {
  const { t } = useLanguage()
  const solutions = [
    {
      titleKey: "solutions.core.title",
      descriptionKey: "solutions.core.desc",
      href: "/solutions/core-it-services",
    },
    {
      titleKey: "solutions.ai.title",
      descriptionKey: "solutions.ai.desc",
      href: "/solutions/ai-solutions",
    },
    {
      titleKey: "solutions.data.title",
      descriptionKey: "solutions.data.desc",
      href: "/solutions/data-solutions",
    },
    {
      titleKey: "solutions.cloud.title",
      descriptionKey: "solutions.cloud.desc",
      href: "/solutions/cloud-services",
    },
    {
      titleKey: "solutions.industry.title",
      descriptionKey: "solutions.industry.desc",
      href: "/solutions/industry-specific-ai",
    },
    {
      titleKey: "solutions.security.title",
      descriptionKey: "solutions.security.desc",
      href: "/solutions/cybersecurity",
    },
    {
      titleKey: "solutions.software.title",
      descriptionKey: "solutions.software.desc",
      href: "/solutions/custom-software",
    },
    {
      titleKey: "solutions.training.title",
      descriptionKey: "solutions.training.desc",
      href: "/solutions/training-consulting",
    },
    {
      titleKey: "solutions.managed.title",
      descriptionKey: "solutions.managed.desc",
      href: "/solutions/managed-services",
    },
    {
      titleKey: "solutions.emerging.title",
      descriptionKey: "solutions.emerging.desc",
      href: "/solutions/emerging-technologies",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("solutions.title")}</h1>
        <p className="text-xl text-muted-foreground">{t("solutions.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution) => (
          <div
            key={solution.titleKey}
            className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold">{t(solution.titleKey)}</h3>
            <p className="mt-2 text-muted-foreground">{t(solution.descriptionKey)}</p>
            <Button variant="link" className="mt-4 p-0 h-auto" asChild>
              <Link href={solution.href} className="group-hover:text-primary flex items-center gap-1">
                {t("common.learnMore")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
