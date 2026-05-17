import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Layers, Workflow, Smartphone, Users } from "lucide-react"

export default function CustomSoftwarePage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Bespoke software solutions tailored to your specific business requirements and workflows.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Application Modernization",
      description: "Updating legacy systems with modern technologies to improve performance and user experience.",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Integration Services",
      description: "Seamless integration of custom software with your existing systems and third-party applications.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Experience Design",
      description: "Intuitive, user-centered design that enhances usability and drives adoption.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Custom Software</h1>
        <p className="text-xl text-muted-foreground">
          Bespoke software development to address your specific business requirements
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U develops custom software solutions that perfectly align with your business processes and
          objectives. Our experienced development team creates applications that solve your unique challenges and
          provide a competitive advantage.
        </p>
        <p>
          We follow a collaborative, agile approach to software development, ensuring that the final product not only
          meets your current needs but can also evolve with your business over time.
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
        <h3 className="text-xl font-semibold mb-4">Ready for software that perfectly fits your business?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Custom Software solutions can address your unique challenges.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
