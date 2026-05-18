import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, CalendarDays, Heart, MessageCircle, Repeat2, Rocket, Share2, Sparkles } from "lucide-react"

const featuredPosts = [
  {
    id: "letaiwork4u-platform-roadmap",
    type: "Projektupdate",
    author: "LetAIwork4u Lab",
    title: "Aus der Webseite wird eine AI-Plattform",
    excerpt:
      "Wir verbinden Website, Voicebot, LegalTech-Produkte und KI-News zu einem gemeinsamen LetAIwork4u Oekosystem.",
    date: "Mai 2026",
    tags: ["Platform", "Voicebot", "LegalTech"],
    stats: { likes: 42, comments: 8, reposts: 5 },
  },
  {
    id: "anwaltsoft-bea-dms",
    type: "Produkt",
    author: "AnwaltSoft",
    title: "CRM, DMS und beA-Workflows fuer Kanzleien",
    excerpt:
      "AnwaltSoft wird als LegalTech-Produkt unter LetAIwork4u positioniert, mit beA4Outlook und DMS als klare Module.",
    date: "Mai 2026",
    tags: ["AnwaltSoft", "DMS", "beA"],
    stats: { likes: 31, comments: 4, reposts: 3 },
  },
  {
    id: "local-ai-gemma-lab",
    type: "AI Lab",
    author: "AI Radar",
    title: "Lokale KI testen: kleine Modelle, echte Workflows",
    excerpt:
      "Tests mit lokalen Modellen wie Gemma zeigen, wo Datenschutz, Kostenkontrolle und Geschwindigkeit zusammenkommen.",
    date: "Mai 2026",
    tags: ["Local AI", "Gemma", "Automation"],
    stats: { likes: 55, comments: 12, reposts: 9 },
  },
]

const channels = [
  "Alle",
  "KI News",
  "Projekte",
  "Voicebots",
  "LegalTech",
  "Robotics",
  "Open Source",
  "Praxiswissen",
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 px-4 pb-10 pt-32 md:px-6">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Badge className="mb-5 bg-cyan-300 text-slate-950 hover:bg-cyan-300">KI Feed</Badge>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              News, Projekte und Gedanken aus der Welt der KI.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Der neue Social-Bereich fuer LetAIwork4u: Updates, Produktfortschritt, AI-Trends, Experimente und
              spaeter Community-Beitraege mit Profilen, Kommentaren und Likes.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Plattform-MVP</p>
                <p className="text-sm text-slate-400">Admin-Posts jetzt, Nutzerfunktionen als naechster Schritt.</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-md bg-slate-900 p-3">
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-slate-400">Feeds</p>
              </div>
              <div className="rounded-md bg-slate-900 p-3">
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-slate-400">Kanaele</p>
              </div>
              <div className="rounded-md bg-slate-900 p-3">
                <p className="text-2xl font-bold">1</p>
                <p className="text-xs text-slate-400">Oekosystem</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container grid gap-8 px-4 py-10 md:px-6 lg:grid-cols-[220px_1fr_280px]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-white/10 bg-white/5 p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase text-slate-400">Kanaele</h2>
            <nav className="grid gap-1">
              {channels.map((channel) => (
                <button
                  key={channel}
                  className="rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  {channel}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <section className="grid gap-5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                <Bot className="h-5 w-5 text-cyan-300" />
              </span>
              <div className="flex-1">
                <p className="text-sm text-slate-400">Was gibt es Neues?</p>
                <p className="text-slate-200">Admin-Composer: News, Projektupdate oder KI-Fundstueck vorbereiten</p>
              </div>
              <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <Link href="/contact?product=KI%20Feed">Beitrag vorschlagen</Link>
              </Button>
            </div>
          </div>

          {featuredPosts.map((post) => (
            <article key={post.id} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <Badge variant="outline" className="border-cyan-300/30 text-cyan-200">
                  {post.type}
                </Badge>
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
              </div>
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {post.stats.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {post.stats.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Repeat2 className="h-4 w-4" />
                    {post.stats.reposts}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <Share2 className="mr-2 h-4 w-4" />
                  Teilen
                </Button>
              </div>
            </article>
          ))}
        </section>

        <aside className="grid h-fit gap-5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h2 className="flex items-center gap-2 font-semibold">
              <Rocket className="h-5 w-5 text-cyan-300" />
              Naechste Ausbaustufe
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li>Nutzer-Accounts und Profile</li>
              <li>Kommentare, Likes und gespeicherte Posts</li>
              <li>Admin-Dashboard fuer News und Projekte</li>
              <li>Datenbank fuer Feed, Kontakte und Leads</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h2 className="font-semibold">Brand-Klammer</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              LetAIwork4u bleibt die Muttermarke. AnwaltSoft, beA4Outlook und DMS werden als Produktlinien sichtbar
              eingebettet.
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}
