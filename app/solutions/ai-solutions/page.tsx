import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Bot, LineChart, Search, Zap } from "lucide-react"

export default function AISolutionsPage() {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Custom machine learning models to automate processes, predict outcomes, and optimize operations.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Conversational AI",
      description:
        "Intelligent chatbots and virtual assistants to enhance customer service and streamline interactions.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "Advanced analytics to forecast trends, identify opportunities, and make data-driven decisions.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, recognition, and automated inspection.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Process Automation",
      description: "AI-powered automation to streamline workflows, reduce manual tasks, and increase efficiency.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">AI Solutions</h1>
        <p className="text-xl text-muted-foreground">
          Cutting-edge artificial intelligence solutions to automate processes and gain insights
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U delivers powerful AI solutions that transform how businesses operate. Our artificial intelligence
          expertise helps you automate complex processes, extract valuable insights from your data, and create
          intelligent systems that learn and improve over time.
        </p>
        <p>
          We work closely with your team to identify the right AI applications for your specific challenges, ensuring
          solutions that deliver measurable business value and competitive advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {services.map((service) => (
          <div key={service.title} className="border rounded-lg p-6">
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Ready to harness the power of AI?</h3>
        <p className="mb-4">Contact us today to discuss how our AI Solutions can transform your business operations.</p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
