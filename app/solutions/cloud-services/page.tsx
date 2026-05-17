import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cloud, ArrowUpCircle, Lock, Repeat, Settings } from "lucide-react"

export default function CloudServicesPage() {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud infrastructure design and implementation across major platforms.",
    },
    {
      icon: <ArrowUpCircle className="h-8 w-8" />,
      title: "Cloud Migration",
      description: "Seamless migration of applications, data, and workloads to the cloud with minimal disruption.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cloud Security",
      description: "Comprehensive security measures to protect your cloud environment and ensure compliance.",
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "Hybrid Cloud",
      description:
        "Integrated solutions that combine on-premises infrastructure with cloud services for optimal flexibility.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Cloud Management",
      description: "Ongoing monitoring, optimization, and management of your cloud resources for maximum efficiency.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Cloud Services</h1>
        <p className="text-xl text-muted-foreground">
          Secure, scalable cloud infrastructure and migration services for modern businesses
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U's Cloud Services provide businesses with flexible, scalable, and cost-effective cloud solutions.
          We help you navigate the complexities of cloud adoption, ensuring a smooth transition and ongoing optimization
          of your cloud environment.
        </p>
        <p>
          Whether you're looking to migrate existing systems to the cloud, build new cloud-native applications, or
          optimize your current cloud infrastructure, our team of cloud experts delivers solutions tailored to your
          specific business requirements.
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
        <h3 className="text-xl font-semibold mb-4">Ready to leverage the power of the cloud?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Cloud Services can enhance your business agility and scalability.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
