import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Phone, BarChart, Shield, Zap } from "lucide-react"

export default function VoiceIVRSystemPage() {
  const features = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Intent Recognition",
      description:
        "Advanced AI that understands caller intent from natural language, eliminating frustrating menu trees.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Dynamic Call Routing",
      description:
        "Intelligent routing that connects callers to the right department or agent based on their specific needs.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Voice Authentication",
      description: "Secure voice biometrics that verify caller identity without requiring PINs or passwords.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Call Analytics",
      description:
        "Comprehensive analytics that provide insights into call patterns, resolution rates, and customer satisfaction.",
    },
  ]

  const benefits = [
    "Reduce average call handling time by up to 40%",
    "Improve first-call resolution rates",
    "Enhance caller satisfaction with natural interactions",
    "Decrease call abandonment rates",
    "Lower operational costs through automation",
    "Gain valuable insights from call analytics",
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ivr-dashboard-overview.png"
            alt="Voice-Enabled IVR System"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-4xl">
            <div className="text-primary font-semibold text-sm md:text-base mb-2">VOICE ASSISTANTS</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Voice-Enabled IVR System</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Modern interactive voice response system that uses AI to understand caller intent and route calls
              efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 mb-4">
                  Our Voice-Enabled IVR System transforms the traditional call center experience by replacing confusing
                  menu trees with natural language interactions. Callers simply state their needs in their own words,
                  and our AI understands their intent and routes them appropriately.
                </p>
                <p className="text-white/80 mb-4">
                  This system integrates seamlessly with your existing telephony infrastructure while providing modern
                  capabilities like voice biometrics for authentication, sentiment analysis for detecting caller
                  frustration, and comprehensive analytics for continuous improvement.
                </p>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-gray-800">
                    <div className="text-primary mb-3 md:mb-4">{feature.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Integration Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Seamless Integration</h2>
              <div className="bg-gray-900/50 p-4 md:p-8 rounded-lg border border-gray-800">
                <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
                  Our Voice-Enabled IVR System integrates with your existing telephony infrastructure and business
                  systems:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <img src="/network-connections.png" alt="Cisco" className="h-6 md:h-8" />
                    </div>
                    <span className="text-white text-xs md:text-sm">Cisco</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <img src="/abstract-communication-network.png" alt="Avaya" className="h-6 md:h-8" />
                    </div>
                    <span className="text-white text-xs md:text-sm">Avaya</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <img src="/Salesforce-Cloud.png" alt="Salesforce" className="h-6 md:h-8" />
                    </div>
                    <span className="text-white text-xs md:text-sm">Salesforce</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <img src="/twilio-logo-abstract.png" alt="Twilio" className="h-6 md:h-8" />
                    </div>
                    <span className="text-white text-xs md:text-sm">Twilio</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Interested in this product?</h3>
              <p className="text-white/80 mb-6">
                Contact our team to learn more about how this solution can transform your call center operations.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/contact?product=${encodeURIComponent("Voice-Enabled IVR System")}`}>
                    Request Information
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full text-white border-white/20 hover:bg-white/10">
                  <Link href="/pricing">
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="font-semibold text-white mb-3">Related Products</h4>
                <div className="space-y-4">
                  <Link href="/products/intelligent-voice-assistant" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Intelligent Voice Assistant
                    </h5>
                    <p className="text-sm text-white/60">
                      Advanced voice recognition technology for natural interactions.
                    </p>
                  </Link>
                  <Link href="/products/enterprise-ai-chatbot" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Enterprise AI Chatbot
                    </h5>
                    <p className="text-sm text-white/60">
                      Our flagship AI chatbot solution for enterprise customer service.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
