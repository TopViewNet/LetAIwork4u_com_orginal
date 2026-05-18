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
    headline: "Kanzleisoftware, die CRM, DMS, Fristen, Kalender und beA-Workflows zusammenfuehrt.",
    summary:
      "AnwaltSoft ist das Hauptprodukt im LetAIwork4u Oekosystem. Es soll eigenstaendig, hochwertig und fuer Kanzleien mit mehreren Partnern vertrauenswuerdig wirken.",
    audience: "Kanzleien, Partner, Rechtsanwaelte, Backoffice und Legal Operations.",
    promise: "Mehr Ordnung, bessere digitale Akten, weniger Systembrueche.",
    accent: "from-sky-300 via-cyan-400 to-blue-700",
    visualDirection:
      "Premium LegalTech: dunkles Kanzlei-Office, Glas, Praezision, Dokumentenfluss, sichere Dashboards, keine verspielte Optik.",
    capabilities: [
      "Mandanten-CRM",
      "DMS-Demo",
      "Fristen und Kalender",
      "Rollenrechte",
      "beA-Module",
      "Kanzlei-Dashboards",
    ],
    geoTopics: ["Kanzleisoftware", "LegalTech", "beA Integration", "Dokumentenmanagement Kanzlei"],
    roadmap: [
      "Vorhandene DMS-Demo einbinden",
      "DMS-Modul ausbauen",
      "Kanzlei-Rollenmodell",
      "Admin- und Mandantenportal",
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
    slug: "thailand-minivan",
    name: "Thailand Mini Van App",
    eyebrow: "Mobility App",
    status: "planned",
    headline: "Eine schlanke Mobility-Plattform fuer Mini-Van-Services, Buchung und lokale Routen.",
    summary:
      "Die Thailand Mini Van App wird als eigene mobile Plattform vorbereitet, mit Buchung, Routen, Partnern und Kundenkommunikation.",
    audience: "Reisende, lokale Betreiber, Fahrer, Hotels und Touranbieter.",
    promise: "Einfache Buchung und klare Kommunikation fuer regionale Mobilitaet.",
    accent: "from-amber-200 via-cyan-300 to-emerald-600",
    visualDirection:
      "Mobility-App: Thailand, Routen, Mini-Vans, Karten, Buchungsflow, helle mobile-first Oberflaeche mit lokaler Orientierung.",
    capabilities: ["Routen", "Buchung", "Fahrerprofile", "Benachrichtigungen", "Partner-Hotels", "Mehrsprachigkeit"],
    geoTopics: ["Thailand Minivan", "Transfer App Thailand", "Mobility Booking", "Travel Transport"],
    roadmap: ["MVP-Konzept", "Routenmodell", "Buchungsflow", "Operator-Dashboard"],
  },
  {
    slug: "aviation",
    name: "Aviation Hub",
    eyebrow: "Helicopter, Airplanes, eVTOL",
    status: "planned",
    headline: "Aviation-Content und Plattformideen fuer Hubschrauber, Motorflugzeuge und eVTOLs.",
    summary:
      "Durch eigene Lizenz und Praxiserfahrung kann Aviation als glaubwuerdiger, hochwertiger Themenhub wachsen.",
    audience: "Piloten, Fluginteressierte, Betreiber, Mobility- und eVTOL-Interessierte.",
    promise: "Aviation-Wissen, Zukunftsmobilitaet und digitale Tools unter einer klaren Plattform.",
    accent: "from-sky-200 via-indigo-300 to-slate-800",
    visualDirection:
      "Aviation-Hub: Cockpit, Heli, Motorflug, eVTOL, technische Eleganz, persoenliche Lizenz-Kompetenz statt Stock-Luftfahrt.",
    capabilities: ["Aviation Content", "eVTOL Radar", "Pilotenerfahrung", "Aircraft Profiles", "Training Content", "Mobility Trends"],
    geoTopics: ["eVTOL", "Helikopter", "Motorflug", "Aviation Mobility"],
    roadmap: ["Aviation Journal", "eVTOL-Datenbank", "Pilot-Content", "Partner- und Projektseiten"],
  },
]

export function getPlatform(slug: string) {
  return platforms.find((platform) => platform.slug === slug)
}
