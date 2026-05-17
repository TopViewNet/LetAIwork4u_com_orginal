import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Stethoscope, ShoppingBag, Truck, Landmark } from "lucide-react"

export default function IndustrySpecificAIPage() {
  const industries = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Manufacturing",
      description:
        "AI solutions for predictive maintenance, quality control, supply chain optimization, and production automation.",
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Healthcare",
      description:
        "Intelligent systems for patient care, medical imaging analysis, treatment optimization, and healthcare operations.",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Retail",
      description:
        "AI-powered inventory management, customer insights, personalized recommendations, and demand forecasting.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description:
        "Smart solutions for route optimization, warehouse management, delivery prediction, and fleet maintenance.",
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      title: "Finance",
      description:
        "AI applications for risk assessment, fraud detection, algorithmic trading, and customer service automation.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Industry-Specific AI</h1>
        <p className="text-xl text-muted-foreground">
          Tailored AI solutions designed for the unique challenges of your industry
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U develops specialized AI solutions that address the specific challenges and opportunities in your
          industry. We combine deep domain expertise with cutting-edge AI capabilities to create systems that deliver
          tangible business value.
        </p>
        <p>
          Our industry-specific AI solutions are built with a thorough understanding of your sector's unique processes,
          regulations, and competitive dynamics, ensuring technology that truly fits your business context.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {industries.map((industry) => (
          <div key={industry.title} className="border rounded-lg p-6">
            <div className="text-primary mb-4">{industry.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
            <p className="text-muted-foreground">{industry.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Ready for AI solutions tailored to your industry?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Industry-Specific AI can address your unique business challenges.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
