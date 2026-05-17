import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Glasses, Cpu, Fingerprint, Zap, Atom } from "lucide-react"

export default function EmergingTechnologiesPage() {
  const technologies = [
    {
      icon: <Glasses className="h-8 w-8" />,
      title: "Augmented & Virtual Reality",
      description:
        "Immersive AR/VR solutions for training, visualization, remote assistance, and customer experiences.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Quantum Computing",
      description: "Exploration and implementation of quantum computing applications for complex problem-solving.",
    },
    {
      icon: <Fingerprint className="h-8 w-8" />,
      title: "Blockchain",
      description:
        "Secure, transparent blockchain solutions for supply chain, finance, and data integrity applications.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Edge Computing",
      description: "Distributed computing architecture that brings computation and data storage closer to the source.",
    },
    {
      icon: <Atom className="h-8 w-8" />,
      title: "Internet of Things (IoT)",
      description: "Connected device ecosystems that generate valuable data and enable smart automation.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Emerging Technologies</h1>
        <p className="text-xl text-muted-foreground">
          Stay ahead with the latest technological innovations and digital transformation
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U helps businesses leverage emerging technologies to create new opportunities, solve complex
          problems, and gain competitive advantages. We identify and implement cutting-edge solutions that align with
          your strategic objectives.
        </p>
        <p>
          Our team stays at the forefront of technological innovation, evaluating new developments and their potential
          business applications to help you navigate the rapidly evolving digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {technologies.map((tech) => (
          <div key={tech.title} className="border rounded-lg p-6">
            <div className="text-primary mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
            <p className="text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Ready to explore emerging technologies?</h3>
        <p className="mb-4">
          Contact us today to discuss how these innovations can transform your business and create new opportunities.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
