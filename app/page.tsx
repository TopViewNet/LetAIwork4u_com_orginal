"use client"

import Link from "next/link"
import { AnimatedTextCycleDemo } from "@/components/demo/animated-text-cycle-demo"
import { HeroDemo } from "@/components/blocks/hero-demo"
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/blocks/features-section-with-hover-effects-demo"
import { GlowingEffectSection } from "@/components/blocks/glowing-effect-section"
import { TestimonialsSection } from "@/components/blocks/testimonials-section"
import { SplineSceneDemo } from "@/components/blocks/spline-scene-demo"
import { platforms } from "@/lib/platforms"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const flagshipPlatforms = platforms.filter((platform) => platform.status === "flagship")
  const { t } = useLanguage()

  return (
    <main className="min-h-screen flex flex-col">
      <SplineSceneDemo />
      <HeroDemo />
      <section className="bg-slate-950 px-4 py-16 text-white md:px-6">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">{t("home.ecosystem.eyebrow")}</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t("home.ecosystem.title")}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{t("home.ecosystem.desc")}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {flagshipPlatforms.map((platform) => (
              <Link
                key={platform.slug}
                href={`/platforms/${platform.slug}`}
                className="rounded-lg border border-cyan-300/20 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className={`mb-5 h-2 rounded-full bg-gradient-to-r ${platform.accent}`} />
                <p className="text-sm uppercase tracking-wide text-cyan-200">{platform.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-bold">{platform.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{platform.summary}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/platforms"
            className="mt-8 inline-flex rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            {t("home.ecosystem.cta")}
          </Link>
        </div>
      </section>
      <FeaturesSectionWithHoverEffectsDemo />
      <GlowingEffectSection />
      <TestimonialsSection />
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("home.discover.title")}</h2>
              <p className="text-muted-foreground md:text-xl">{t("home.discover.desc")}</p>
            </div>
            <div className="flex justify-center">
              <AnimatedTextCycleDemo />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
