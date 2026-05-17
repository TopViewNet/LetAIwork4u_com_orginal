import { GlowingEffectDemo } from "@/components/demo/glowing-effect-demo"

export function GlowingEffectSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI-Powered Capabilities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our innovative AI features with interactive glowing cards
            </p>
          </div>
        </div>
        <GlowingEffectDemo />
      </div>
    </section>
  )
}
