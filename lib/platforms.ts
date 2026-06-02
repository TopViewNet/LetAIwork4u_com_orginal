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
    headline: "Die Kanzlei-Plattform fuer Akten, Dokumente, Fristen, beA-Workflows und KI-Unterstuetzung.",
    summary:
      "AnwaltSoft wird als Premium-Kanzlei-CRM aufgebaut: digitale Akten, DMS, Fristen, Zeiterfassung, beA-nahe Prozesse, KI-Suche und KI-gestuetzte Schriftstuecke.",
    audience: "Kanzleien, Partner, Rechtsanwaelte, Backoffice und Legal Operations.",
    promise: "Klarere Akten, weniger Systembrueche und ein besser steuerbarer Kanzleialltag.",
    accent: "from-sky-300 via-cyan-400 to-blue-700",
    visualDirection:
      "Premium LegalTech: helles Kanzlei-Office, Praezision, Dokumentenfluss, mobile App-Ansichten, sichere Dashboards, keine verspielte Optik.",
    capabilities: [
      "Digitale Akten mit strukturierter Dokumentenablage",
      "DMS-Demo fuer Kanzlei-Dokumentenworkflows",
      "Fristen, Zeiterfassung und Kanzleiueberblick",
      "KI-gestuetzte Suche in Akten, Dokumenten und Kommunikation",
      "KI-Unterstuetzung fuer Entwuerfe, Textbausteine und Schriftsatzvorbereitung",
      "beA Mobile Sync als vorgelagertes App- und Zahlungsmodul",
      "beA4Outlook als Outlook-Weiterleitung und vertrauter Einstieg",
      "Management-Dashboards fuer Partner und Backoffice",
    ],
    geoTopics: ["Kanzleisoftware", "LegalTech", "beA Integration", "Dokumentenmanagement Kanzlei"],
    roadmap: [
      "Vorhandene AnwaltSoft DMS-Demo sichtbar verlinken",
      "beA Mobile Sync als App-, Account- und Payment-Ebene anbinden",
      "beA4Outlook als Outlook-Kanal aus der Mobile-Sync-App heraus fuehren",
      "beA Voice Support als Hilfe- und Onboarding-Kanal einordnen",
      "Rollen, Adminbereich und spaeteres Mandantenportal vorbereiten",
    ],
  },
  {
    slug: "beamobilesync",
    name: "beA Mobile Sync",
    eyebrow: "Zentrale beA App",
    status: "flagship",
    domain: "bea4outlook.app",
    headline: "Die mobile Steuerzentrale fuer beA-Sync, Outlook-Weiterleitung, Login, Zahlung und Support.",
    summary:
      "beA Mobile Sync ist die App-Plattform vor dem CRM: Anmeldung, Bezahlung, Zertifikatsstatus, Sync-Kontrolle, EB-Hinweise, Push und der Einstieg zu beA4Outlook.",
    audience: "Kanzleien, Rechtsanwaelte und Assistenzteams, die beA mobil ueberwachen und Outlook als Arbeitskanal nutzen.",
    promise: "beA im Blick behalten, Outlook nutzen, Sync-Probleme frueh erkennen und spaeter sauber in AnwaltSoft weiterwachsen.",
    accent: "from-blue-200 via-cyan-400 to-violet-700",
    visualDirection:
      "Mobile-first Produktbuehne: Inbox, EB-Badges, Fristbanner, Sync-Status, Zertifikat, Face ID, Outlook-Status und ruhige Kanzlei-Vertrauensoptik.",
    capabilities: [
      "App-Login, Account und Bezahlung als zentrale Produktplattform",
      "beA-Sync-Status, Zertifikatsstatus und Fehlerhinweise",
      "Push fuer neue beA-Nachrichten und offene Empfangsbekenntnisse",
      "beA4Outlook als Outlook-Weiterleitung und vertrauter Nutzwert",
      "SAFE-ID, Face ID/PIN und kontrollierte EB-Aktionen",
      "Upgrade-Pfad zu AnwaltSoft CRM, Aktenzuordnung und DMS",
    ],
    geoTopics: ["beA Mobile App", "beA Outlook", "beA Kanzlei", "beA Software"],
    roadmap: [
      "Mobile App als Login-, Zahlungs- und Sync-Zentrale positionieren",
      "beA4Outlook als erstes marktfähiges Feature klar erklaeren",
      "beA Voice Support als Hilfe direkt aus der App anbieten",
      "AnwaltSoft Cross-Linking fuer Akten, DMS und KI-Suche vorbereiten",
    ],
  },
  {
    slug: "voicebot",
    name: "beA Voice Support",
    eyebrow: "AI Voice Support",
    status: "active",
    headline: "KI-Voice-Support fuer beA-Fragen, Zertifikate, Sync-Probleme und Kanzlei-Onboarding.",
    summary:
      "Die Voice-Kompetenz von LetAIwork4u wird als beA-Hilfe produktisiert: Kanzleien bekommen Schritt-fuer-Schritt-Unterstuetzung, bevor ein Mensch uebernehmen muss.",
    audience: "Kanzleien, Assistenzteams und Anwender, die schnelle Hilfe bei beA, Zertifikat, Client, Outlook-Sync oder App-Einrichtung brauchen.",
    promise: "Weniger Support-Frust, schnellere Einrichtung und ein staerkerer Einstieg in beA Mobile Sync und AnwaltSoft.",
    accent: "from-emerald-300 via-cyan-400 to-blue-700",
    visualDirection:
      "Support-Plattform: klare Hilfeflows fuer beA, Zertifikate, Outlook-Sync, App-Login, Zahlung, Eskalation und menschliche Rueckfrage.",
    capabilities: ["beA-Hilfe per Voice", "Zertifikats- und Sync-Diagnose", "Outlook-Weiterleitung erklaeren", "App-Onboarding", "Eskalation an Menschen", "Wissensbasis"],
    geoTopics: ["beA Support", "beA Hilfe", "Voicebot Kanzlei", "KI Telefonassistent"],
    roadmap: [
      "beA-Hilfeflows fuer haeufige Kanzleifragen aufbauen",
      "AI Voice Agent Demo als Support-Vorschau verlinken",
      "Support aus beA Mobile Sync starten",
      "Spaeter AnwaltSoft-Hilfe und CRM-Onboarding ergaenzen",
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
    name: "Ihr Projekt",
    eyebrow: "Neue Plattformidee",
    status: "planned",
    headline: "Hier koennte Ihr digitales Produkt, Ihre Plattform oder Ihre AI-Idee entstehen.",
    summary:
      "Diese Kachel steht bewusst offen fuer neue Kundenprojekte: von der hochwertigen Webseite ueber Web-App und KI-Automation bis zur eigenen Plattform.",
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
