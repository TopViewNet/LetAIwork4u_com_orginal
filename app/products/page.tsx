"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { useMobileDetection } from "@/hooks/use-mobile-detection"
import { useEffect, useState } from "react"

export default function ProductsPage() {
  const { t, isRTL } = useLanguage()
  const { isMobile } = useMobileDetection()
  const [mounted, setMounted] = useState(false)

  // Ensure hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  const products = [
    {
      titleKey: "products.enterpriseAIChatbot.title",
      categoryKey: "products.category.chatbots",
      descriptionKey: "products.enterpriseAIChatbot.description",
      image: "/products/chatbot.png",
      href: "/products/enterprise-ai-chatbot",
      features: [
        "products.feature.customerSupport",
        "products.feature.multilanguage",
        "products.feature.crm",
        "products.feature.analyticsDashboard",
      ],
    },
    {
      titleKey: "products.intelligentVoiceAssistant.title",
      categoryKey: "products.category.voiceAssistants",
      descriptionKey: "products.intelligentVoiceAssistant.description",
      image: "/products/voice-assistant.png",
      href: "/products/intelligent-voice-assistant",
      features: [
        "products.feature.nlp",
        "products.feature.voiceRecognition",
        "products.feature.multiplatform",
        "products.feature.customVoice",
      ],
    },
    {
      titleKey: "products.businessProcessAutomation.title",
      categoryKey: "products.category.automation",
      descriptionKey: "products.businessProcessAutomation.description",
      image: "/products/automation.png",
      href: "/products/business-process-automation",
      features: [
        "products.feature.workflow",
        "products.feature.documents",
        "products.feature.scheduling",
        "products.feature.performance",
      ],
    },
    {
      titleKey: "products.predictiveAnalyticsPlatform.title",
      categoryKey: "products.category.analytics",
      descriptionKey: "products.predictiveAnalyticsPlatform.description",
      image: "/products/analytics.png",
      href: "/products/predictive-analytics-platform",
      features: [
        "products.feature.forecasting",
        "products.feature.visualization",
        "products.feature.realtime",
        "products.feature.reporting",
      ],
    },
    {
      titleKey: "products.customAIDevelopment.title",
      categoryKey: "products.category.customSolutions",
      descriptionKey: "products.customAIDevelopment.description",
      image: "/products/custom-ai.png",
      href: "/products/custom-ai-development",
      features: [
        "products.feature.aiModels",
        "products.feature.algorithms",
        "products.feature.industry",
        "products.feature.ongoingSupport",
      ],
    },
    {
      titleKey: "products.aiImplementationServices.title",
      categoryKey: "products.category.consulting",
      descriptionKey: "products.aiImplementationServices.description",
      image: "/products/consulting.png",
      href: "/products/ai-implementation-services",
      features: [
        "products.feature.strategy",
        "products.feature.implementation",
        "products.feature.training",
        "products.feature.optimization",
      ],
    },
  ]

  // Animation variants for a subtle fade-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  // Fallback images for products
  const fallbackImages = {
    "/products/chatbot.png": "/modern-ai-interface.png",
    "/products/voice-assistant.png": "/connected-conversations.png",
    "/products/automation.png": "/interconnected-automation.png",
    "/products/analytics.png": "/data-dashboard-overview.png",
    "/products/custom-ai.png": "/bespoke-ai-solutions.png",
    "/products/consulting.png": "/placeholder.svg?height=300&width=500&query=AI consulting services",
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-6 py-20 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">{t("products.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("products.subtitle")}</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image || fallbackImages[product.image as keyof typeof fallbackImages]}
                  alt={t(product.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      fallbackImages[product.image as keyof typeof fallbackImages] ||
                      "/placeholder.svg?height=300&width=500&query=AI technology"
                  }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-1 text-black">{t(product.titleKey)}</h2>
                <p className="text-xs font-semibold text-blue-600 mb-3">{t(product.categoryKey)}</p>
                <p className="text-gray-700 mb-4 text-sm min-h-[4.5rem]">{t(product.descriptionKey)}</p>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold mb-2 text-gray-800">
                    {isMobile ? t("products.keyFeatures") : t("products.keyFeatures")}:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="mr-1 text-blue-600">•</span>
                        <span className="line-clamp-1">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={product.href}
                  className="block text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  {t("products.viewDetails")}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
