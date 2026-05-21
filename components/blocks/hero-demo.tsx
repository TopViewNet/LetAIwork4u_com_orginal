"use client"

import { Hero } from "@/components/blocks/hero"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"
import { useLanguage } from "@/contexts/language-context"

function HeroDemo() {
  const { t } = useLanguage()
  const words = [
    t("hero.word.legaltech"),
    t("hero.word.voicebots"),
    t("hero.word.robotics"),
    t("hero.word.realEstate"),
    t("hero.word.aviation"),
  ]

  return (
    <Hero
      title={
        <>
          <AnimatedTextCycle words={words} interval={3000} className="text-primary" /> {t("hero.titleSuffix")}
        </>
      }
      subtitle={t("hero.subtitle")}
      actions={[
        {
          label: t("hero.cta.platforms"),
          href: "/platforms",
          variant: "default",
        },
        {
          label: t("hero.cta.anwaltsoft"),
          href: "/platforms/anwaltsoft",
          variant: "outline",
        },
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  )
}

export { HeroDemo }
