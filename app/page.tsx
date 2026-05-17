import { AnimatedTextCycleDemo } from "@/components/demo/animated-text-cycle-demo"
import { HeroDemo } from "@/components/blocks/hero-demo"
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/blocks/features-section-with-hover-effects-demo"
import { GlowingEffectSection } from "@/components/blocks/glowing-effect-section"
import { TestimonialsSection } from "@/components/blocks/testimonials-section"
import { SplineSceneDemo } from "@/components/blocks/spline-scene-demo"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <SplineSceneDemo />
      <HeroDemo />
      <FeaturesSectionWithHoverEffectsDemo />
      <GlowingEffectSection />
      <TestimonialsSection />
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover our AI-powered solutions
              </h2>
              <p className="text-muted-foreground md:text-xl">
                LETAIWORK4U provides everything you need to transform your business with cutting-edge AI technology.
              </p>
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
