"use client"

import AnimatedTextCycle from "@/components/ui/animated-text-cycle"
import { useLanguage } from "@/contexts/language-context"

export function AnimatedTextCycleDemo() {
  const { t } = useLanguage()
  const words = [
    t("animated.word.business"),
    t("animated.word.team"),
    t("animated.word.workflow"),
    t("animated.word.productivity"),
    t("animated.word.strategy"),
    t("animated.word.transformation"),
    t("animated.word.automation"),
    t("animated.word.analytics"),
  ]

  return (
    <div className="p-4 max-w-[500px]">
      <h1 className="text-4xl font-light text-left text-muted-foreground">
        {t("animated.prefix")}{" "}
        <AnimatedTextCycle words={words} interval={3000} className={"text-foreground font-semi-bold"} />{" "}
        {t("animated.suffix")}
      </h1>
    </div>
  )
}
