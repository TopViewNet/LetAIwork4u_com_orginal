import type React from "react"
import "@/app/globals.css"
import "@/app/mobile-styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { MobileViewportHandler } from "@/components/mobile-viewport-handler"

export const metadata = {
  title: "LETAIWORK4U - AI Solutions for Business",
  description: "Innovative AI solutions for modern businesses",
  icons: {
    icon: "/brand/logo01.jpeg",
    apple: "/brand/logo01.jpeg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <MobileViewportHandler />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
