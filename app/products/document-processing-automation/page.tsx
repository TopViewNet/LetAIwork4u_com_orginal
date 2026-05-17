import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, FileText, Database, Workflow, BarChart } from "lucide-react"

export default function DocumentProcessingAutomationPage() {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "OCR Technology",
      description:
        "Advanced optical character recognition that accurately extracts text from various document types and formats.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Template-Free Processing",
      description:
        "AI-powered document understanding that works without predefined templates, adapting to new document formats automatically.",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Data Validation",
      description: "Intelligent validation rules that ensure extracted data meets quality and compliance standards.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Workflow Integration",
      description: "Seamless integration with your existing business processes and systems for end-to-end automation.",
    },
  ]

  const benefits = [
    "Reduce document processing time by up to 80%",
    "Minimize manual data entry errors",
    "Scale processing capacity without adding staff",
    "Improve compliance with automatic audit trails",
    "Accelerate business processes dependent on document data",
    "Free up staff for higher-value activities",
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/digital-document-flow.png"
            alt="Document Processing Automation"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-4xl">
            <div className="text-primary font-semibold text-sm md:text-base mb-2">AUTOMATION</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Document Processing Automation</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Automate the extraction, processing, and routing of information from documents, forms, and emails.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 mb-4">
                  Our Document Processing Automation solution transforms how organizations handle documents by
                  automating the extraction, validation, and processing of information from various document types. From
                  invoices and purchase orders to applications and contracts, our AI-powered system can understand and
                  process documents with minimal human intervention.
                </p>
                <p className="text-white/80 mb-4">
                  Unlike traditional OCR solutions that require rigid templates, our system uses advanced machine
                  learning to understand document context and layout, adapting to new formats automatically. This
                  flexibility, combined with powerful workflow capabilities, enables end-to-end automation of
                  document-centric business processes.
                </p>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Common Use Cases</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Invoice Processing</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Automate the extraction of invoice data, validation against purchase orders, and routing for
                    approval and payment.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Application Processing</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Extract and validate information from application forms, reducing processing time and improving
                    accuracy.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Contract Management</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Extract key terms and clauses from contracts for faster review, approval, and management.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-gray-800">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Email Processing</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Automatically categorize, extract data from, and route emails and attachments based on content.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Interested in this product?</h3>
              <p className="text-white/80 mb-6">
                Contact our team to learn more about how this solution can streamline your document processing.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={`/contact?product=${encodeURIComponent("Document Processing Automation")}`}>
                    Request Information
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full text-white border-white/20 hover:bg-white/10">
                  <Link href="/pricing">
                    View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="font-semibold text-white mb-3">Related Products</h4>
                <div className="space-y-4">
                  <Link href="/products/business-process-automation" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Business Process Automation
                    </h5>
                    <p className="text-sm text-white/60">
                      Streamline your operations with our AI-powered workflow automation solution.
                    </p>
                  </Link>
                  <Link href="/products/predictive-analytics-platform" className="block group">
                    <h5 className="font-medium text-white group-hover:text-primary transition-colors">
                      Predictive Analytics Platform
                    </h5>
                    <p className="text-sm text-white/60">
                      Transform your data into actionable insights with our advanced analytics platform.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
