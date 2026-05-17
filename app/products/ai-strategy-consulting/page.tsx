import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Lightbulb, TrendingUp, Target, Users } from "lucide-react"

export default function AIStrategyConsultingPage() {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Opportunity Assessment",
      description: "Comprehensive evaluation of your business to identify high-value AI implementation opportunities.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Competitive Analysis",
      description:
        "Assessment of AI adoption in your industry and competitive landscape to identify strategic advantages.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "ROI Modeling",
      description: "Detailed financial modeling to project returns on AI investments and prioritize initiatives.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Implementation Planning",
      description:
        "Comprehensive roadmap for AI adoption, including technology selection, team development, and change management.",
    },
  ]

  const benefits = [
    "Align AI initiatives with business objectives",
    "Prioritize high-impact AI opportunities",
    "Reduce risk in AI adoption",
    "Accelerate time-to-value for AI investments",
    "Build internal capabilities for long-term AI success",
    "Create competitive advantage through strategic AI adoption",
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We conduct a thorough assessment of your business objectives, current capabilities, and industry context.",
    },
    {
      number: "02",
      title: "Opportunity Identification",
      description:
        "We identify and prioritize AI opportunities based on business impact, feasibility, and strategic alignment.",
    },
    {
      number: "03",
      title: "Strategy Development",
      description: "We develop a comprehensive AI strategy tailored to your specific business needs and objectives.",
    },
    {
      number: "04",
      title: "Implementation Planning",
      description:
        "We create a detailed roadmap for executing your AI strategy, including technology, talent, and change management.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "We provide continued guidance and support as you implement your AI strategy and adapt to changing conditions.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=600&width=1200&query=AI strategy consulting session"
            alt="AI Strategy Consulting"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-32 pb-16">
          <div className="max-w-4xl">
            <div className="text-primary font-semibold mb-2">CONSULTING</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Strategy Consulting</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Strategic advisory services to help organizations develop and execute effective AI adoption strategies.
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
                  Our AI Strategy Consulting service helps organizations navigate the complex landscape of artificial
                  intelligence to develop and implement strategies that create genuine business value. We work with you
                  to identify the most promising AI opportunities, prioritize initiatives based on business impact, and
                  create a roadmap for successful implementation.
                </p>
                <p className="text-white/80 mb-4">
                  Our approach combines deep technical expertise with business acumen, ensuring that your AI strategy
                  aligns with your overall business objectives and delivers measurable results. We focus not just on the
                  technology aspects but also on the organizational changes, process adjustments, and skills development
                  needed for successful AI adoption.
                </p>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
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

            {/* Process Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {step.number}
                      </div>
                      {index < processSteps.length - 1 && <div className="w-0.5 h-16 bg-gray-800 mx-auto mt-2"></div>}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Ready to develop your AI strategy?</h3>
              <p className="text-white/80 mb-6">
                Contact our team to discuss how our AI Strategy Consulting services can help your organization leverage
                AI for competitive advantage.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/contact?product=${encodeURIComponent("AI Strategy Consulting")}`}>
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
                  <Link href="/products/ai-implementation-services" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      AI Implementation Services
                    </h5>
                    <p className="text-sm text-white/60">Expert guidance on AI implementation and optimization.</p>
                  </Link>
                  <Link href="/products/custom-ai-development" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Custom AI Development
                    </h5>
                    <p className="text-sm text-white/60">
                      Tailored AI solutions designed specifically for your unique business challenges.
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
