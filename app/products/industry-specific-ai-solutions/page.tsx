import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Building, Stethoscope, ShoppingBag, Landmark, Truck } from "lucide-react"

export default function IndustrySpecificAISolutionsPage() {
  const industries = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Healthcare",
      description:
        "AI solutions for patient care optimization, medical imaging analysis, clinical decision support, and healthcare operations.",
      features: [
        "Diagnostic assistance through medical image analysis",
        "Patient risk stratification and early intervention",
        "Operational efficiency in scheduling and resource allocation",
        "Clinical documentation improvement through NLP",
      ],
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      title: "Finance",
      description:
        "AI applications for risk assessment, fraud detection, algorithmic trading, and customer service automation.",
      features: [
        "Fraud detection and prevention systems",
        "Automated credit risk assessment",
        "Personalized financial advice generation",
        "Regulatory compliance monitoring",
      ],
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Retail",
      description:
        "AI-powered inventory management, customer insights, personalized recommendations, and demand forecasting.",
      features: [
        "Demand forecasting and inventory optimization",
        "Personalized product recommendations",
        "Visual search and recognition",
        "Customer behavior analysis",
      ],
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Manufacturing",
      description:
        "AI solutions for predictive maintenance, quality control, supply chain optimization, and production automation.",
      features: [
        "Predictive maintenance to prevent equipment failure",
        "Quality control through computer vision",
        "Production optimization and scheduling",
        "Supply chain risk management",
      ],
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description:
        "Smart solutions for route optimization, warehouse management, delivery prediction, and fleet maintenance.",
      features: [
        "Route optimization and dynamic rerouting",
        "Warehouse automation and inventory management",
        "Delivery time prediction",
        "Fleet maintenance optimization",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/industry-ai-convergence.png"
            alt="Industry-Specific AI Solutions"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-32 pb-16">
          <div className="max-w-4xl">
            <div className="text-primary font-semibold mb-2">CUSTOM SOLUTIONS</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry-Specific AI Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI solutions designed for specific industries like healthcare, finance, retail, and manufacturing.
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
                  Our Industry-Specific AI Solutions are designed to address the unique challenges and opportunities in
                  your sector. We combine deep domain expertise with cutting-edge AI capabilities to create systems that
                  deliver tangible business value tailored to your industry's specific needs.
                </p>
                <p className="text-white/80 mb-4">
                  Unlike generic AI platforms, our industry-specific solutions are built with a thorough understanding
                  of your sector's unique processes, regulations, and competitive dynamics, ensuring technology that
                  truly fits your business context and delivers measurable results.
                </p>
              </div>
            </section>

            {/* Industries Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Industry Solutions</h2>
              <div className="space-y-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-start">
                      <div className="text-primary mr-4">{industry.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
                        <p className="text-gray-300 mb-4">{industry.description}</p>
                        <h4 className="text-sm font-semibold text-white mb-2">Key Capabilities:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {industry.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Approach Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Industry Assessment</h3>
                    <p className="text-sm text-gray-300">
                      We analyze your industry's specific challenges, opportunities, and regulatory requirements.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Solution Design</h3>
                    <p className="text-sm text-gray-300">
                      Our team designs AI solutions tailored to your industry's unique processes and needs.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Implementation & Optimization</h3>
                    <p className="text-sm text-gray-300">
                      We implement, test, and continuously optimize your solution to ensure maximum value.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Interested in industry-specific AI?</h3>
              <p className="text-white/80 mb-6">
                Contact our team to discuss how our industry-specific AI solutions can address your unique business
                challenges.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/contact?product=${encodeURIComponent("Industry-Specific AI Solutions")}`}>
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
                  <Link href="/products/custom-ai-development" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Custom AI Development
                    </h5>
                    <p className="text-sm text-white/60">
                      Tailored AI solutions designed specifically for your unique business challenges.
                    </p>
                  </Link>
                  <Link href="/products/ai-implementation-services" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      AI Implementation Services
                    </h5>
                    <p className="text-sm text-white/60">
                      Expert guidance on AI strategy, implementation, and optimization.
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
