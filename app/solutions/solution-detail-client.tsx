"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

type SolutionDetailClientProps = {
  baseKey: string
}

export function SolutionDetailClient({ baseKey }: SolutionDetailClientProps) {
  const { t, isRTL } = useLanguage()
  const points = [
    "solutions.detail.point.1",
    "solutions.detail.point.2",
    "solutions.detail.point.3",
    "solutions.detail.point.4",
  ]

  return (
    <div className="space-y-8" dir={isRTL ? "rtl" : "ltr"}>
      <div className="space-y-4">
        <Link href="/solutions" className="text-sm font-medium text-blue-700 hover:text-blue-900">
          {t("solutions.back")}
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-black">{t(`${baseKey}.title`)}</h1>
        <p className="max-w-3xl text-xl leading-8 text-muted-foreground">{t(`${baseKey}.desc`)}</p>
      </div>

      <div className="max-w-none space-y-4 text-base leading-7 text-gray-700">
        <p>{t("solutions.detail.overview")}</p>
        <p>{t("solutions.detail.delivery")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {points.map((point) => (
          <div key={point} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <CheckCircle2 className="mb-3 h-5 w-5 text-green-600" />
            <p className="leading-7 text-gray-700">{t(point)}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
        <h3 className="text-xl font-semibold text-black">{t("solutions.detail.ctaTitle")}</h3>
        <p className="mt-3 text-gray-700">{t("solutions.detail.ctaDesc")}</p>
        <Button asChild className="mt-5 bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">
            {t("solutions.detail.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
