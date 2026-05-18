import Link from "next/link"
import { ArrowRight, Layers3, Sparkles } from "lucide-react"
import { platforms } from "@/lib/platforms"
import { Badge } from "@/components/ui/badge"

export default function PlatformsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container px-4 pb-12 pt-32 md:px-6">
        <Badge className="mb-5 bg-cyan-300 text-slate-950 hover:bg-cyan-300">
          <Layers3 className="mr-2 h-4 w-4" />
          Plattform-System
        </Badge>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Eine Dachmarke, viele Plattformen, klare Struktur fuer alles, was noch kommt.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          LetAIwork4u wird als Innovation Hub aufgebaut. Jede neue Idee bekommt eine eigene Plattformlogik, eigene
          Zielgruppe, eigene GEO-Themen und eine klare Verbindung zur Muttermarke.
        </p>
      </section>

      <section className="container grid gap-5 px-4 pb-16 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {platforms.map((platform) => (
          <Link
            key={platform.slug}
            href={`/platforms/${platform.slug}`}
            className={`group rounded-lg border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10 ${
              platform.status === "flagship" ? "md:col-span-1 xl:col-span-1 ring-1 ring-cyan-300/25" : ""
            }`}
          >
            <div className={`mb-5 h-2 rounded-full bg-gradient-to-r ${platform.accent}`} />
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-wide text-cyan-200">{platform.eyebrow}</p>
                <h2 className="mt-1 text-2xl font-bold">{platform.name}</h2>
              </div>
              <span className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300">{platform.status}</span>
            </div>
            <p className="min-h-24 text-sm leading-6 text-slate-300">{platform.summary}</p>
            <p className="mt-4 rounded-md bg-slate-900/80 p-3 text-xs leading-5 text-slate-400">
              {platform.visualDirection}
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
              <span className="flex items-center gap-2 text-slate-400">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                {platform.geoTopics[0]}
              </span>
              <ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
