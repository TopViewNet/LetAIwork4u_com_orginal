import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Lightbulb, TrendingUp, Compass } from "lucide-react"

export default function TrainingConsultingPage() {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Technical Training",
      description: "Comprehensive training programs on AI, cloud technologies, cybersecurity, and more.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Workshops",
      description: "Interactive workshops to build your team's capabilities and foster innovation.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Consulting",
      description: "Expert guidance on technology strategy, digital transformation, and innovation roadmaps.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Implementation Support",
      description: "Hands-on assistance with technology implementation and change management.",
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Technology Assessment",
      description: "Evaluation of your current technology landscape with recommendations for improvement.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Training & Consulting</h1>
        <p className="text-xl text-muted-foreground">
          Expert guidance and training to help your team leverage technology effectively
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U provides specialized training and consulting services to help your organization build internal
          capabilities and make informed technology decisions. Our experts share their knowledge and experience to
          accelerate your digital transformation journey.
        </p>
        <p>
          Whether you need to upskill your team, develop a technology strategy, or get expert guidance on specific
          implementations, our training and consulting services deliver practical, actionable insights.
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
        <h3 className="text-xl font-semibold mb-4">Ready to build your team's capabilities?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Training & Consulting services can support your organization's growth.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
