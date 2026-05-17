import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MonitorCheck, Clock, Wrench, BarChart, Shield } from "lucide-react"

export default function ManagedServicesPage() {
  const services = [
    {
      icon: <MonitorCheck className="h-8 w-8" />,
      title: "Proactive Monitoring",
      description:
        "Continuous monitoring of your IT systems to identify and address issues before they impact your business.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems are always operational.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Updates",
      description: "Regular maintenance, patching, and updates to keep your systems secure and performing optimally.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Ongoing analysis and tuning of your IT infrastructure for maximum efficiency and performance.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Management",
      description:
        "Comprehensive security monitoring, threat detection, and incident response to protect your business.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Managed Services</h1>
        <p className="text-xl text-muted-foreground">End-to-end management of your IT infrastructure and services</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U's Managed Services provide comprehensive, proactive management of your IT environment, allowing
          you to focus on your core business while we ensure your technology runs smoothly and securely.
        </p>
        <p>
          Our team of experienced IT professionals takes responsibility for monitoring, maintaining, and optimizing your
          systems, providing predictable costs and peace of mind through reliable, responsive service.
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
        <h3 className="text-xl font-semibold mb-4">Ready to simplify your IT management?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Managed Services can provide reliable, cost-effective IT support.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
