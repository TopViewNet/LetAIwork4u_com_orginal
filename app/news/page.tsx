import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewsPage() {
  const articles = [
    {
      id: "ai-trends-2023",
      title: "Top AI Trends to Watch in 2023",
      date: "June 15, 2023",
      excerpt:
        "Explore the most significant AI trends that are shaping industries and transforming business operations in 2023.",
      category: "Industry Insights",
      image: "/evolving-ai-landscape.png",
    },
    {
      id: "chatbot-revolution",
      title: "How Enterprise Chatbots Are Revolutionizing Customer Service",
      date: "May 28, 2023",
      excerpt:
        "Learn how AI-powered chatbots are transforming customer service operations and delivering exceptional experiences.",
      category: "Product Insights",
      image: "/friendly-chatbot-interface.png",
    },
    {
      id: "voice-assistant-guide",
      title: "The Complete Guide to Implementing Voice Assistants in Your Business",
      date: "May 10, 2023",
      excerpt:
        "A comprehensive guide to selecting, implementing, and optimizing voice assistants for various business applications.",
      category: "Implementation",
      image: "/connected-conversations.png",
    },
    {
      id: "ai-healthcare",
      title: "AI in Healthcare: Transforming Patient Care and Operations",
      date: "April 22, 2023",
      excerpt:
        "Discover how healthcare organizations are leveraging AI to improve patient outcomes and streamline operations.",
      category: "Industry Solutions",
      image: "/interconnected-health.png",
    },
    {
      id: "automation-roi",
      title: "Measuring ROI from Business Process Automation",
      date: "April 5, 2023",
      excerpt:
        "Practical approaches to measuring and maximizing the return on investment from your automation initiatives.",
      category: "Business Impact",
      image: "/interconnected-automation.png",
    },
    {
      id: "predictive-analytics-retail",
      title: "How Retailers Are Using Predictive Analytics to Stay Ahead",
      date: "March 18, 2023",
      excerpt:
        "Case studies of retailers leveraging predictive analytics to optimize inventory, personalize marketing, and increase sales.",
      category: "Industry Solutions",
      image: "/placeholder.svg?height=400&width=600&query=Retail analytics dashboard",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-20 pt-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">News & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest trends, insights, and news from the world of AI and digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-card rounded-lg overflow-hidden border flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="text-sm font-medium text-primary">{article.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href={`/news/${article.id}`} className="flex items-center gap-1 text-primary">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest insights, trends, and news delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
