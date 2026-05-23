"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, CalendarDays, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const articles = {
  "letaiwork4u-platform-roadmap": {
    typeKey: "news.type.projectUpdate",
    author: "LetAIwork4u Lab",
    dateKey: "news.date.may2026",
    tags: ["news.tag.platform", "news.tag.voicebot", "news.tag.legaltech"],
  },
  "anwaltsoft-bea-dms": {
    typeKey: "news.type.product",
    author: "AnwaltSoft",
    dateKey: "news.date.may2026",
    tags: ["news.tag.anwaltsoft", "news.tag.dms", "news.tag.bea"],
  },
  "local-ai-gemma-lab": {
    typeKey: "news.type.aiLab",
    author: "AI Radar",
    dateKey: "news.date.may2026",
    tags: ["news.tag.localAI", "news.tag.gemma", "news.tag.automation"],
  },
}

export default function ArticlePage() {
  const { t, isRTL } = useLanguage()
  const params = useParams()
  const id = typeof params.id === "string" ? params.id : ""
  const article = articles[id as keyof typeof articles]

  if (!article) {
    notFound()
  }

  const paragraphs = ["news.detail.p1", "news.detail.p2", "news.detail.p3"]

  return (
    <div className="container px-4 py-20 pt-32 md:px-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/news" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> {t("news.detail.back")}
          </Link>
        </Button>

        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <Badge variant="outline">{t(article.typeKey)}</Badge>
            <span className="text-sm text-muted-foreground">{article.author}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {t(article.dateKey)}
            </span>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{t(`news.post.${id}.title`)}</h1>
          <p className="mt-5 text-xl leading-8 text-muted-foreground">{t(`news.post.${id}.excerpt`)}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                #{t(tag)}
              </span>
            ))}
          </div>
        </div>

        <article className="grid gap-5 text-lg leading-8 text-muted-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{t(`${paragraph}.${id}`)}</p>
          ))}
        </article>

        <div className="mt-12 rounded-lg bg-muted p-6">
          <h3 className="text-xl font-bold">{t("news.detail.ctaTitle")}</h3>
          <p className="mt-3 text-muted-foreground">{t("news.detail.ctaDesc")}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact?product=KI%20Feed">{t("news.composer.cta")}</Link>
            </Button>
            <Button variant="outline" type="button">
              <Share2 className="mr-2 h-4 w-4" />
              {t("news.share")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
