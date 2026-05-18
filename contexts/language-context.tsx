"use client"

import { createContext, useContext, useMemo, useState } from "react"

type Language = "de" | "en"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const translations: Record<string, string> = {
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

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isRTL: false,
      t: (key: string) => translations[key] ?? key,
    }),
    [language],
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
