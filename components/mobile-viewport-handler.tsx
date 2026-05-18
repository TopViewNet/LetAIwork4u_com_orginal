"use client"

import { useEffect } from "react"

export function MobileViewportHandler() {
  useEffect(() => {
    const update = () => document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return null
}
