import Link from "next/link"

const productLinks = [
  { href: "/products/enterprise-ai-chatbot", label: "AI Chatbot" },
  { href: "/products/intelligent-voice-assistant", label: "Voice Assistant" },
  { href: "/products/business-process-automation", label: "Automation" },
  { href: "/products/document-processing-automation", label: "Document AI" },
  { href: "/products/voice-ivr-system", label: "Voice IVR" },
  { href: "/products/ai-strategy-consulting", label: "AI Strategy" },
]

export function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container grid gap-8 px-4 py-20 pt-28 md:grid-cols-[220px_1fr] md:px-6">
        <aside className="hidden md:block">
          <div className="sticky top-24 rounded-lg border bg-card p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">Produkte</h2>
            <nav className="grid gap-1">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm hover:bg-muted">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  )
}
