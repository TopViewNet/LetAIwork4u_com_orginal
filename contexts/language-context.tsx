"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language =
  | "en"
  | "de"
  | "es"
  | "it"
  | "ar"
  | "zh"
  | "ja"
  | "th"
  | "fi"
  | "nl"
  | "de-CH"
  | "fr"
  | "sv"
  | "pt"

export type LanguageOption = {
  code: Language
  shortLabel: string
  label: string
  localeName: string
  dir: "ltr" | "rtl"
}

export const languageOptions: LanguageOption[] = [
  { code: "en", shortLabel: "EN", label: "English", localeName: "English", dir: "ltr" },
  { code: "de", shortLabel: "DE", label: "Deutsch", localeName: "Deutsch", dir: "ltr" },
  { code: "es", shortLabel: "ES", label: "Spanisch", localeName: "Espanol", dir: "ltr" },
  { code: "it", shortLabel: "IT", label: "Italienisch", localeName: "Italiano", dir: "ltr" },
  { code: "ar", shortLabel: "AR", label: "Arabisch", localeName: "Arabic", dir: "rtl" },
  { code: "zh", shortLabel: "ZH", label: "Chinesisch", localeName: "Chinese", dir: "ltr" },
  { code: "ja", shortLabel: "JA", label: "Japanisch", localeName: "Japanese", dir: "ltr" },
  { code: "th", shortLabel: "TH", label: "Thailaendisch", localeName: "Thai", dir: "ltr" },
  { code: "fi", shortLabel: "FI", label: "Finnisch", localeName: "Suomi", dir: "ltr" },
  { code: "nl", shortLabel: "NL", label: "Niederlaendisch", localeName: "Nederlands", dir: "ltr" },
  { code: "de-CH", shortLabel: "CH", label: "Schweizer Deutsch", localeName: "Schweizer Deutsch", dir: "ltr" },
  { code: "fr", shortLabel: "FR", label: "Franzoesisch", localeName: "Francais", dir: "ltr" },
  { code: "sv", shortLabel: "SV", label: "Schwedisch", localeName: "Svenska", dir: "ltr" },
  { code: "pt", shortLabel: "PT", label: "Portugiesisch", localeName: "Portugues", dir: "ltr" },
]

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  currentLanguage: LanguageOption
  isRTL: boolean
  t: (key: string) => string
}

const defaultTranslations: Record<string, string> = {
  "nav.home": "Home",
  "nav.platforms": "Plattformen",
  "nav.products": "Produkte",
  "nav.solutions": "Loesungen",
  "nav.news": "KI Feed",
  "nav.pricing": "Preise",
  "nav.contact": "Kontakt",
  "nav.voiceAgent": "Try our AI Voice Agent",
  "nav.language": "Sprache",
  "contact.title": "Kontakt",
  "contact.subtitle": "Sprechen wir ueber KI, Automatisierung, Voicebots oder LegalTech.",
  "contact.callUs": "Anrufen",
  "contact.callUsDesc": "Direkter Kontakt fuer Beratung und Projektstart.",
  "contact.emailUs": "E-Mail",
  "contact.emailUsDesc": "Schreiben Sie uns Ihre Idee oder Anfrage.",
  "contact.consultation": "Beratung",
  "contact.consultationDesc": "Kostenloser Ersttermin fuer passende naechste Schritte.",
  "contact.formBelow": "Formular unten nutzen",
  "contact.sendMessage": "Nachricht senden",
  "contact.messageSent": "Nachricht gesendet",
  "contact.thankYou": "Danke. Wir melden uns zeitnah.",
  "contact.fullName": "Name",
  "contact.email": "E-Mail",
  "contact.company": "Firma",
  "contact.phone": "Telefon",
  "contact.productInterest": "Interesse",
  "contact.message": "Nachricht",
  "contact.submit": "Anfrage absenden",
  "contact.whyChoose": "Warum LetAIwork4u",
  "contact.cuttingEdge": "Moderne KI",
  "contact.cuttingEdgeDesc": "Praxisnahe Automatisierung statt Buzzwords.",
  "contact.expertTeam": "Umsetzung aus einer Hand",
  "contact.expertTeamDesc": "Strategie, Design, Software und Integration.",
  "contact.provenResults": "Fokus auf Ergebnis",
  "contact.provenResultsDesc": "Workflows, die Zeit sparen und messbar helfen.",
  "products.title": "Produkte",
  "products.subtitle": "KI-Produkte, Automatisierung und LegalTech aus dem LetAIwork4u Oekosystem.",
  "products.enterpriseAIChatbot.title": "Enterprise AI Chatbot",
  "products.enterpriseAIChatbot.description": "KI-Chatbot fuer Support, Vertrieb und interne Wissensprozesse.",
  "products.intelligentVoiceAssistant.title": "Intelligent Voice Assistant",
  "products.intelligentVoiceAssistant.description": "Telefon- und Voicebot-Automatisierung mit Weiterleitung und Terminlogik.",
  "products.businessProcessAutomation.title": "Business Process Automation",
  "products.businessProcessAutomation.description": "Automatisierte Workflows fuer wiederkehrende Aufgaben und Dokumente.",
  "products.predictiveAnalyticsPlatform.title": "Predictive Analytics Platform",
  "products.predictiveAnalyticsPlatform.description": "Aus Daten bessere Entscheidungen, Prognosen und Dashboards machen.",
  "products.customAIDevelopment.title": "Custom AI Development",
  "products.customAIDevelopment.description": "Massgeschneiderte KI-Loesungen fuer spezielle Prozesse.",
  "products.aiImplementationServices.title": "AI Implementation Services",
  "products.aiImplementationServices.description": "Beratung, Einfuehrung, Schulung und laufende Optimierung.",
  "products.category.chatbots": "Chatbots",
  "products.category.voiceAssistants": "Voice Assistants",
  "products.category.automation": "Automation",
  "products.category.analytics": "Analytics",
  "products.category.customSolutions": "Custom AI",
  "products.category.consulting": "Consulting",
  "products.keyFeatures": "Kernfunktionen",
  "products.viewDetails": "Details ansehen",
}

const translations: Partial<Record<Language, Record<string, string>>> = {
  de: defaultTranslations,
  "de-CH": {
    ...defaultTranslations,
    "nav.platforms": "Plattformen",
    "nav.solutions": "Loesige",
    "nav.pricing": "Priise",
    "nav.contact": "Kontakt",
  },
  en: {
    ...defaultTranslations,
    "nav.platforms": "Platforms",
    "nav.products": "Products",
    "nav.solutions": "Solutions",
    "nav.news": "AI Feed",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "contact.title": "Contact",
    "products.title": "Products",
  },
  es: { ...defaultTranslations, "nav.products": "Productos", "nav.solutions": "Soluciones", "nav.pricing": "Precios", "nav.contact": "Contacto", "nav.language": "Idioma" },
  it: { ...defaultTranslations, "nav.products": "Prodotti", "nav.solutions": "Soluzioni", "nav.pricing": "Prezzi", "nav.contact": "Contatto", "nav.language": "Lingua" },
  ar: { ...defaultTranslations, "nav.language": "Language" },
  zh: { ...defaultTranslations, "nav.language": "Language" },
  ja: { ...defaultTranslations, "nav.language": "Language" },
  th: { ...defaultTranslations, "nav.language": "Language" },
  fi: { ...defaultTranslations, "nav.products": "Tuotteet", "nav.solutions": "Ratkaisut", "nav.pricing": "Hinnat", "nav.contact": "Yhteys", "nav.language": "Kieli" },
  nl: { ...defaultTranslations, "nav.products": "Producten", "nav.solutions": "Oplossingen", "nav.pricing": "Prijzen", "nav.contact": "Contact", "nav.language": "Taal" },
  fr: { ...defaultTranslations, "nav.products": "Produits", "nav.solutions": "Solutions", "nav.pricing": "Tarifs", "nav.contact": "Contact", "nav.language": "Langue" },
  sv: { ...defaultTranslations, "nav.products": "Produkter", "nav.solutions": "Loesningar", "nav.pricing": "Priser", "nav.contact": "Kontakt", "nav.language": "Sprak" },
  pt: { ...defaultTranslations, "nav.products": "Produtos", "nav.solutions": "Solucoes", "nav.pricing": "Precos", "nav.contact": "Contato", "nav.language": "Idioma" },
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")
  const currentLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[1]
  const dictionary = translations[language] ?? defaultTranslations

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("letaiwork4u-language") as Language | null
    if (savedLanguage && languageOptions.some((option) => option.code === savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("letaiwork4u-language", language)
    document.documentElement.lang = language
    document.documentElement.dir = currentLanguage.dir
  }, [currentLanguage.dir, language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      currentLanguage,
      isRTL: currentLanguage.dir === "rtl",
      t: (key: string) => dictionary[key] ?? defaultTranslations[key] ?? key,
    }),
    [currentLanguage, dictionary, language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
