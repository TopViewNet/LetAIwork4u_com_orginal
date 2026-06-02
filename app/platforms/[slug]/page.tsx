import { notFound, redirect } from "next/navigation"
import { getPlatform, platforms } from "@/lib/platforms"
import { PlatformDetailClient } from "./platform-detail-client"

export function generateStaticParams() {
  return [...platforms.map((platform) => ({ slug: platform.slug })), { slug: "bea4outlook" }]
}

export default function PlatformDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug === "bea4outlook") {
    redirect("/platforms/beamobilesync")
  }

  const platform = getPlatform(params.slug)

  if (!platform) {
    notFound()
  }

  return <PlatformDetailClient platform={platform} />
}
