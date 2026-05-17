import { Button } from "@/components/ui/button"
import { Mic, VolumeX, Languages, Headphones, Cpu } from "lucide-react"

export default function IntelligentVoiceAssistantPage() {
  const features = [
    {
      icon: <Mic className="h-5 w-5" />,
      title: "Advanced Speech Recognition",
      description: "Industry-leading speech recognition with 98% accuracy even in noisy environments.",
    },
    {
      icon: <VolumeX className="h-5 w-5" />,
      title: "Noise Cancellation",
      description: "Sophisticated algorithms to filter out background noise for clear voice interactions.",
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: "Multilingual Capabilities",
      description: "Support for over 30 languages and regional accents to serve diverse customer bases.",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Natural Voice Responses",
      description: "Human-like voice synthesis that creates comfortable, natural conversations.",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Contextual Understanding",
      description: "AI that remembers conversation history and understands context for more meaningful interactions.",
    },
  ]

  const useCases = [
    {
      title: "Customer Service",
      description:
        "Handle customer inquiries, process orders, and resolve issues with natural voice interactions available 24/7.",
    },
    {
      title: "Virtual Receptionist",
      description:
        "Greet callers, route calls to the right department, and provide basic information without human intervention.",
    },
    {
      title: "Sales Support",
      description:
        "Qualify leads, answer product questions, and guide customers through the sales process with intelligent assistance.",
    },
    {
      title: "Internal Operations",
      description:
        "Enable employees to access information, schedule meetings, and complete tasks through voice commands.",
    },
  ]

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]">
      <div className="container px-4 md:px-6 py-20 pt-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="text-blue-400 font-semibold mb-2">VOICE ASSISTANTS</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Intelligent Voice Assistant</h1>
            <p className="text-xl text-white/80 mb-8">
              Advanced voice recognition technology that understands natural language and provides human-like responses
              for your business needs.
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
              src="/products/voice-assistant.png"
              alt="Intelligent Voice Assistant"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Use Cases</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Our Intelligent Voice Assistant can be deployed across various business functions to enhance efficiency and
            customer experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Seamless Integration</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Our voice assistant technology integrates with your existing systems and platforms for a unified experience.
          </p>
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                  <img
                    src="/placeholder.svg?height=40&width=40&query=salesforce logo"
                    alt="Salesforce"
                    className="h-8"
                  />
                </div>
                <span className="text-white text-sm">Salesforce</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                  <img src="/placeholder.svg?height=40&width=40&query=zendesk logo" alt="Zendesk" className="h-8" />
                </div>
                <span className="text-white text-sm">Zendesk</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                  <img
                    src="/placeholder.svg?height=40&width=40&query=microsoft teams logo"
                    alt="Microsoft Teams"
                    className="h-8"
                  />
                </div>
                <span className="text-white text-sm">Microsoft Teams</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                  <img src="/placeholder.svg?height=40&width=40&query=twilio logo" alt="Twilio" className="h-8" />
                </div>
                <span className="text-white text-sm">Twilio</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900/30 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the future of voice technology</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Transform how your business communicates with customers and streamlines operations with our Intelligent
            Voice Assistant.
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
      </div>
    </div>
  )
}
