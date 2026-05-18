import Link from "next/link"

const solutionLinks = [
  { href: "/solutions/ai-solutions", label: "AI Solutions" },
  { href: "/solutions/custom-software", label: "Custom Software" },
  { href: "/solutions/core-it-services", label: "Core IT" },
  { href: "/solutions/data-solutions", label: "Data" },
  { href: "/solutions/cybersecurity", label: "Cybersecurity" },
  { href: "/solutions/training-consulting", label: "Training" },
]

export function SolutionsSidebar() {
  return (
    <aside className="rounded-lg border bg-card p-4">
      <h2 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">Loesungen</h2>
      <nav className="grid gap-1">
        {solutionLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm hover:bg-muted">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
