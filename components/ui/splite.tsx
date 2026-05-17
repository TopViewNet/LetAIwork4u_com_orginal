"use client"

import { Suspense, lazy, useState, useEffect } from "react"
import { motion } from "framer-motion"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false)

  // Detect mobile and low performance devices
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    }

    // Check if low performance device
    const checkLowPerformance = () => {
      // Simple heuristic: check if device has limited memory or CPU cores
      const memory = (navigator as any).deviceMemory
      const cores = navigator.hardwareConcurrency

      return (memory !== undefined && memory <= 4) || (cores !== undefined && cores <= 4)
    }

    setIsMobile(checkMobile())
    setIsLowPerfDevice(checkLowPerformance())
  }, [])

  // Handle Spline load event
  const handleSplineLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-background z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader"></div>
        </motion.div>
      )}

      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        {/* Render optimized version for mobile/low-perf devices */}
        {isMobile || isLowPerfDevice ? (
          <div className="w-full h-full">
            <Spline
              scene={scene}
              className={className}
              onLoad={handleSplineLoad}
              // Optimize for mobile/low-perf devices
              style={{
                willChange: "transform",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              // Reduce quality for better performance
              renderOptions={{
                pixelRatio: 1,
                antialias: false,
                powerPreference: "low-power",
              }}
            />
          </div>
        ) : (
          // Full quality for desktop
          <Spline scene={scene} className={className} onLoad={handleSplineLoad} />
        )}
      </Suspense>
    </div>
  )
}
