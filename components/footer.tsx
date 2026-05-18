import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <h2 className="text-lg font-bold text-white">LetAIwork4u</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Muttermarke fuer KI-Integration, Voicebots, LegalTech, Software, Webdesign und neue AI-Projekte.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Oekosystem</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/platforms">Plattformen</Link>
            <Link href="/products">Produkte</Link>
            <Link href="/solutions">Loesungen</Link>
            <Link href="/news">KI Feed</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Kontakt</h3>
          <div className="mt-3 grid gap-2 text-sm">
            <a href="mailto:contact@letaiwork4u.com">contact@letaiwork4u.com</a>
            <a href="tel:+4993161423087">+49 93161423087</a>
            <Link href="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
