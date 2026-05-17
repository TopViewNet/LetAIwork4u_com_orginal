import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const enterpriseFeatures = [
    "Custom AI solutions tailored to your business needs",
    "Unlimited interactions and users",
    "Enterprise analytics & reporting",
    "Dedicated account manager",
    "24/7 phone and email support",
    "Support for all languages",
    "Custom development and integration",
    "On-premise deployment options",
    "Advanced security features",
    "Regular strategy reviews and optimization",
  ]

  const faqs = [
    {
      question: "How does the custom solution process work?",
      answer:
        "We begin with a thorough assessment of your business needs, challenges, and objectives. Our team then designs a tailored solution that addresses your specific requirements. After your approval, we implement the solution, provide training, and offer ongoing support to ensure optimal performance.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation timelines vary based on the complexity of your requirements. Simple solutions can be deployed in as little as 2-4 weeks, while more complex enterprise implementations may take 2-3 months. We'll provide a detailed timeline during the consultation phase.",
    },
    {
      question: "Do you offer integration with existing systems?",
      answer:
        "Yes, our solutions are designed to integrate seamlessly with your existing systems and workflows. We have experience integrating with a wide range of CRM, ERP, and other business systems.",
    },
    {
      question: "Is training included in the custom solution?",
      answer:
        "Yes, comprehensive training is included for your team. We provide both technical training for administrators and user training to ensure everyone can effectively utilize the solution.",
    },
    {
      question: "How is pricing determined for custom solutions?",
      answer:
        "Pricing is based on the scope, complexity, and scale of your requirements. We provide transparent, detailed quotes after the initial consultation and needs assessment. Our goal is to deliver solutions with clear ROI for your business.",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-20 pt-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Enterprise Custom Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We specialize in creating tailored AI solutions that address your unique business challenges and objectives.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-card rounded-lg border shadow-lg overflow-hidden mb-16">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">Custom Enterprise Solution</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tailored AI implementation designed specifically for your organization's unique requirements and objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {enterpriseFeatures.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
              <ul className="space-y-3">
                {enterpriseFeatures.slice(5).map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/contact?plan=enterprise">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your business with AI?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our team of experts is ready to discuss your business challenges and how our custom AI solutions can help you
          achieve your goals.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Our Solutions Team</Link>
        </Button>
      </div>
    </div>
  )
}
