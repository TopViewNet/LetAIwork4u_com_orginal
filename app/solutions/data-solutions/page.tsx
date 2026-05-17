import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, BarChart, RefreshCw, FileText, Layers } from "lucide-react"

export default function DataSolutionsPage() {
  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Management",
      description: "Comprehensive data storage, organization, and governance solutions to maintain data integrity.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Advanced analytics tools and methodologies to extract actionable insights from your data.",
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Data Integration",
      description:
        "Seamless integration of data from multiple sources for a unified view of your business information.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Interactive dashboards and reports to present complex data in clear, actionable formats.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Big Data Solutions",
      description:
        "Scalable infrastructure and tools to process and analyze large volumes of structured and unstructured data.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Data Solutions</h1>
        <p className="text-xl text-muted-foreground">
          Data management, analytics, and visualization services to unlock the value of your data
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          LETAIWORK4U's Data Solutions help businesses harness the full potential of their data assets. We provide
          end-to-end data services that transform raw information into valuable business intelligence, enabling better
          decision-making and strategic planning.
        </p>
        <p>
          Our team of data specialists works with you to implement robust data management practices, powerful analytics
          capabilities, and intuitive visualization tools that make complex data accessible and actionable.
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
        <h3 className="text-xl font-semibold mb-4">Ready to unlock the value of your data?</h3>
        <p className="mb-4">
          Contact us today to discuss how our Data Solutions can help you make better business decisions.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  )
}
