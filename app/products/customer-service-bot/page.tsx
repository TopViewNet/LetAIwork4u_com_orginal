import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { ProductLayout } from "@/components/product-layout"

export default function CustomerServiceBotPage() {
  const features = [
    {
      title: "Quick Response Time",
      description: "Instant responses to customer inquiries with minimal wait time.",
    },
    {
      title: "FAQ Knowledge Base",
      description: "Comprehensive knowledge base that can be easily updated and expanded.",
    },
    {
      title: "Ticket Creation",
      description: "Automatic creation of support tickets for issues that require human intervention.",
    },
    {
      title: "Customer Satisfaction Tracking",
      description: "Built-in tools to measure and improve customer satisfaction with bot interactions.",
    },
  ]

  const benefits = [
    "Reduce customer service costs by up to 30%",
    "Handle thousands of inquiries simultaneously",
    "Improve first-contact resolution rates",
    "Collect valuable customer feedback",
    "Free up human agents for complex issues",
    "Available 24/7 with consistent quality",
  ]

  return (
    <ProductLayout>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/2">
          <div className="text-blue-400 font-semibold mb-2">CHATBOTS</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Service Bot</h1>
          <p className="text-xl text-white/80 mb-8">
            Specialized chatbot designed to handle customer inquiries, process returns, and provide product information
            automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              View Documentation
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/modern-chatbot-interface.png"
            alt="Customer Service Bot"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              <span className="text-white/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">E-commerce Support</h3>
            <p className="text-gray-300">
              Handle order status inquiries, return requests, and product information questions automatically.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">IT Helpdesk</h3>
            <p className="text-gray-300">
              Provide first-level support for common IT issues and password resets while routing complex problems to
              specialists.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">Financial Services</h3>
            <p className="text-gray-300">
              Answer account queries, provide transaction information, and assist with basic financial services.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
            <p className="text-gray-300">
              Schedule appointments, provide basic health information, and answer insurance coverage questions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900/30 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to enhance your customer service?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Join businesses that have improved customer satisfaction and reduced support costs with our Customer Service
          Bot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Schedule a Demo
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </ProductLayout>
  )
}
