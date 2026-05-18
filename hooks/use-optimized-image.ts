"use client"

export function useOptimizedImage(src: string, fallback = "/placeholder.svg") {
  return {
    src: src || fallback,
    fallback,
  }
}
