import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, Eye, AlertTriangle, Lock, FileSearch } from "lucide-react"

export default function CybersecurityPage() {
  const services = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Security Assessment",
      description:
        "Comprehensive evaluation of your security posture to identify vulnerabilities and recommend improvements.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Threat Monitoring",
      description: "24/7 monitoring of your systems to detect and respond to security threats in real-time.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Incident Response",
      description: "Rapid response protocols to address security breaches and minimize potential damage.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Protection",
      description: "Solutions to secure sensitive data through encryption, access controls, and data loss prevention.",
    },
    {
      icon: <FileSearch className="h-8 w-8" />,
      title: "Compliance Management",
      description: "Ensuring your security practices meet industry regulations and compliance requirements.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Cybersecurity</h1>
        <p className="text-xl text-muted-foreground">
          Protect your business with comprehensive security solutions and threat management
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U provides robust cybersecurity solutions to protect your business from evolving digital threats.
          Our comprehensive approach to security helps safeguard your sensitive data, systems, and reputation in an
          increasingly complex threat landscape.
        </p>
        <p>
          Our team of security experts implements multi-layered defense strategies, combining advanced technologies with
          proven methodologies to create a strong security posture for your organization.
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
        <h3 className="text-xl font-semibold mb-4">Ready to strengthen your security posture?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Cybersecurity solutions can protect your business from threats.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
