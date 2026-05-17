import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Users, LineChart, Target, BarChart } from "lucide-react"

export default function CustomerBehaviorAnalyticsPage() {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Behavioral Segmentation",
      description: "Advanced segmentation based on customer behaviors, preferences, and interaction patterns.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Journey Mapping",
      description:
        "Visualization and analysis of customer journeys across touchpoints to identify optimization opportunities.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Conversion Analysis",
      description: "Detailed analysis of conversion paths and barriers to identify improvement opportunities.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Retention Prediction",
      description: "AI-powered prediction of customer churn risk with actionable retention recommendations.",
    },
  ]

  const benefits = [
    "Increase customer retention and lifetime value",
    "Optimize marketing spend through targeted campaigns",
    "Improve conversion rates across customer touchpoints",
    "Personalize customer experiences based on behavior",
    "Identify high-value customer segments for focused attention",
    "Predict and prevent customer churn before it happens",
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/customer-behavior-dashboard.png"
            alt="Customer Behavior Analytics"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-32 pb-16">
          <div className="max-w-4xl">
            <div className="text-primary font-semibold mb-2">ANALYTICS</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Behavior Analytics</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Gain deep insights into customer behavior patterns to optimize marketing strategies and improve customer
              experience.
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
                  Our Customer Behavior Analytics platform helps businesses understand how customers interact with their
                  products, services, and brand across all touchpoints. By analyzing behavioral patterns, we provide
                  actionable insights that enable you to optimize marketing strategies, improve customer experiences,
                  and increase retention and lifetime value.
                </p>
                <p className="text-white/80 mb-4">
                  Unlike traditional analytics that focus primarily on demographic data, our solution combines
                  behavioral data, transaction history, and interaction patterns to create a comprehensive view of your
                  customers. This deeper understanding enables more effective personalization, targeted marketing, and
                  strategic decision-making.
                </p>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
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

            {/* Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Common Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">E-commerce Optimization</h3>
                  <p className="text-gray-300">
                    Analyze browsing patterns, cart abandonment, and purchase behavior to optimize the shopping
                    experience and increase conversions.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">Marketing Campaign Targeting</h3>
                  <p className="text-gray-300">
                    Identify customer segments most likely to respond to specific offers and tailor marketing campaigns
                    accordingly.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">Churn Prevention</h3>
                  <p className="text-gray-300">
                    Predict which customers are at risk of churning and implement targeted retention strategies before
                    they leave.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">Product Development</h3>
                  <p className="text-gray-300">
                    Use behavioral insights to inform product development and prioritize features based on customer
                    usage patterns.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Interested in this product?</h3>
              <p className="text-white/80 mb-6">
                Contact our team to learn more about how our Customer Behavior Analytics can help you understand and
                engage your customers more effectively.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/contact?product=${encodeURIComponent("Customer Behavior Analytics")}`}>
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
                  <Link href="/products/predictive-analytics-platform" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Predictive Analytics Platform
                    </h5>
                    <p className="text-sm text-white/60">
                      Transform your data into actionable insights with our advanced analytics platform.
                    </p>
                  </Link>
                  <Link href="/products/business-process-automation" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Business Process Automation
                    </h5>
                    <p className="text-sm text-white/60">
                      Streamline your operations with our AI-powered workflow automation solution.
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
