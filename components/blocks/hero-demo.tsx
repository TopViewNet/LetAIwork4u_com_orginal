import { Hero } from "@/components/blocks/hero"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"

function HeroDemo() {
  return (
    <Hero
      title={
        <>
          <AnimatedTextCycle
            words={["LegalTech", "Voicebots", "Robotik", "Immobilien", "Aviation"]}
            interval={3000}
            className="text-primary"
          />{" "}
          unter einer starken AI-Marke.
        </>
      }
      subtitle="LetAIwork4u verbindet hochwertige Software, KI-Automation und neue Plattformideen. AnwaltSoft und beA4Outlook werden als Premium-Flagship fuer Kanzleien aufgebaut."
      actions={[
        {
          label: "Plattformen ansehen",
          href: "/platforms",
          variant: "default",
        },
        {
          label: "AnwaltSoft entdecken",
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
