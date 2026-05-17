"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { notFound, useParams } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

// Product data
const products = {
  "enterprise-ai-chatbot": {
    titleKey: "products.enterpriseAIChatbot.title",
    categoryKey: "products.category.chatbots",
    descriptionKey: "products.enterpriseAIChatbot.description",
    heroImage: "/products/chatbot.png",
    overview: [
      "Our Enterprise AI Chatbot is a cutting-edge solution designed to revolutionize customer service for businesses of all sizes. Powered by advanced natural language processing and machine learning algorithms, our chatbot understands customer queries with remarkable accuracy and provides helpful, human-like responses.",
      "Unlike traditional chatbots, our solution continuously learns from interactions, improving its responses over time. It seamlessly integrates with your existing CRM, knowledge base, and support systems, ensuring a unified customer experience across all touchpoints.",
    ],
    features: [
      {
        title: "Natural Language Understanding",
        description: "Advanced NLP capabilities to understand complex customer queries and intent.",
      },
      {
        title: "Multi-channel Support",
        description: "Deploy across website, mobile apps, social media, and messaging platforms.",
      },
      {
        title: "Seamless Integration",
        description: "Connect with your CRM, knowledge base, and support ticketing systems.",
      },
      {
        title: "Continuous Learning",
        description: "AI that improves over time based on interactions and feedback.",
      },
    ],
    benefits: [
      "Reduce customer service costs by up to 30%",
      "Available 24/7 with consistent quality",
      "Free up human agents to handle complex issues",
      "Handle thousands of customer inquiries simultaneously",
      "Improve customer satisfaction with quick, accurate responses",
      "Gather valuable customer insights through analytics",
    ],
    specifications: [
      { name: "Supported Languages", value: "40+" },
      { name: "Response Time", value: "<1 second" },
      { name: "Accuracy Rate", value: "95-98%" },
      { name: "Integration APIs", value: "REST, GraphQL, Webhooks" },
      { name: "Deployment Options", value: "Cloud, On-premise, Hybrid" },
    ],
    relatedProducts: ["intelligent-voice-assistant", "business-process-automation"],
  },
  "intelligent-voice-assistant": {
    titleKey: "products.intelligentVoiceAssistant.title",
    categoryKey: "products.category.voiceAssistants",
    descriptionKey: "products.intelligentVoiceAssistant.description",
    heroImage: "/products/voice-assistant.png",
    overview: [
      "Our Intelligent Voice Assistant leverages cutting-edge speech recognition and natural language understanding to create seamless voice interactions for your customers and employees. With advanced AI capabilities, it can understand context, remember conversation history, and provide natural-sounding responses.",
      "The voice assistant can be deployed across multiple channels, including phone systems, mobile apps, smart speakers, and IoT devices, creating a consistent experience regardless of how users choose to interact with your business.",
    ],
    features: [
      {
        title: "Advanced Speech Recognition",
        description: "Industry-leading speech recognition with 98% accuracy even in noisy environments.",
      },
      {
        title: "Natural Voice Synthesis",
        description: "Human-like voice responses that create comfortable, natural conversations.",
      },
      {
        title: "Multilingual Support",
        description: "Support for over 30 languages and regional accents to serve diverse customer bases.",
      },
      {
        title: "Contextual Understanding",
        description: "AI that remembers conversation history and understands context for meaningful interactions.",
      },
    ],
    benefits: [
      "Provide 24/7 voice-based customer service",
      "Reduce call center volume by up to 40%",
      "Improve accessibility for users who prefer voice interaction",
      "Handle routine inquiries without human intervention",
      "Create consistent brand experiences across voice channels",
      "Gather valuable voice interaction data for business insights",
    ],
    specifications: [
      { name: "Supported Languages", value: "30+" },
      { name: "Response Time", value: "<1.5 seconds" },
      { name: "Accuracy Rate", value: "94-98%" },
      { name: "Integration Options", value: "Telephony, VoIP, Smart Speakers" },
      { name: "Deployment Models", value: "Cloud, Hybrid" },
    ],
    relatedProducts: ["enterprise-ai-chatbot", "business-process-automation"],
  },
  "business-process-automation": {
    titleKey: "products.businessProcessAutomation.title",
    categoryKey: "products.category.automation",
    descriptionKey: "products.businessProcessAutomation.description",
    heroImage: "/products/automation.png",
    overview: [
      "Our Business Process Automation platform helps organizations streamline operations, reduce manual effort, and improve efficiency through intelligent workflow automation. By combining AI, machine learning, and robotic process automation, we enable you to automate complex business processes across departments.",
      "The platform features an intuitive drag-and-drop interface for creating sophisticated workflows with conditional logic, approval processes, and system integrations. Monitor performance through comprehensive analytics dashboards and continuously optimize your automated processes.",
    ],
    features: [
      {
        title: "Intelligent Workflow Design",
        description: "Drag-and-drop interface to create sophisticated workflows with conditional logic and branching.",
      },
      {
        title: "Document Processing",
        description:
          "Extract data from documents, forms, and emails with AI-powered OCR and natural language processing.",
      },
      {
        title: "System Integration",
        description: "Connect with your existing business systems including ERP, CRM, and HR platforms.",
      },
      {
        title: "Performance Analytics",
        description:
          "Comprehensive dashboards to monitor automation performance and identify optimization opportunities.",
      },
    ],
    benefits: [
      "Reduce processing time by up to 85%",
      "Decrease operational costs by 40% on average",
      "Minimize human errors in routine processes",
      "Improve employee satisfaction by eliminating tedious tasks",
      "Enhance compliance through standardized processes",
      "Scale operations without proportional increase in headcount",
    ],
    specifications: [
      { name: "Pre-built Templates", value: "100+" },
      { name: "Integration Connectors", value: "200+" },
      { name: "Processing Capacity", value: "Unlimited" },
      { name: "Deployment Options", value: "Cloud, On-premise, Hybrid" },
      { name: "Security Compliance", value: "SOC 2, GDPR, HIPAA" },
    ],
    relatedProducts: ["enterprise-ai-chatbot", "intelligent-voice-assistant"],
  },
  "predictive-analytics-platform": {
    titleKey: "products.predictiveAnalyticsPlatform.title",
    categoryKey: "products.category.analytics",
    descriptionKey: "products.predictiveAnalyticsPlatform.description",
    heroImage: "/products/analytics.png",
    overview: [
      "Our Predictive Analytics Platform empowers organizations to harness the full potential of their data through advanced analytics, machine learning, and visualization tools. Turn complex data sets into clear, actionable insights that drive better business decisions.",
      "The platform combines powerful data processing capabilities with intuitive visualization tools, making sophisticated analytics accessible to users across your organization. From historical analysis to predictive forecasting, our solution helps you understand what happened, why it happened, and what's likely to happen next.",
    ],
    features: [
      {
        title: "Advanced Data Modeling",
        description: "Sophisticated algorithms to identify patterns and relationships in complex data sets.",
      },
      {
        title: "Predictive Forecasting",
        description: "AI-powered predictions of future trends, behaviors, and outcomes based on historical data.",
      },
      {
        title: "Interactive Dashboards",
        description: "Customizable visualization tools that make complex data accessible and actionable.",
      },
      {
        title: "Automated Reporting",
        description: "Scheduled reports and alerts to keep stakeholders informed of key metrics and changes.",
      },
    ],
    benefits: [
      "Identify market trends before your competitors",
      "Optimize inventory and resource allocation",
      "Reduce risk through data-driven decision making",
      "Increase revenue through targeted customer insights",
      "Improve operational efficiency with predictive maintenance",
      "Democratize data access across your organization",
    ],
    specifications: [
      { name: "Data Sources", value: "100+" },
      { name: "Visualization Types", value: "50+" },
      { name: "Processing Speed", value: "Real-time" },
      { name: "Machine Learning Models", value: "25+ pre-built" },
      { name: "Deployment Options", value: "Cloud, Hybrid" },
    ],
    relatedProducts: ["business-process-automation", "custom-ai-development"],
  },
  "custom-ai-development": {
    titleKey: "products.customAIDevelopment.title",
    categoryKey: "products.category.customSolutions",
    descriptionKey: "products.customAIDevelopment.description",
    heroImage: "/products/custom-ai.png",
    overview: [
      "Our Custom AI Development service creates bespoke artificial intelligence solutions tailored to your specific business challenges and opportunities. When off-the-shelf products don't address your unique requirements, our team of AI specialists, data scientists, and developers will build custom solutions that deliver exceptional results.",
      "We follow a collaborative approach, working closely with your team to understand your business objectives, data environment, and technical requirements. From concept to deployment and ongoing optimization, we ensure your custom AI solution delivers measurable business value.",
    ],
    features: [
      {
        title: "Tailored AI Models",
        description: "Custom-built algorithms designed specifically for your unique business challenges.",
      },
      {
        title: "Proprietary Solutions",
        description: "Exclusive AI technology that provides competitive advantage in your industry.",
      },
      {
        title: "End-to-End Development",
        description: "Comprehensive service from initial concept through deployment and optimization.",
      },
      {
        title: "Specialized Expertise",
        description: "Access to AI specialists, data scientists, and developers with domain knowledge.",
      },
    ],
    benefits: [
      "Address specific business challenges that off-the-shelf solutions can't solve",
      "Create unique competitive advantages through proprietary AI technology",
      "Optimize for your specific data environment and business processes",
      "Ensure seamless integration with your existing technology ecosystem",
      "Maintain full control over your AI solution and its development",
      "Scale and adapt your solution as your business evolves",
    ],
    specifications: [
      { name: "Development Approach", value: "Agile" },
      { name: "Technology Stack", value: "Customized" },
      { name: "Delivery Timeline", value: "3-6 months typical" },
      { name: "IP Ownership", value: "Client-owned" },
      { name: "Support Options", value: "Ongoing maintenance available" },
    ],
    relatedProducts: ["ai-implementation-services", "predictive-analytics-platform"],
  },
  "ai-implementation-services": {
    titleKey: "products.aiImplementationServices.title",
    categoryKey: "products.category.consulting",
    descriptionKey: "products.aiImplementationServices.description",
    heroImage: "/products/consulting.png",
    overview: [
      "Our AI Implementation Services provide expert guidance and support throughout your AI adoption journey. From initial strategy development to solution selection, implementation, and ongoing optimization, our team of experienced consultants ensures your AI initiatives deliver maximum business value.",
      "We take a holistic approach to AI implementation, considering not just the technology aspects but also the organizational changes, process adjustments, and skills development needed for successful adoption. Our proven methodology minimizes risk and accelerates time-to-value for your AI investments.",
    ],
    features: [
      {
        title: "AI Readiness Assessment",
        description: "Comprehensive evaluation of your organization's data, technology, and processes for AI adoption.",
      },
      {
        title: "Strategic Roadmapping",
        description: "Detailed implementation plan with prioritized use cases and clear ROI projections.",
      },
      {
        title: "Solution Selection",
        description: "Vendor-neutral guidance on choosing the right AI technologies for your specific needs.",
      },
      {
        title: "Change Management",
        description: "Support for organizational adaptation, including training and process redesign.",
      },
    ],
    benefits: [
      "Minimize risk in AI adoption through expert guidance",
      "Accelerate time-to-value for AI investments",
      "Ensure alignment between AI initiatives and business objectives",
      "Avoid common pitfalls in AI implementation",
      "Build internal capabilities for long-term AI success",
      "Optimize existing AI solutions for better performance",
    ],
    specifications: [
      { name: "Consulting Approach", value: "Collaborative" },
      { name: "Engagement Models", value: "Project-based, Retainer" },
      { name: "Typical Timeline", value: "2-6 months" },
      { name: "Team Composition", value: "AI Specialists, Solution Architects" },
      { name: "Deliverables", value: "Strategy, Implementation Plan, Documentation" },
    ],
    relatedProducts: ["custom-ai-development", "enterprise-ai-chatbot"],
  },
}

export default function ProductPage() {
  const { t, isRTL } = useLanguage()
  const params = useParams()
  const { slug } = params
  const [mounted, setMounted] = useState(false)

  // Ensure hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if product exists
  if (typeof slug !== "string" || !products[slug as keyof typeof products]) {
    notFound()
  }

  const product = products[slug as keyof typeof products]

  // Fallback images
  const fallbackImage = "/placeholder.svg?height=600&width=1200&query=AI technology"

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-white min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={product.heroImage || fallbackImage}
            alt={t(product.titleKey)}
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = fallbackImage
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-32 pb-16">
          <div className="max-w-4xl">
            <div className="text-blue-600 font-semibold mb-2">{t(product.categoryKey)}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">{t(product.titleKey)}</h1>
            <p className="text-xl text-gray-700 mb-8">{t(product.descriptionKey)}</p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">{t("products.overview")}</h2>
              <div className="prose max-w-none">
                {product.overview.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">{t("products.keyFeatures")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                    <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">{t("products.benefits")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">{t("products.technicalSpecifications")}</h2>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-black font-semibold">{t("products.specification")}</th>
                      <th className="px-6 py-3 text-left text-black font-semibold">{t("products.details")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-6 py-4 text-gray-700">{spec.name}</td>
                        <td className="px-6 py-4 text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Products */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-6">{t("products.relatedProducts")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.relatedProducts.map((relatedSlug) => {
                  const relatedProduct = products[relatedSlug as keyof typeof products]
                  return (
                    <Link
                      href={`/products/${relatedSlug}`}
                      key={relatedSlug}
                      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-colors shadow-md"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedProduct.heroImage || fallbackImage}
                          alt={t(relatedProduct.titleKey)}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = fallbackImage
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-blue-600 mb-1">{t(relatedProduct.categoryKey)}</div>
                        <h3 className="text-xl font-semibold text-black mb-2">{t(relatedProduct.titleKey)}</h3>
                        <p className="text-gray-700 text-sm line-clamp-2 mb-3">{t(relatedProduct.descriptionKey)}</p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          {t("products.learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24 shadow-md">
              <h3 className="text-xl font-bold text-black mb-4">{t("products.interestedInProduct")}</h3>
              <p className="text-gray-700 mb-6">{t("products.contactTeamInfo")}</p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/contact?product=${encodeURIComponent(t(product.titleKey))}`}>
                    {t("products.requestInformation")}
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full text-black border-gray-300 hover:bg-gray-100">
                  <Link href="/contact">
                    {t("products.contactSales")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-black mb-3">{t("products.category")}</h4>
                <Link
                  href={`/products?category=${encodeURIComponent(t(product.categoryKey).toLowerCase())}`}
                  className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {t(product.categoryKey)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
