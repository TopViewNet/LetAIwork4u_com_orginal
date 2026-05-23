"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle2, Globe2, Sparkles, Target } from "lucide-react"
import type { Platform } from "@/lib/platforms"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function PlatformDetailClient({ platform }: { platform: Platform }) {
  const { t } = useLanguage()
  const tr = (key: string, fallback: string) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const base = `platform.${platform.slug}`

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container px-4 pb-12 pt-32 md:px-6">
        <Button asChild variant="ghost" className="mb-8 text-slate-300 hover:text-white">
          <Link href="/platforms">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("platform.detail.back")}
          </Link>
        </Button>

        <div className={`mb-6 h-2 max-w-xl rounded-full bg-gradient-to-r ${platform.accent}`} />
        <p className="text-sm uppercase tracking-wide text-cyan-200">{tr(`${base}.eyebrow`, platform.eyebrow)}</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          {tr(`${base}.headline`, platform.headline)}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{tr(`${base}.summary`, platform.summary)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <Link href={`/contact?product=${encodeURIComponent(tr(`${base}.name`, platform.name))}`}>
              {t("platform.detail.discuss")}
            </Link>
          </Button>
          {platform.domain && (
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <a href={`https://${platform.domain}`}>{platform.domain}</a>
            </Button>
          )}
        </div>
      </section>

      <section className="container grid gap-5 px-4 pb-16 md:grid-cols-3 md:px-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <Target className="mb-4 h-6 w-6 text-cyan-300" />
          <h2 className="text-xl font-semibold">{t("platform.detail.audience")}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{tr(`${base}.audience`, platform.audience)}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <CheckCircle2 className="mb-4 h-6 w-6 text-cyan-300" />
          <h2 className="text-xl font-semibold">{t("platform.detail.promise")}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{tr(`${base}.promise`, platform.promise)}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <Globe2 className="mb-4 h-6 w-6 text-cyan-300" />
          <h2 className="text-xl font-semibold">{t("platform.detail.geo")}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {platform.geoTopics.map((topic, index) => (
              <span key={topic} className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300">
                {tr(`${base}.geo.${index}`, topic)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4 pb-12 md:px-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-wide text-cyan-200">{t("platform.detail.visual")}</p>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-200">
            {tr(`${base}.visualDirection`, platform.visualDirection)}
          </p>
        </div>
      </section>

      <section className="container grid gap-8 px-4 pb-20 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-2xl font-bold">{t("platform.detail.capabilities")}</h2>
          <div className="mt-5 grid gap-3">
            {platform.capabilities.map((item, index) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {tr(`${base}.capability.${index}`, item)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{t("platform.detail.roadmap")}</h2>
          <div className="mt-5 grid gap-3">
            {platform.roadmap.map((item, index) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {tr(`${base}.roadmap.${index}`, item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {platform.slug === "voicebot" && (
        <section className="container px-4 pb-16 md:px-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">{t("platform.voicebot.demo.eyebrow")}</p>
            <h2 className="text-3xl font-bold tracking-tight">{t("platform.voicebot.demo.title")}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">{t("platform.voicebot.demo.desc")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <a href="https://www.handwerkervoicebot.com">HandwerkerVoiceBot</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                <a href="https://letaiwork4uagent.vercel.app">{t("nav.voiceAgent")}</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="container px-4 pb-20 md:px-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            {t("platform.detail.nextStep")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{t("platform.detail.nextStepDesc")}</p>
        </div>
      </section>
    </main>
  )
}
