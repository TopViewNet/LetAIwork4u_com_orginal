import { Button } from "@/components/ui/button"
import { ProductLayout } from "@/components/product-layout"

export default function EnterpriseAIChatbotPage() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding complex customer queries and context.",
    },
    {
      title: "Instant Responses",
      description: "Real-time responses to customer inquiries with minimal latency.",
    },
    {
      title: "Multilingual Support",
      description: "Support for over 50 languages to serve your global customer base.",
    },
    {
      title: "24/7 Availability",
      description: "Always-on customer service without the limitations of human working hours.",
    },
    {
      title: "Seamless Integration",
      description: "Easy integration with your existing CRM, helpdesk, and communication platforms.",
    },
  ]

  return (
    <ProductLayout>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16 container px-4 md:px-6 pt-32">
        <div className="md:w-1/2">
          <div className="text-blue-600 font-semibold mb-2">CHATBOTS</div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Enterprise AI Chatbot</h1>
          <p className="text-xl text-gray-700 mb-8">
            Our flagship AI chatbot solution for enterprise customer service. Seamlessly integrates with your existing
            systems and provides 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="text-black border-gray-300 hover:bg-gray-100">
              View Documentation
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/products/chatbot.png" alt="Enterprise AI Chatbot" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20 container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12 mb-20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to transform your customer service?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that have improved customer satisfaction and reduced support costs with our AI
            chatbot solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-black border-gray-300 hover:bg-gray-100">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </ProductLayout>
  )
}
