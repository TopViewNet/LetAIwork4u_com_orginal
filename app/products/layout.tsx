// Update the products layout to use translations
import { ProductLayout } from "@/components/product-layout"
import type React from "react"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProductLayout>{children}</ProductLayout>
}
