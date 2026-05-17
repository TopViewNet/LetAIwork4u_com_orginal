import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects"

function FeaturesSectionWithHoverEffectsDemo() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Solutions that set us apart</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover why LETAIWORK4U is the preferred AI partner for businesses worldwide
            </p>
          </div>
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  )
}

export { FeaturesSectionWithHoverEffectsDemo }
