import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  FileArchive,
  FileSearch,
  Globe2,
  Inbox,
  MailCheck,
  Send,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { getPlatform, platforms } from "@/lib/platforms"
import { brandSystem } from "@/lib/brand-system"
import { Button } from "@/components/ui/button"

const anwaltSoftModules = [
  {
    title: "Kanzlei CRM",
    text: "Mandanten, Kontakte, Akten und Vorgänge in einer klaren Oberfläche für Partner, Anwälte und Backoffice.",
    icon: Users,
  },
  {
    title: "DMS & Aktenstruktur",
    text: "Dokumente sauber ablegen, schneller finden und mit Workflows, Fristen und Kommunikation verbinden.",
    icon: FileSearch,
  },
  {
    title: "Fristen & Kalender",
    text: "Termine, Wiedervorlagen und Fristen als zentraler Arbeitsbereich statt verstreuter Insellösungen.",
    icon: CalendarClock,
  },
  {
    title: "beA4Outlook",
    text: "beA-Kommunikation als eigenständiges Produkt und als naheliegende Erweiterung der AnwaltSoft-Welt.",
    icon: MailCheck,
  },
  {
    title: "Rollen & Datenschutz",
    text: "Rechte, Verantwortlichkeiten und sensible Kanzleidaten von Anfang an als Produktanforderung denken.",
    icon: ShieldCheck,
  },
  {
    title: "Kanzlei-Dashboard",
    text: "Überblick über offene Aufgaben, Mandate, Dokumente, Fristen und digitale Prozesse.",
    icon: BriefcaseBusiness,
  },
]

const anwaltSoftFaq = [
  {
    question: "Was ist AnwaltSoft?",
    answer:
      "AnwaltSoft ist die geplante Kanzleisoftware von LetAIwork4u für CRM, DMS, Fristen, Kalender und beA-nahe Workflows.",
  },
  {
    question: "Wie hängt beA4Outlook damit zusammen?",
    answer:
      "beA4Outlook wird als eigenständiges Hauptprodukt positioniert und gleichzeitig als Modul beziehungsweise Erweiterung der AnwaltSoft-Produktwelt sichtbar gemacht.",
  },
  {
    question: "Für welche Kanzleien ist das gedacht?",
    answer:
      "Für moderne Kanzleien, bei denen mehrere Partner, Anwälte und Backoffice-Rollen gemeinsam an Mandaten, Dokumenten und Fristen arbeiten.",
  },
  {
    question: "Warum ist das für GEO wichtig?",
    answer:
      "Die Seite beschreibt klare Entitäten und Themenfelder: Kanzleisoftware, LegalTech, DMS, beA, Fristen, Outlook und Kanzlei-Workflows.",
  },
]

const bea4OutlookModules = [
  {
    title: "Eine Nachrichtenansicht",
    text: "Outlook E-Mails und beA Nachrichten gemeinsam einsehen, damit Anwälte und Notare in ihrer gewohnten Umgebung bleiben.",
    icon: Inbox,
  },
  {
    title: "beA grün markieren",
    text: "beA Nachrichten werden klar hervorgehoben, ohne dass die normale E-Mail-Logik unübersichtlich wird.",
    icon: Send,
  },
  {
    title: "Anhänge & Hashdateien",
    text: "Hashdateien und beA-typische Anhänge bleiben im Workflow sichtbar, so wie Nutzer es aus dem beA Postfach erwarten.",
    icon: FileArchive,
  },
  {
    title: "Softwarezertifikat",
    text: "Das Einloggen erfolgt über das Softwarezertifikat, damit das lästige separate beA-Login aus dem Alltag verschwindet.",
    icon: MailCheck,
  },
]

const bea4OutlookFaq = [
  {
    question: "Ist beA4Outlook ein eigenes Produkt?",
    answer:
      "Ja. beA4Outlook soll eigenstaendig wahrnehmbar sein, bleibt aber strategisch mit AnwaltSoft und dem DMS verbunden.",
  },
  {
    question: "Warum Outlook?",
    answer:
      "Viele Kanzleien organisieren Kommunikation bereits in Outlook. beA4Outlook greift diese Arbeitsrealitaet auf, statt einen weiteren isolierten Arbeitsort zu schaffen.",
  },
  {
    question: "Was ist im neuen UI zu sehen?",
    answer:
      "Das neue UI soll Outlook E-Mails zusammen mit grün markierten beA Nachrichten zeigen und diese Woche zum Ansehen auf Hetzner Cloud gehostet werden.",
  },
  {
    question: "Wie funktioniert das Login?",
    answer:
      "Das Login wird über das Softwarezertifikat gedacht. Ziel ist ein vertrauter Kanzlei-Workflow ohne ständiges separates Einloggen.",
  },
]

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }))
}

export default function PlatformDetailPage({ params }: { params: { slug: string } }) {
  const platform = getPlatform(params.slug)

  if (!platform) {
    notFound()
  }

  const brandProfile =
    platform.slug === "anwaltsoft"
      ? brandSystem.anwaltsoft
      : platform.slug === "bea4outlook"
        ? brandSystem.bea4outlook
        : null

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container px-4 pb-12 pt-32 md:px-6">
        <Button asChild variant="ghost" className="mb-8 text-slate-300 hover:text-white">
          <Link href="/platforms">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Alle Plattformen
          </Link>
        </Button>

        <div className={`mb-6 h-2 max-w-xl rounded-full bg-gradient-to-r ${platform.accent}`} />
        <p className="text-sm uppercase tracking-wide text-cyan-200">{platform.eyebrow}</p>
        <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">{platform.headline}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{platform.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <Link href={`/contact?product=${encodeURIComponent(platform.name)}`}>Projekt besprechen</Link>
          </Button>
          {platform.domain && (
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <a href={`https://${platform.domain}`}>{platform.domain}</a>
            </Button>
          )}
        </div>
      </section>

      <section className="container grid gap-5 px-4 pb-16 md:grid-cols-3 md:px-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <Target className="mb-4 h-6 w-6 text-cyan-300" />
          <h2 className="text-xl font-semibold">Zielgruppe</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{platform.audience}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <CheckCircle2 className="mb-4 h-6 w-6 text-cyan-300" />
          <h2 className="text-xl font-semibold">Versprechen</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{platform.promise}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <Globe2 className="mb-4 h-6 w-6 text-cyan-300" />
          <h2 className="text-xl font-semibold">GEO Themen</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {platform.geoTopics.map((topic) => (
              <span key={topic} className="rounded-md bg-slate-900 px-2 py-1 text-xs text-slate-300">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4 pb-12 md:px-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-wide text-cyan-200">Visuelle Richtung</p>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-200">{platform.visualDirection}</p>
        </div>
      </section>

      {brandProfile && (
        <section className="container px-4 pb-12 md:px-6">
          <div className="rounded-lg border border-white/10 bg-[#F7F5EF] p-6 text-[#102033]">
            <p className="text-sm uppercase tracking-wide text-[#2D6CDF]">Brand System</p>
            <div className="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-4xl font-bold">{brandProfile.logo.wordmark}</p>
                <p className="mt-2 text-sm text-[#17324D]/70">{brandProfile.logo.endorsement}</p>
                <div className="mt-6 flex gap-2">
                  {Object.values(brandProfile.palette).map((color) => (
                    <span key={color} className="h-8 w-8 rounded-full border border-black/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">{brandProfile.tone}</p>
                <p className="mt-3 text-sm leading-6 text-[#17324D]/80">{brandProfile.logo.symbolDirection}</p>
                <p className="mt-3 text-sm leading-6 text-[#17324D]/80">{brandProfile.typography}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {platform.slug === "anwaltsoft" && (
        <>
          <section className="bg-[#F7F5EF] px-4 py-16 text-[#102033] md:px-6">
            <div className="container grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
              <div>
                <div className="mb-10 max-w-3xl">
                  <p className="mb-3 text-sm uppercase tracking-wide text-[#2D6CDF]">Premium Kanzleisoftware</p>
                  <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                    AnwaltSoft soll wie Software für echte Kanzleien wirken, nicht wie ein KI-Spielzeug.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#17324D]/80">
                    Die Produktseite wird auf Vertrauen, Präzision und Kanzleialltag aufgebaut: CRM, DMS, Fristen, beA,
                    Rollenrechte und eine klare digitale Aktenstruktur.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {anwaltSoftModules.map((module) => {
                    const Icon = module.icon
                    return (
                      <div key={module.title} className="rounded-lg border border-[#D8DEE8] bg-white p-5 shadow-sm">
                        <Icon className="mb-4 h-6 w-6 text-[#2D6CDF]" />
                        <h3 className="text-xl font-semibold">{module.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[#17324D]/75">{module.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="rounded-lg border border-[#D8DEE8] bg-white p-5 shadow-xl shadow-[#102033]/10">
                <div className="mb-5 flex items-center justify-between border-b border-[#D8DEE8] pb-4">
                  <div>
                    <p className="text-sm text-[#17324D]/60">AnwaltSoft Dashboard</p>
                    <p className="text-xl font-semibold">Kanzlei Müller & Partner</p>
                  </div>
                  <span className="rounded-md bg-[#EAF2FF] px-3 py-1 text-sm font-medium text-[#2D6CDF]">DMS Live</span>
                </div>
                <div className="grid gap-3">
                  {[
                    ["Akte", "M-2026-014 · Vertragsprüfung", "3 neue Dokumente"],
                    ["Frist", "Berufungsbegründung", "12 Tage verbleibend"],
                    ["beA", "Eingang vom Gericht", "Zuordnung offen"],
                    ["Mandant", "Rückfrage vorbereitet", "Entwurf gespeichert"],
                  ].map(([label, title, meta]) => (
                    <div key={title} className="grid gap-3 rounded-md border border-[#D8DEE8] p-4 sm:grid-cols-[100px_1fr_auto] sm:items-center">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#2D6CDF]">{label}</span>
                      <span className="font-medium">{title}</span>
                      <span className="text-sm text-[#17324D]/60">{meta}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["42 Dokumente", "7 offene Fristen", "3 Partner"].map((metric) => (
                    <div key={metric} className="rounded-md bg-[#F7F5EF] p-3 text-sm font-semibold">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container grid gap-8 px-4 pb-16 pt-16 md:grid-cols-[0.9fr_1.1fr] md:px-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">Institutionelle Bildwelt</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Recht, Wirtschaft und Herkunft sichtbar machen.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Würzburg bleibt als Ursprung glaubwürdig. Karlsruhe steht für Recht und Institutionen, Frankfurt für
                Wirtschaftskanzleien, München für Premium-Anspruch und Berlin für Regulierung und Digitalisierung.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Würzburg", "Karlsruhe", "Frankfurt", "München", "Berlin"].map((city) => (
                <div key={city} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold">{city}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Photorealistische Architektur, dezent mit Produkt-UI und Dokumentenfluss kombiniert.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="container px-4 pb-16 md:px-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">GEO FAQ</p>
              <div className="grid gap-4 md:grid-cols-2">
                {anwaltSoftFaq.map((item) => (
                  <div key={item.question} className="rounded-lg bg-slate-900 p-4">
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-6 bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <Link href="/platforms/bea4outlook">beA4Outlook als Hauptprodukt ansehen</Link>
              </Button>
            </div>
          </section>
        </>
      )}

      {platform.slug === "bea4outlook" && (
        <>
          <section className="bg-[#F7F4EC] px-4 py-16 text-[#14181F] md:px-6">
            <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm uppercase tracking-wide text-[#0B2447]">Standalone LegalTech Product</p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  beA in den Kanzlei-Alltag holen, ohne den gewohnten Kommunikationsfluss zu zerbrechen.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  beA4Outlook wird als fokussiertes Hauptprodukt aufgebaut: schlank, verstaendlich, wartelistenfaehig
                  und sichtbar verbunden mit AnwaltSoft, DMS und Kanzlei-Workflows.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-[#0B2447] text-white hover:bg-[#122F5C]">
                    <Link href="/contact?product=beA4Outlook">Warteliste anfragen</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#DBDFE6] bg-white text-[#0B2447] hover:bg-slate-50">
                    <Link href="/platforms/anwaltsoft">AnwaltSoft ansehen</Link>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#DBDFE6] bg-white shadow-xl shadow-[#0B2447]/10">
                <div className="flex items-center justify-between border-b border-[#DBDFE6] bg-[#0B2447] px-5 py-4 text-white">
                  <div>
                    <p className="text-sm text-white/60">beA4Outlook Preview</p>
                    <p className="text-lg font-semibold">Posteingang Kanzlei</p>
                  </div>
                  <span className="rounded-md bg-[#D9EFEC] px-3 py-1 text-sm font-medium text-[#0F766E]">Sync aktiv</span>
                </div>
                <div className="grid min-h-[420px] lg:grid-cols-[150px_1fr_1.1fr]">
                  <aside className="hidden border-r border-[#ECEEF2] bg-[#F4F5F8] p-3 lg:block">
                    {["Posteingang", "Gesendet", "Entwürfe", "Archiv", "Gerichte"].map((folder, index) => (
                      <div
                        key={folder}
                        className={`mb-1 flex items-center justify-between rounded-md px-3 py-2 text-xs ${
                          index === 0 ? "bg-[#E5ECF6] font-semibold text-[#0B2447]" : "text-[#5A6573]"
                        }`}
                      >
                        <span>{folder}</span>
                        {index === 0 && <span>12</span>}
                      </div>
                    ))}
                  </aside>
                  <section className="border-r border-[#ECEEF2]">
                    {[
                      ["beA", "Landgericht Berlin", "Zustellung: Klageschrift", "EEB · 2 Anhänge", true],
                      ["Outlook", "Mandant Müller", "Rückfrage zum Vertragsentwurf", "Heute 09:12", false],
                      ["beA", "Amtsgericht Charlottenburg", "Terminsladung", "1 Anhang", true],
                      ["Outlook", "Notariat", "Terminbestätigung", "Heute 10:02", false],
                    ].map(([type, from, subject, meta, active]) => (
                      <div
                        key={`${from}-${subject}`}
                        className={`border-b border-[#ECEEF2] p-4 ${active ? "border-l-4 border-l-[#0B2447] bg-[#F2F5FA]" : "bg-white"}`}
                      >
                        <div className="mb-1 flex items-center justify-between gap-3">
                          <span className="truncate text-sm font-semibold">{from}</span>
                          <span
                            className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
                              type === "beA" ? "bg-[#D9EFEC] text-[#0F766E]" : "bg-[#E5ECF6] text-[#0B2447]"
                            }`}
                          >
                            {type}
                          </span>
                        </div>
                        <p className="truncate text-sm text-[#2A323D]">{subject}</p>
                        <p className="mt-2 text-xs text-[#818B98]">{meta}</p>
                      </div>
                    ))}
                  </section>
                  <section className="p-5">
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wide text-[#818B98]">Landgericht Berlin</p>
                      <h3 className="mt-1 text-lg font-semibold text-[#14181F]">Zustellung: Klageschrift Az. 17 O 234/25</h3>
                    </div>
                    <div className="mb-4 rounded-md border border-[#B45309] bg-[#FCEFD9] p-3 text-sm text-[#2A323D]">
                      <p className="font-semibold text-[#B45309]">EEB erforderlich</p>
                      <p className="mt-1">Empfangsbekenntnis prüfen und fristgerecht bearbeiten.</p>
                    </div>
                    <div className="rounded-md border border-[#DBDFE6] p-3">
                      <p className="text-sm leading-6 text-[#2A323D]">
                        Klageschrift nebst Anlagen wurde zugestellt. Frist zur Klageerwiderung beträgt vier Wochen ab
                        Zustellung.
                      </p>
                    </div>
                    <div className="mt-4 grid gap-2">
                      {["Klageschrift_17O234_25.pdf", "Anlage_K1_Vertrag.pdf", "hashdatei.xml"].map((file) => (
                        <div key={file} className="flex items-center justify-between rounded-md border border-[#DBDFE6] px-3 py-2 text-sm">
                          <span>{file}</span>
                          <span className="text-xs text-[#818B98]">Anhang</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-md bg-[#F4F5F8] p-3 text-xs text-[#5A6573]">
                      Softwarezertifikat aktiv · Outlook verbunden · DMS-Zuordnung vorbereitet · Sync alle 5 Minuten
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section className="container grid gap-4 px-4 py-16 md:grid-cols-2 md:px-6 xl:grid-cols-4">
            {bea4OutlookModules.map((module) => {
              const Icon = module.icon
              return (
                <div key={module.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                  <h3 className="text-xl font-semibold">{module.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{module.text}</p>
                </div>
              )
            })}
          </section>

          <section className="container px-4 pb-16 md:px-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">Produktklarheit</p>
              <div className="grid gap-4 md:grid-cols-3">
                {bea4OutlookFaq.map((item) => (
                  <div key={item.question} className="rounded-lg bg-slate-900 p-4">
                    <h3 className="font-semibold">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {platform.slug === "voicebot" && (
        <section className="container px-4 pb-16 md:px-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">Live Referenz</p>
            <h2 className="text-3xl font-bold tracking-tight">HandwerkerVoiceBot und AI Voice Agent als bestehende Demo-Basis.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Die Voicebot-Plattform kann auf vorhandenen Seiten und Demos aufbauen: HandwerkerVoiceBot zeigt den
              Branchenfokus für Anrufannahme, Terminplanung und Notfallerkennung. Der AI Voice Agent ist auf der
              LetAIwork4u-Hauptseite bereits direkt testbar verlinkt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <a href="https://www.handwerkervoicebot.com">HandwerkerVoiceBot ansehen</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                <a href="https://letaiwork4uagent.vercel.app">AI Voice Agent testen</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {platform.slug === "anwaltsoft" && (
        <section className="container px-4 pb-16 md:px-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm uppercase tracking-wide text-cyan-200">Bestehende Demo</p>
            <h2 className="text-3xl font-bold tracking-tight">DMS bereits als durchklickbare Demo vorhanden.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              AnwaltSoft kann nicht nur als Konzept auftreten. Die vorhandene DMS-Demo wird als Produktbeweis genutzt
              und später mit CRM, Fristen, Rollenrechten und beA4Outlook verbunden.
            </p>
            <Button asChild className="mt-6 bg-cyan-300 text-slate-950 hover:bg-cyan-200">
              <a href="https://anwaltsoftdemo.vercel.app">DMS-Demo öffnen</a>
            </Button>
          </div>
        </section>
      )}

      <section className="container grid gap-8 px-4 pb-20 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-2xl font-bold">Kernfunktionen</h2>
          <div className="mt-5 grid gap-3">
            {platform.capabilities.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <div className="mt-5 grid gap-3">
            {platform.roadmap.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
