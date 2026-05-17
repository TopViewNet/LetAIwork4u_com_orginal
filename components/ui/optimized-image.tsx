"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useOptimizedImage } from "@/hooks/use-optimized-image"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  width?: number
  height?: number
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  fallbackSrc = "/interconnected-ai.png",
  width,
  height,
}: OptimizedImageProps) {
  // Ensure src is a string to prevent the replace error
  const safeSrc = typeof src === "string" ? src : fallbackSrc
  const { imageSrc, isLoaded, error } = useOptimizedImage(safeSrc, fallbackSrc)
  const [isVisible, setIsVisible] = useState(false)

  // Create a safe ID by ensuring src is a string before calling replace
  const safeId = `image-${safeSrc.replace(/[^a-zA-Z0-9]/g, "-")}`

  useEffect(() => {
    // Simple intersection observer to load images only when they come into view
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
              observer.disconnect()
            }
          })
        },
        { threshold: 0.1 },
      )

      const element = document.getElementById(safeId)
      if (element) {
        observer.observe(element)
      }

      return () => {
        if (element) {
          observer.unobserve(element)
        }
        observer.disconnect()
      }
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsVisible(true)
    }
  }, [safeId])

  return (
    <div id={safeId} className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder/loading state */}
      <div
        className="absolute inset-0 bg-gray-200 animate-pulse"
        style={{ opacity: isLoaded ? 0 : 1, transition: "opacity 0.3s ease-in-out" }}
      />

      {/* Actual image */}
      {isVisible && (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      )}
    </div>
  )
}
