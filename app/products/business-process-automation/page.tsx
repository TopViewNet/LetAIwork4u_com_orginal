import { Button } from "@/components/ui/button"
import { Check, Workflow, Clock, FileText, BarChart, Zap } from "lucide-react"

export default function BusinessProcessAutomationPage() {
  const features = [
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Intelligent Workflow Design",
      description: "Drag-and-drop interface to create sophisticated workflows with conditional logic and branching.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Time-Saving Automation",
      description: "Automate repetitive tasks to reduce manual effort and free up employee time for strategic work.",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Document Processing",
      description:
        "Extract data from documents, forms, and emails with AI-powered OCR and natural language processing.",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Performance Analytics",
      description:
        "Comprehensive dashboards to monitor automation performance and identify optimization opportunities.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Rapid Implementation",
      description: "Quick deployment with pre-built templates for common business processes across industries.",
    },
  ]

  const benefits = [
    {
      title: "Increased Efficiency",
      percentage: "85%",
      description: "Average reduction in processing time for automated workflows",
    },
    {
      title: "Cost Savings",
      percentage: "40%",
      description: "Typical reduction in operational costs after implementation",
    },
    {
      title: "Error Reduction",
      percentage: "95%",
      description: "Decrease in human errors through automated processes",
    },
    {
      title: "Employee Satisfaction",
      percentage: "73%",
      description: "Improvement in employee satisfaction by eliminating tedious tasks",
    },
  ]

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]">
      <div className="container px-4 md:px-6 py-20 pt-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="text-blue-400 font-semibold mb-2">AUTOMATION</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Business Process Automation</h1>
            <p className="text-xl text-white/80 mb-8">
              Streamline your operations with our AI-powered workflow automation solution. Reduce manual tasks and
              increase efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/products/automation.png"
              alt="Business Process Automation"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Business Benefits</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Our Business Process Automation solution delivers measurable improvements across your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <div className="text-4xl font-bold text-blue-400 my-4">{benefit.percentage}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Common Use Cases</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Our automation platform can be applied to a wide range of business processes across departments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">Finance & Accounting</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Invoice processing and approval</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Expense report management</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Financial reconciliation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">Human Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Employee onboarding</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Time-off request processing</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Performance review workflows</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">Operations</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Order processing and fulfillment</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Inventory management</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>Quality control processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900/30 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to automate your business processes?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their operations with our Business Process Automation
            solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
