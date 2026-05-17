import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Server, Network, HardDrive, Shield, Clock } from "lucide-react"

export default function CoreITServicesPage() {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "IT Infrastructure",
      description:
        "Design, implementation, and management of robust IT infrastructure tailored to your business needs.",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Solutions",
      description: "Secure, high-performance networking solutions including LAN/WAN setup, Wi-Fi, and remote access.",
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Hardware Support",
      description: "Comprehensive hardware procurement, installation, maintenance, and lifecycle management.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "IT Security",
      description: "Protect your business with advanced security measures, monitoring, and threat prevention.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems are always operational.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Core IT Services</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive IT infrastructure and support services to keep your business running smoothly
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          At LETAIWORK4U, we provide a complete range of core IT services designed to build, maintain, and optimize your
          technology infrastructure. Our team of experienced IT professionals ensures your systems are reliable, secure,
          and aligned with your business objectives.
        </p>
        <p>
          Whether you need to set up a new IT environment, upgrade existing systems, or ensure ongoing maintenance and
          support, our Core IT Services provide the foundation for your digital success.
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
        <h3 className="text-xl font-semibold mb-4">Ready to optimize your IT infrastructure?</h3>
        <p className="mb-4">Contact us today to discuss how our Core IT Services can support your business goals.</p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
