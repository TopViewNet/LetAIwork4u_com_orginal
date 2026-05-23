"use client"

import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const products = {
  "enterprise-ai-chatbot": {
    titleKey: "products.enterpriseAIChatbot.title",
    categoryKey: "products.category.chatbots",
    descriptionKey: "products.enterpriseAIChatbot.description",
    image: "/products/chatbot.png",
    features: ["products.feature.customerSupport", "products.feature.multilanguage", "products.feature.crm", "products.feature.analyticsDashboard"],
  },
  "intelligent-voice-assistant": {
    titleKey: "products.intelligentVoiceAssistant.title",
    categoryKey: "products.category.voiceAssistants",
    descriptionKey: "products.intelligentVoiceAssistant.description",
    image: "/products/voice-assistant.png",
    features: ["products.feature.nlp", "products.feature.voiceRecognition", "products.feature.multiplatform", "products.feature.customVoice"],
  },
  "business-process-automation": {
    titleKey: "products.businessProcessAutomation.title",
    categoryKey: "products.category.automation",
    descriptionKey: "products.businessProcessAutomation.description",
    image: "/products/automation.png",
    features: ["products.feature.workflow", "products.feature.documents", "products.feature.scheduling", "products.feature.performance"],
  },
  "predictive-analytics-platform": {
    titleKey: "products.predictiveAnalyticsPlatform.title",
    categoryKey: "products.category.analytics",
    descriptionKey: "products.predictiveAnalyticsPlatform.description",
    image: "/products/analytics.png",
    features: ["products.feature.forecasting", "products.feature.visualization", "products.feature.realtime", "products.feature.reporting"],
  },
  "custom-ai-development": {
    titleKey: "products.customAIDevelopment.title",
    categoryKey: "products.category.customSolutions",
    descriptionKey: "products.customAIDevelopment.description",
    image: "/products/custom-ai.png",
    features: ["products.feature.aiModels", "products.feature.algorithms", "products.feature.industry", "products.feature.ongoingSupport"],
  },
  "ai-implementation-services": {
    titleKey: "products.aiImplementationServices.title",
    categoryKey: "products.category.consulting",
    descriptionKey: "products.aiImplementationServices.description",
    image: "/products/consulting.png",
    features: ["products.feature.strategy", "products.feature.implementation", "products.feature.training", "products.feature.optimization"],
  },
}

export default function ProductDetailPage() {
  const { t, isRTL } = useLanguage()
  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : ""
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={t(product.titleKey)}
            className="h-full w-full object-cover opacity-25"
            onError={(event) => {
              event.currentTarget.src = "/modern-ai-interface.png"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white" />
        </div>
        <div className="container relative z-10 px-4 pb-16 md:px-6">
          <Link href="/products" className="mb-8 inline-flex text-sm font-medium text-blue-700 hover:text-blue-900">
            {t("products.back")}
          </Link>
          <p className="font-semibold text-blue-600">{t(product.categoryKey)}</p>
          <h1 className="mt-2 max-w-4xl text-4xl font-bold text-black md:text-5xl">{t(product.titleKey)}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-700">{t(product.descriptionKey)}</p>
        </div>
      </section>

      <main className="container grid gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_340px]">
        <div className="grid gap-10">
          <section>
            <h2 className="text-3xl font-bold text-black">{t("products.overview")}</h2>
            <p className="mt-4 leading-7 text-gray-700">{t("products.detail.overview")}</p>
            <p className="mt-4 leading-7 text-gray-700">{t("products.detail.integration")}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black">{t("products.keyFeatures")}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <Check className="mb-3 h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-black">{t(feature)}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{t("products.detail.featureDesc")}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black">{t("products.benefits")}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {["products.detail.benefit.1", "products.detail.benefit.2", "products.detail.benefit.3", "products.detail.benefit.4"].map((key) => (
                <div key={key} className="flex items-start gap-2 text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{t(key)}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside>
          <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold text-black">{t("products.interestedInProduct")}</h3>
            <p className="mt-3 text-gray-700">{t("products.contactTeamInfo")}</p>
            <div className="mt-6 grid gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href={`/contact?product=${encodeURIComponent(t(product.titleKey))}`}>{t("products.requestInformation")}</Link>
              </Button>
              <Button variant="outline" asChild className="text-black">
                <Link href="/contact">
                  {t("products.contactSales")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
