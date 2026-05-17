import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Core IT Services",
      description: "Comprehensive IT infrastructure and support services to keep your business running smoothly.",
      href: "/solutions/core-it-services",
    },
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to automate processes and gain insights.",
      href: "/solutions/ai-solutions",
    },
    {
      title: "Data Solutions",
      description: "Data management, analytics, and visualization services to unlock the value of your data.",
      href: "/solutions/data-solutions",
    },
    {
      title: "Cloud Services",
      description: "Secure, scalable cloud infrastructure and migration services for modern businesses.",
      href: "/solutions/cloud-services",
    },
    {
      title: "Industry-Specific AI",
      description: "Tailored AI solutions designed for the unique challenges of your industry.",
      href: "/solutions/industry-specific-ai",
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and threat management.",
      href: "/solutions/cybersecurity",
    },
    {
      title: "Custom Software",
      description: "Bespoke software development to address your specific business requirements.",
      href: "/solutions/custom-software",
    },
    {
      title: "Training & Consulting",
      description: "Expert guidance and training to help your team leverage technology effectively.",
      href: "/solutions/training-consulting",
    },
    {
      title: "Managed Services",
      description: "End-to-end management of your IT infrastructure and services.",
      href: "/solutions/managed-services",
    },
    {
      title: "Emerging Technologies",
      description: "Stay ahead with the latest technological innovations and digital transformation.",
      href: "/solutions/emerging-technologies",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Our Solutions</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive AI and IT solutions to transform your business and drive innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold">{solution.title}</h3>
            <p className="mt-2 text-muted-foreground">{solution.description}</p>
            <Button variant="link" className="mt-4 p-0 h-auto" asChild>
              <Link href={solution.href} className="group-hover:text-primary flex items-center gap-1">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
