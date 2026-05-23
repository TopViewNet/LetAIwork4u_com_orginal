"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function PricingPage() {
  const { t } = useLanguage()
  const enterpriseFeatures = [
    "pricing.feature.custom",
    "pricing.feature.unlimited",
    "pricing.feature.analytics",
    "pricing.feature.manager",
    "pricing.feature.support",
    "pricing.feature.languages",
    "pricing.feature.development",
    "pricing.feature.onPremise",
    "pricing.feature.security",
    "pricing.feature.reviews",
  ]

  const faqs = [
    {
      questionKey: "pricing.faq.process.q",
      answerKey: "pricing.faq.process.a",
    },
    {
      questionKey: "pricing.faq.timeline.q",
      answerKey: "pricing.faq.timeline.a",
    },
    {
      questionKey: "pricing.faq.integration.q",
      answerKey: "pricing.faq.integration.a",
    },
    {
      questionKey: "pricing.faq.training.q",
      answerKey: "pricing.faq.training.a",
    },
    {
      questionKey: "pricing.faq.cost.q",
      answerKey: "pricing.faq.cost.a",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-20 pt-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("pricing.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("pricing.subtitle")}</p>
      </div>

      <div className="max-w-4xl mx-auto bg-card rounded-lg border shadow-lg overflow-hidden mb-16">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{t("pricing.card.title")}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t("pricing.card.desc")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("pricing.benefits")}</h3>
              <ul className="space-y-3">
                {enterpriseFeatures.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("pricing.additional")}</h3>
              <ul className="space-y-3">
                {enterpriseFeatures.slice(5).map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/contact?plan=enterprise">{t("pricing.request")}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t("pricing.faq.title")}</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">{t(faq.questionKey)}</h3>
              <p className="text-muted-foreground">{t(faq.answerKey)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t("pricing.final.title")}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("pricing.final.desc")}</p>
        <Button asChild size="lg">
          <Link href="/contact">{t("pricing.final.cta")}</Link>
        </Button>
      </div>
    </div>
  )
}
