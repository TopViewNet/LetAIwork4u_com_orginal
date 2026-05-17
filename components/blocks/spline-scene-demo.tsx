"use client"

import { useState, useEffect } from "react"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"

export function SplineSceneDemo() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))

    // Set loaded after a short delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">LETAIWORK4U Interactive Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our AI-powered platform with immersive 3D visualizations
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="flex h-full flex-col md:flex-row">
              {/* Left content */}
              <motion.div
                className="flex-1 p-8 relative z-10 flex flex-col justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  AI-Powered Solutions
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  LETAIWORK4U brings your business to life with intelligent AI solutions. Create immersive experiences
                  that transform your workflow and enhance productivity.
                </p>
              </motion.div>

              {/* Right content - 3D scene */}
              <motion.div
                className="flex-1 relative min-h-[250px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Fallback image for mobile or while loading */}
                {(isMobile || !isLoaded) && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <img
                      src="/3d-visualization-fallback.png"
                      alt="3D AI Visualization"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
