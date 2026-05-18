"use client"

import { useIsMobile } from "@/hooks/use-mobile"

export function useMobileDetection() {
  return { isMobile: useIsMobile() }
}
