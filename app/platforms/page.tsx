"use client"

import Link from "next/link"
import { ArrowRight, Layers3, Sparkles } from "lucide-react"
import { platforms } from "@/lib/platforms"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

const platformTeaserImages: Record<string, string> = {
  anwaltsoft: "/brand-identity/anwaltsoft-identity-base.jpg",
}

export default function PlatformsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container px-4 pb-12 pt-32 md:px-6">
        <Badge className="mb-5 bg-cyan-300 text-slate-950 hover:bg-cyan-300">
          <Layers3 className="mr-2 h-4 w-4" />
          {t("platforms.badge")}
        </Badge>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">{t("platforms.title")}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t("platforms.subtitle")}</p>
      </section>

      <section className="container grid gap-5 px-4 pb-16 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {platforms.map((platform) => {
          const teaserImage = platformTeaserImages[platform.slug]
          const isAnwaltSoft = platform.slug === "anwaltsoft"

          return (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              className={`group relative overflow-hidden rounded-lg border p-5 transition hover:-translate-y-1 ${
                isAnwaltSoft
                  ? "min-h-[430px] border-cyan-200/30 bg-slate-950 shadow-2xl shadow-cyan-950/30 ring-1 ring-cyan-200/35 hover:border-cyan-100/70"
                  : "border-white/10 bg-white/5 hover:border-cyan-300/50 hover:bg-white/10"
              } ${platform.status === "flagship" ? "md:col-span-1 xl:col-span-1" : ""}`}
            >
              {teaserImage && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-65"
                    style={{ backgroundImage: `url(${teaserImage})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.38)_0%,rgba(2,6,23,0.74)_42%,rgba(2,6,23,0.96)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(186,230,253,0.22),transparent_34%)]" />
                </>
              )}

              <div className="relative z-10 flex h-full flex-col">
                <div className={`mb-5 h-2 rounded-full bg-gradient-to-r ${isAnwaltSoft ? "from-white via-cyan-200 to-blue-500" : platform.accent}`} />
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className={`text-sm uppercase tracking-wide ${isAnwaltSoft ? "text-cyan-100" : "text-cyan-200"}`}>
                      {t(`platform.${platform.slug}.eyebrow`)}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold">{t(`platform.${platform.slug}.name`)}</h2>
                  </div>
                  <span
                    className={`rounded-md px-2 py-1 text-xs ${
                      isAnwaltSoft ? "bg-cyan-100 text-slate-950" : "bg-slate-900 text-slate-300"
                    }`}
                  >
                    {t(`platform.status.${platform.status}`)}
                  </span>
                </div>
                <p className={`min-h-24 text-sm leading-6 ${isAnwaltSoft ? "text-slate-100" : "text-slate-300"}`}>
                  {t(`platform.${platform.slug}.summary`)}
                </p>
                <p
                  className={`mt-4 rounded-md p-3 text-xs leading-5 ${
                    isAnwaltSoft
                      ? "border border-cyan-100/20 bg-slate-950/70 text-cyan-50 backdrop-blur"
                      : "bg-slate-900/80 text-slate-400"
                  }`}
                >
                  {t(`platform.${platform.slug}.visualDirection`)}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className={`flex items-center gap-2 ${isAnwaltSoft ? "text-cyan-50" : "text-slate-400"}`}>
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                    {platform.geoTopics[0]}
                  </span>
                  <ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
