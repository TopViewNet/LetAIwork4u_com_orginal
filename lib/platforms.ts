export type PlatformStatus = "flagship" | "active" | "lab" | "planned"

export type Platform = {
  slug: string
  name: string
  eyebrow: string
  status: PlatformStatus
  domain?: string
  headline: string
  summary: string
  audience: string
  promise: string
  accent: string
  visualDirection: string
  capabilities: string[]
  geoTopics: string[]
  roadmap: string[]
}

export const platforms: Platform[] = [
  {
    slug: "anwaltsoft",
    name: "AnwaltSoft",
    eyebrow: "Flagship LegalTech",
    status: "flagship",
    domain: "anwaltsoft.de",
    headline: "Kanzleisoftware, die DMS, Akten, Fristen, Zeiten und sichere Kommunikation zusammenfuehrt.",
    summary:
      "AnwaltSoft ist die Premium-Kanzlei-Plattform im LetAIwork4u Oekosystem: digitale Akten, DMS, Fristen, Zeiterfassung, Auswertungen und kuenftige beA-App-Module.",
    audience: "Kanzleien, Partner, Rechtsanwaelte, Backoffice und Legal Operations.",
    promise: "Klarere Akten, weniger Systembrueche und ein besser steuerbarer Kanzleialltag.",
    accent: "from-sky-300 via-cyan-400 to-blue-700",
    visualDirection:
      "Premium LegalTech: helles Kanzlei-Office, Praezision, Dokumentenfluss, mobile App-Ansichten, sichere Dashboards, keine verspielte Optik.",
    capabilities: [
      "Digitale Akten mit strukturierter Dokumentenablage",
      "DMS-Demo fuer Kanzlei-Dokumentenworkflows",
      "Fristen, Zeiterfassung und Kanzleiueberblick",
      "beA Sync als mobiles App-Modul",
      "Outlook-Weiterleitung als optionaler Kanal",
      "Management-Dashboards fuer Partner und Backoffice",
    ],
    geoTopics: ["Kanzleisoftware", "LegalTech", "beA Integration", "Dokumentenmanagement Kanzlei"],
    roadmap: [
      "Vorhandene AnwaltSoft DMS-Demo sichtbar verlinken",
      "beA Sync als App-Modul zur Produktlinie ausbauen",
      "Outlook-Weiterleitung als Kommunikationsfeature einordnen",
      "Rollen, Adminbereich und spaeteres Mandantenportal vorbereiten",
    ],
  },
  {
    slug: "bea4outlook",
    name: "beA4Outlook",
    eyebrow: "Standalone Product",
    status: "flagship",
    domain: "bea4outlook.app",
    headline: "beA-Kommunikation in der gewohnten Outlook-Umgebung.",
    summary:
      "beA4Outlook steht eigenstaendig, bleibt aber klar Teil der AnwaltSoft-Produktwelt und powered by LetAIwork4u.",
    audience: "Kanzleien, die Outlook als zentrale Kommunikationsoberflaeche nutzen.",
    promise: "Weniger Wechsel zwischen Systemen, klarere Ablage, schnellerer Kanzleialltag.",
    accent: "from-blue-200 via-cyan-400 to-violet-700",
    visualDirection:
      "Eigenstaendige Produktbuehne: Outlook-artige Kommunikation, beA-Nachrichtenfluss, Kanzlei-Vertrauen, klare Beta-/Wartelistenoptik.",
    capabilities: [
      "Outlook E-Mails und beA Nachrichten in einer Ansicht",
      "Grüne Markierung für beA Nachrichten",
      "Softwarezertifikat-Login",
      "Hashdateien im beA Anhang",
      "Aktenzuordnung",
      "DMS-Anbindung",
    ],
    geoTopics: ["beA Outlook", "beA Kanzlei", "Outlook LegalTech", "beA Software"],
    roadmap: [
      "Hetzner-gehostetes UI zum Ansehen verlinken",
      "Outlook/beA Nachrichtenliste zeigen",
      "Feature-Animation für beA Fluss",
      "AnwaltSoft Cross-Linking",
    ],
  },
  {
    slug: "voicebot",
    name: "Voicebot Platform",
    eyebrow: "AI Voice Automation",
    status: "active",
    headline: "Voicebots fuer Anrufannahme, Weiterleitung, Terminlogik und Kundenservice.",
    summary:
      "Die Voicebot-Plattform buendelt Telefonassistenten fuer Handwerk, Kanzlei, Immobilien und weitere Branchen.",
    audience: "Unternehmen, die keine Anrufe verlieren und wiederkehrende Telefonprozesse automatisieren wollen.",
    promise: "Erreichbarkeit, Qualifizierung und Terminprozesse rund um die Uhr.",
    accent: "from-emerald-300 via-cyan-400 to-blue-700",
    visualDirection:
      "Telefonie-Plattform: Callflow, Kalender, Weiterleitung, freundliche AI-Stimme, klare Branchenmodule statt generischer Bot-Bilder.",
    capabilities: ["Telefonannahme", "Intent-Erkennung", "Weiterleitung", "Kalenderlogik", "E-Mail-Bestaetigung", "Branchen-Flows"],
    geoTopics: ["KI Telefonassistent", "Voicebot Deutschland", "Anrufannahme KI", "Terminbuchung Voicebot"],
    roadmap: [
      "HandwerkerVoiceBot als Branchenplattform einbinden",
      "AI Voice Agent Demo verlinken",
      "Voicebot-Cases",
      "CRM- und Kalenderintegrationen",
    ],
  },
  {
    slug: "robotics",
    name: "Robotics Lab",
    eyebrow: "Future Robotics",
    status: "lab",
    headline: "Robotik, humanoide Systeme, Exoskelette und praktische Tests aus erster Hand.",
    summary:
      "Robotik wird als eigene Future-Lab-Plattform gefuehrt: hochwertig, visuell stark und mit echten Erfahrungsberichten.",
    audience: "Innovationsinteressierte Unternehmen, Tech-Partner, Entscheider und Early Adopter.",
    promise: "Zukunftstechnologie verstaendlich testen, einordnen und nutzbar machen.",
    accent: "from-fuchsia-300 via-cyan-400 to-slate-700",
    visualDirection:
      "Future Lab: Robotik, Testumgebung, humanoide Systeme, Exoskelette, hochwertig-technisch mit echter Experimentier-Atmosphaere.",
    capabilities: ["Robotik-Tests", "Use-Case-Analysen", "Exoskelette", "Humanoide Robotik", "Videos", "Innovation Reports"],
    geoTopics: ["Robotik", "Humanoide Roboter", "Exoskelette", "Future Tech"],
    roadmap: ["Lab-Journal", "Video-Bereich", "Roboterprofile", "Partner- und Demo-Seiten"],
  },
  {
    slug: "immobilien",
    name: "Immobilien Platform",
    eyebrow: "25 Jahre Kompetenz",
    status: "planned",
    headline: "Immobilienkompetenz, KI und digitale Prozesse fuer Bewertung, Vermarktung und Deals.",
    summary:
      "Die geplante Immobilienplattform nutzt langjaehrige Praxiserfahrung und verbindet sie mit KI-gestuetzter Analyse und Vermarktung.",
    audience: "Eigentuemer, Investoren, Makler, Projektentwickler und Immobilienkunden.",
    promise: "Kompetenz sichtbar machen und digitale Immobilienprozesse hochwertig fuehren.",
    accent: "from-stone-200 via-teal-300 to-slate-700",
    visualDirection:
      "Immobilien-Premium: hochwertige Objekte, Investment-Kompetenz, Bewertung, Marktanalyse, ruhige serioese Visuals.",
    capabilities: ["Bewertung", "Objektprofile", "Leadstrecken", "KI-Exposes", "Investment-Content", "Marktberichte"],
    geoTopics: ["Immobilienbewertung", "Immobilien KI", "Immobilienplattform", "Makler Digitalisierung"],
    roadmap: ["Kompetenzseite", "Objekt-/Case-Struktur", "Bewertungsanfrage", "KI-Expose Generator"],
  },
  {
    slug: "hermes",
    name: "HERMES AI Agent",
    eyebrow: "Telegram AI Agent",
    status: "active",
    headline: "Steuerbare AI auf eigener Hetzner Cloud, bedienbar per Telegram.",
    summary:
      "HERMES ist ein betreutes Agent-Setup fuer Unternehmen, Management und Projektteams: eigene Cloud-Instanz, Telegram-Steuerung, OpenAI-/Codex-Workflows und sichere Uebergabe.",
    audience: "Unternehmer, Management, Projektteams, Kanzleien und Entscheider, die AI kontrolliert testen wollen.",
    promise: "Schnell mit AI-Agenten experimentieren, ohne sofort eine grosse interne Plattform aufzubauen.",
    accent: "from-zinc-200 via-cyan-300 to-slate-800",
    visualDirection:
      "Premium AI-Agent: HERMES-Logo, dunkle Metalloptik, Telegram-Steuerung, Cloud-Infrastruktur, klare Sicherheits- und Uebergabeprozesse.",
    capabilities: [
      "Installation auf Hetzner Cloud",
      "Telegram-Steuerung fuer Management und Teams",
      "OpenAI API, ChatGPT und Codex-Workflows",
      "Recherche, Zusammenfassungen und Aufgabenlisten",
      "Passwort-, Token- und SSH-Uebergabe",
      "Optionaler Support und Erweiterung",
    ],
    geoTopics: ["HERMES AI Agent", "Telegram AI Agent", "Hetzner Cloud AI", "AI Agent fuer Unternehmen"],
    roadmap: [
      "Pilot-Setup fuer Interessenten anbieten",
      "Installations- und Uebergabeprozess dokumentieren",
      "Use-Cases fuer Management und Projektteams zeigen",
      "Optionale Workflows und Supportpakete ausbauen",
    ],
  },
  {
    slug: "aviation",
    name: "Kundenprojekt",
    eyebrow: "Projektstrecke",
    status: "planned",
    headline: "Aus Ihrer Idee wird ein sichtbares digitales Produkt mit klarer Struktur.",
    summary:
      "Diese Projektstrecke ist fuer neue Kundenideen gedacht: von der hochwertigen Webseite ueber Web-App und KI-Automation bis zur eigenen Plattform.",
    audience: "Unternehmer, Kanzleien, Mittelstand, Immobilienprofis, Handwerk, Coaches, Spezialisten und Gruender mit einer konkreten Idee.",
    promise: "Aus einer Idee wird ein sichtbares, strukturiertes und professionell positioniertes digitales Produkt.",
    accent: "from-white via-cyan-200 to-blue-600",
    visualDirection:
      "Offene Projektbuehne: hochwertig, hell, vertrauenswuerdig, mit Platz fuer Kundenmarke, Produktidee, Demo, Kontaktstrecke und spaetere Plattformmodule.",
    capabilities: ["Strategie und Positionierung", "Webseite oder Web-App", "AI- und Voicebot-Integration", "Produktdemo", "Kontakt- und Leadstrecke", "Skalierbare Plattformstruktur"],
    geoTopics: ["Ihr Projekt", "AI Plattform", "Web-App Entwicklung", "Digitale Produktidee"],
    roadmap: ["Erstgespraech und Zielbild", "Design- und Inhaltskonzept", "MVP oder Demo", "Launch und Weiterentwicklung"],
  },
]

export function getPlatform(slug: string) {
  return platforms.find((platform) => platform.slug === slug)
}
