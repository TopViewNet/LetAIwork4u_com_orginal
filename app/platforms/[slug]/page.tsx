import { notFound } from "next/navigation"
import { getPlatform, platforms } from "@/lib/platforms"
import { PlatformDetailClient } from "./platform-detail-client"

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }))
}

export default function PlatformDetailPage({ params }: { params: { slug: string } }) {
  const platform = getPlatform(params.slug)

  if (!platform) {
    notFound()
  }

  return <PlatformDetailClient platform={platform} />
}
