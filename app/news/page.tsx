"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, CalendarDays, MessageCircle, Repeat2, Rocket, Share2, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const featuredPosts = [
  {
    id: "hermes-telegram-ai-agent",
    typeKey: "news.type.offer",
    author: "LetAIwork4u Lab",
    dateKey: "news.date.june2026",
    tags: ["news.tag.hermes", "news.tag.aiAgent", "news.tag.telegram", "news.tag.hetzner"],
    media: {
      type: "hermes",
      src: "/hermes/hermes-agent-teaser.svg",
      logoSrc: "/hermes/hermes-logo.jpg",
      labelKey: "news.media.hermes",
    },
    stats: { likes: 9, dislikes: 0, comments: 2, reposts: 1 },
  },
  {
    id: "letaiwork4u-platform-roadmap",
    typeKey: "news.type.projectUpdate",
    author: "LetAIwork4u Lab",
    dateKey: "news.date.may2026",
    tags: ["news.tag.platform", "news.tag.voicebot", "news.tag.legaltech"],
    media: {
      type: "image",
      src: "/brand/logo01.jpeg",
      labelKey: "news.media.platform",
    },
    stats: { likes: 12, dislikes: 1, comments: 3, reposts: 2 },
  },
  {
    id: "anwaltsoft-bea-dms",
    typeKey: "news.type.product",
    author: "AnwaltSoft",
    dateKey: "news.date.may2026",
    tags: ["news.tag.anwaltsoft", "news.tag.dms", "news.tag.bea"],
    media: {
      type: "image",
      src: "/brand-identity/anwaltsoft-identity-base.jpg",
      labelKey: "news.media.anwaltsoft",
    },
    stats: { likes: 31, dislikes: 1, comments: 4, reposts: 3 },
  },
  {
    id: "local-ai-gemma-lab",
    typeKey: "news.type.aiLab",
    author: "AI Radar",
    dateKey: "news.date.may2026",
    tags: ["news.tag.localAI", "news.tag.gemma", "news.tag.automation"],
    media: {
      type: "image",
      src: "/news/ai-radar-visual.svg",
      labelKey: "news.media.localAI",
    },
    stats: { likes: 55, dislikes: 2, comments: 12, reposts: 9 },
  },
]

const channels = ["all", "ai", "projects", "voicebots", "legaltech", "robotics", "openSource", "practice"]

type ReactionState = {
  likes: number
  dislikes: number
  comments: number
  reposts: number
  vote: "like" | "dislike" | null
  reposted: boolean
  commentsOpen: boolean
  draft: string
  localComments: string[]
}

export default function NewsPage() {
  const { t } = useLanguage()
  const [reactions, setReactions] = useState<Record<string, ReactionState>>(() =>
    Object.fromEntries(
      featuredPosts.map((post) => [
        post.id,
        {
          ...post.stats,
          vote: null,
          reposted: false,
          commentsOpen: false,
          draft: "",
          localComments: [],
        },
      ]),
    ),
  )

  const updateReaction = (postId: string, updater: (state: ReactionState) => ReactionState) => {
    setReactions((current) => ({
      ...current,
      [postId]: updater(current[postId]),
    }))
  }

  const toggleVote = (postId: string, vote: "like" | "dislike") => {
    updateReaction(postId, (state) => {
      const next = { ...state }

      if (state.vote === vote) {
        next.vote = null
        next[vote === "like" ? "likes" : "dislikes"] -= 1
        return next
      }

      if (state.vote === "like") next.likes -= 1
      if (state.vote === "dislike") next.dislikes -= 1

      next.vote = vote
      next[vote === "like" ? "likes" : "dislikes"] += 1
      return next
    })
  }

  const toggleRepost = (postId: string) => {
    updateReaction(postId, (state) => ({
      ...state,
      reposted: !state.reposted,
      reposts: state.reposted ? state.reposts - 1 : state.reposts + 1,
    }))
  }

  const toggleComments = (postId: string) => {
    updateReaction(postId, (state) => ({ ...state, commentsOpen: !state.commentsOpen }))
  }

  const setCommentDraft = (postId: string, draft: string) => {
    updateReaction(postId, (state) => ({ ...state, draft }))
  }

  const addComment = (postId: string) => {
    updateReaction(postId, (state) => {
      const text = state.draft.trim()

      if (!text) return state

      return {
        ...state,
        comments: state.comments + 1,
        draft: "",
        commentsOpen: true,
        localComments: [text, ...state.localComments],
      }
    })
  }

  const sharePost = async (postId: string) => {
    const url = `${window.location.origin}/news/${postId}`

    if (navigator.share) {
      await navigator.share({ url })
      return
    }

    await navigator.clipboard?.writeText(url)
  }

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
                <p className="text-2xl font-bold">4</p>
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
            <article key={post.id} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]">
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_310px] xl:grid-cols-[minmax(0,1fr)_360px]">
                <div className="flex min-h-[320px] flex-col p-5">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <Badge variant="outline" className="border-cyan-300/30 text-cyan-200">
                      {t(post.typeKey)}
                    </Badge>
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {t(post.dateKey)}
                    </span>
                  </div>
                  <Link href={`/news/${post.id}`} className="block hover:text-cyan-200">
                    <h2 className="text-2xl font-bold leading-tight">{t(`news.post.${post.id}.title`)}</h2>
                  </Link>
                  <p className="mt-3 leading-7 text-slate-300">{t(`news.post.${post.id}.excerpt`)}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300">
                        #{t(tag)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-slate-400">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => toggleVote(post.id, "like")}
                        className={`inline-flex h-9 items-center gap-1 rounded-md px-3 transition ${
                          reactions[post.id].vote === "like"
                            ? "bg-cyan-300 text-slate-950"
                            : "bg-slate-900 text-slate-300 hover:bg-cyan-300 hover:text-slate-950"
                        }`}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        {reactions[post.id].likes}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleVote(post.id, "dislike")}
                        className={`inline-flex h-9 items-center gap-1 rounded-md px-3 transition ${
                          reactions[post.id].vote === "dislike"
                            ? "bg-rose-300 text-slate-950"
                            : "bg-slate-900 text-slate-300 hover:bg-rose-300 hover:text-slate-950"
                        }`}
                      >
                        <ThumbsDown className="h-4 w-4" />
                        {reactions[post.id].dislikes}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleComments(post.id)}
                        className={`inline-flex h-9 items-center gap-1 rounded-md px-3 transition ${
                          reactions[post.id].commentsOpen
                            ? "bg-white/20 text-white"
                            : "bg-slate-900 text-slate-300 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {reactions[post.id].comments}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleRepost(post.id)}
                        className={`inline-flex h-9 items-center gap-1 rounded-md px-3 transition ${
                          reactions[post.id].reposted
                            ? "bg-emerald-300 text-slate-950"
                            : "bg-slate-900 text-slate-300 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        <Repeat2 className="h-4 w-4" />
                        {reactions[post.id].reposts}
                      </button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      type="button"
                      onClick={() => void sharePost(post.id)}
                      className="text-slate-300 hover:text-white"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      {t("news.share")}
                    </Button>
                  </div>
                  {reactions[post.id].commentsOpen && (
                    <div className="mt-4 rounded-lg border border-white/10 bg-slate-950/70 p-3">
                      <div className="flex gap-2">
                        <input
                          value={reactions[post.id].draft}
                          onChange={(event) => setCommentDraft(post.id, event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") addComment(post.id)
                          }}
                          placeholder={t("news.comment.placeholder")}
                          className="min-w-0 flex-1 rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                        />
                        <Button type="button" onClick={() => addComment(post.id)} className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                          {t("news.comment.send")}
                        </Button>
                      </div>
                      {reactions[post.id].localComments.length > 0 && (
                        <div className="mt-3 grid gap-2">
                          {reactions[post.id].localComments.map((comment, index) => (
                            <p key={`${comment}-${index}`} className="rounded-md bg-white/5 px-3 py-2 text-sm text-slate-200">
                              {comment}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Link
                  href={`/news/${post.id}`}
                  className="group relative min-h-[240px] overflow-hidden border-t border-white/10 bg-slate-900 lg:border-l lg:border-t-0"
                >
                  {post.media.type === "hermes" ? (
                    <div className="relative h-full min-h-[320px] w-full bg-slate-950">
                      <img
                        src={post.media.src}
                        alt={t(post.media.labelKey)}
                        className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.16)_0%,rgba(2,6,23,0.28)_44%,rgba(2,6,23,0.78)_100%)]" />
                      <img
                        src={post.media.logoSrc}
                        alt="HERMES AI Agent Logo"
                        className="absolute right-4 top-4 h-24 w-24 rounded-lg border border-white/15 object-cover shadow-2xl shadow-cyan-950/40 md:h-28 md:w-28"
                      />
                    </div>
                  ) : (
                    <img
                      src={post.media.src}
                      alt={t(post.media.labelKey)}
                      className="h-full min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.18)_46%,rgba(2,6,23,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="rounded-md border border-white/15 bg-slate-950/75 px-2 py-1 text-xs font-medium text-cyan-100 backdrop-blur">
                      {t(post.media.labelKey)}
                    </span>
                  </div>
                </Link>
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
