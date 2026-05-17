import { Hero } from "@/components/blocks/hero"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"

function HeroDemo() {
  return (
    <Hero
      title={
        <>
          <AnimatedTextCycle
            words={["AI", "Automation", "Intelligence", "Innovation"]}
            interval={3000}
            className="text-primary"
          />{" "}
          that works for you.
        </>
      }
      subtitle="Transform your workflow with LETAIWORK4U's intelligent automation. Simple, powerful, reliable."
      actions={[
        {
          label: "Try our CRM Demo",
          href: "https://letaiwork4crm.vercel.app/",
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
