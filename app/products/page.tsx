"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BadgeCheck, BriefcaseBusiness, FileText, Mic2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

const products = [
  {
    id: "anwaltsoft",
    href: "/platforms/anwaltsoft",
    statusKey: "products.status.demo",
    icon: BriefcaseBusiness,
    image: "/brand-identity/anwaltsoft-identity-base.jpg",
    logo: "/brand-identity/AnwaltSoft%20Logo.png",
    accent: "from-sky-200 via-cyan-300 to-blue-700",
    featured: true,
    features: ["products.anwaltsoft.feature.1", "products.anwaltsoft.feature.2", "products.anwaltsoft.feature.3"],
  },
  {
    id: "bea4outlook",
    href: "/platforms/bea4outlook",
    statusKey: "products.status.development",
    icon: FileText,
    image: "/brand/logo01.jpeg",
    accent: "from-blue-200 via-cyan-300 to-indigo-700",
    featured: true,
    features: ["products.bea4outlook.feature.1", "products.bea4outlook.feature.2", "products.bea4outlook.feature.3"],
  },
  {
    id: "handwerkervoicebot",
    href: "/platforms/voicebot",
    statusKey: "products.status.live",
    icon: Mic2,
    image: "/brand/logo01.jpeg",
    accent: "from-emerald-200 via-cyan-300 to-blue-700",
    featured: false,
    features: [
      "products.handwerkervoicebot.feature.1",
      "products.handwerkervoicebot.feature.2",
      "products.handwerkervoicebot.feature.3",
    ],
  },
  {
    id: "letaiwork4uvoicebot",
    href: "https://www.letaiwork4u.com",
    statusKey: "products.status.live",
    icon: Mic2,
    image: "/brand/logo01.jpeg",
    accent: "from-white via-cyan-200 to-slate-700",
    featured: false,
    features: [
      "products.letaiwork4uvoicebot.feature.1",
      "products.letaiwork4uvoicebot.feature.2",
      "products.letaiwork4uvoicebot.feature.3",
    ],
  },
  {
    id: "customplatform",
    href: "/platforms/aviation",
    statusKey: "products.status.request",
    icon: Sparkles,
    image: "/brand/logo01.jpeg",
    accent: "from-violet-200 via-cyan-300 to-blue-700",
    featured: false,
    features: ["products.customplatform.feature.1", "products.customplatform.feature.2", "products.customplatform.feature.3"],
  },
]

export default function ProductsPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen bg-slate-950 text-white" dir={isRTL ? "rtl" : "ltr"}>
      <section className="container px-4 pb-12 pt-32 md:px-6">
        <Badge className="mb-5 bg-cyan-200 text-slate-950 hover:bg-cyan-200">
          <BadgeCheck className="mr-2 h-4 w-4" />
          {t("products.hero.badge")}
        </Badge>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">{t("products.title")}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t("products.subtitle")}</p>
          </div>
          <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            {["products.hero.proof.1", "products.hero.proof.2", "products.hero.proof.3"].map((key) => (
              <div key={key} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-5 px-4 pb-16 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {products.map((product, index) => {
          const Icon = product.icon

          return (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`group relative flex min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-200/60 ${
                product.featured ? "md:col-span-1 xl:col-span-1" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-50"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.38)_0%,rgba(2,6,23,0.82)_48%,rgba(2,6,23,0.98)_100%)]" />
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${product.accent}`} />

              <div className="relative z-10 flex w-full flex-col p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="rounded-lg border border-white/15 bg-slate-950/70 p-3 backdrop-blur">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </div>
                  <span className="rounded-md border border-cyan-100/20 bg-cyan-100/10 px-2 py-1 text-xs font-medium text-cyan-50">
                    {t(product.statusKey)}
                  </span>
                </div>

                <p className="text-sm uppercase tracking-wide text-cyan-200">{t(`products.${product.id}.eyebrow`)}</p>
                {"logo" in product && product.logo ? (
                  <div className="mt-3 rounded-lg border border-white/10 bg-white/95 p-2">
                    <img src={product.logo} alt={t(`products.${product.id}.title`)} className="h-auto w-full" />
                  </div>
                ) : null}
                <h2 className="mt-2 text-2xl font-bold tracking-tight">{t(`products.${product.id}.title`)}</h2>
                <p className="mt-4 min-h-24 text-sm leading-6 text-slate-200">{t(`products.${product.id}.description`)}</p>

                <div className="mt-5 grid gap-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                      <span>{t(feature)}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className="mt-auto inline-flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm font-semibold text-cyan-100 transition hover:text-white"
                >
                  <span>{t("products.viewDetails")}</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          )
        })}
      </section>
    </main>
  )
}
