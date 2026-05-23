"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, CalendarDays, Heart, MessageCircle, Repeat2, Rocket, Share2, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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

const channels = ["all", "ai", "projects", "voicebots", "legaltech", "robotics", "openSource", "practice"]

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 px-4 pb-10 pt-32 md:px-6">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Badge className="mb-5 bg-cyan-300 text-slate-950 hover:bg-cyan-300">{t("news.badge")}</Badge>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{t("news.title")}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t("news.subtitle")}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">{t("news.mvp.title")}</p>
                <p className="text-sm text-slate-400">{t("news.mvp.desc")}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-md bg-slate-900 p-3">
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-slate-400">{t("news.stats.feeds")}</p>
              </div>
              <div className="rounded-md bg-slate-900 p-3">
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-slate-400">{t("news.stats.channels")}</p>
              </div>
              <div className="rounded-md bg-slate-900 p-3">
                <p className="text-2xl font-bold">1</p>
                <p className="text-xs text-slate-400">{t("news.stats.ecosystem")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container grid gap-8 px-4 py-10 md:px-6 lg:grid-cols-[220px_1fr_280px]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-white/10 bg-white/5 p-4">
            <h2 className="mb-3 text-sm font-semibold uppercase text-slate-400">{t("news.channels")}</h2>
            <nav className="grid gap-1">
              {channels.map((channel) => (
                <button
                  key={channel}
                  className="rounded-md px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  {t(`news.channel.${channel}`)}
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
                <p className="text-sm text-slate-400">{t("news.composer.question")}</p>
                <p className="text-slate-200">{t("news.composer.desc")}</p>
              </div>
              <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <Link href="/contact?product=KI%20Feed">{t("news.composer.cta")}</Link>
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
              <h2 className="text-2xl font-bold">{t(`news.post.${post.id}.title`)}</h2>
              <p className="mt-3 leading-7 text-slate-300">{t(`news.post.${post.id}.excerpt`)}</p>
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
                  {t("news.share")}
                </Button>
              </div>
            </article>
          ))}
        </section>

        <aside className="grid h-fit gap-5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h2 className="flex items-center gap-2 font-semibold">
              <Rocket className="h-5 w-5 text-cyan-300" />
              {t("news.next.title")}
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li>{t("news.next.1")}</li>
              <li>{t("news.next.2")}</li>
              <li>{t("news.next.3")}</li>
              <li>{t("news.next.4")}</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h2 className="font-semibold">{t("news.brand.title")}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{t("news.brand.desc")}</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
