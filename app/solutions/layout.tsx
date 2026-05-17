import type React from "react"
import type { Metadata } from "next"
import { SolutionsSidebar } from "@/components/solutions-sidebar"

export const metadata: Metadata = {
  title: "Solutions | LETAIWORK4U",
  description: "Explore our comprehensive range of AI and IT solutions for your business",
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container py-20 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <SolutionsSidebar />
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  )
}
