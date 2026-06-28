"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, CheckCircle, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const googleReviewUrl = "https://g.page/r/CY-c07GObxNZEBM/review"

const contactProducts = [
  { value: "beA4Outlook", labelKey: "contact.interest.bea4outlook" },
  { value: "beA Postfach", labelKey: "contact.interest.beaMailbox" },
  { value: "AnwaltSoft", labelKey: "contact.interest.anwaltsoft" },
  { value: "Anwalt Software", labelKey: "contact.interest.lawyerSoftware" },
  { value: "DMS / Dokumentenmanagement", labelKey: "contact.interest.dms" },
  { value: "Enterprise AI Chatbot", labelKey: "products.enterpriseAIChatbot.title" },
  { value: "Intelligent Voice Assistant", labelKey: "products.intelligentVoiceAssistant.title" },
  { value: "Business Process Automation", labelKey: "products.businessProcessAutomation.title" },
  { value: "Predictive Analytics Platform", labelKey: "products.predictiveAnalyticsPlatform.title" },
  { value: "Custom AI Development", labelKey: "products.customAIDevelopment.title" },
  { value: "AI Implementation Services", labelKey: "products.aiImplementationServices.title" },
  { value: "Other", labelKey: "contact.productOther" },
]

export default function ContactPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const productParam = searchParams.get("product")
  const planParam = searchParams.get("plan")

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: productParam || "",
    plan: planParam || "",
    message: productParam
      ? `${t("contact.prefillProduct")} ${productParam}`
      : planParam
        ? `${t("contact.prefillPlan")} ${planParam}`
        : "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, product: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Contact request failed")
      }

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          company: "",
          phone: "",
          product: "",
          plan: "",
          message: "",
        })
      }, 5000)
    } catch {
      setSubmitError(t("contact.submitError"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 md:px-6 py-20 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("contact.callUs")}</h3>
            <p className="text-muted-foreground mb-4">{t("contact.callUsDesc")}</p>
            <a href="tel:+4993161423087" className="text-primary font-medium">
              +49 93161423087
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("contact.emailUs")}</h3>
            <p className="text-muted-foreground mb-4">{t("contact.emailUsDesc")}</p>
            <a href="mailto:contact@letaiwork4u.com" className="text-primary font-medium">
              contact@letaiwork4u.com
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg border flex flex-col items-center text-center shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("contact.consultation")}</h3>
            <p className="text-muted-foreground mb-4">{t("contact.consultationDesc")}</p>
            <span className="text-primary font-medium">{t("contact.formBelow")}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-card p-8 rounded-lg border shadow-md">
            <h2 className="text-2xl font-bold text-white mb-6">{t("contact.sendMessage")}</h2>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t("contact.messageSent")}</h3>
                <p className="text-white/80">{t("contact.thankYou")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white font-medium">
                      {t("contact.fullName")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder={t("contact.fullName")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white font-medium">
                      {t("contact.email")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-white font-medium">
                      {t("contact.company")}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder={t("contact.company")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-white font-medium">
                      {t("contact.phone")}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="+49 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="product" className="text-white font-medium">
                    {t("contact.productInterest")}
                  </label>
                  <Select value={formState.product} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder={t("contact.productInterest")} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {contactProducts.map((product) => (
                        <SelectItem key={product.value} value={product.value}>
                          {t(product.labelKey)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white font-medium">
                    {t("contact.message")} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                    placeholder={t("contact.message")}
                  />
                </div>

                {submitError && <p className="text-sm text-red-400">{submitError}</p>}

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.submitting") : t("contact.submit")}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">{t("contact.whyChoose")}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t("contact.cuttingEdge")}</h3>
                    <p className="text-white/70 text-sm">{t("contact.cuttingEdgeDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t("contact.expertTeam")}</h3>
                    <p className="text-white/70 text-sm">{t("contact.expertTeamDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t("contact.provenResults")}</h3>
                    <p className="text-white/70 text-sm">{t("contact.provenResultsDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-blue-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t("contact.dedicatedSupport")}</h3>
                    <p className="text-white/70 text-sm">{t("contact.dedicatedSupportDesc")}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-white/80">{t("contact.enterpriseDesc")}</p>
                <div className="mt-4 grid gap-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a href="/pricing">{t("contact.exploreSolutions")}</a>
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10" asChild>
                    <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
                      <Star className="mr-2 h-4 w-4 text-yellow-300" />
                      {t("contact.googleReviewCta")}
                    </a>
                  </Button>
                  <p className="text-xs leading-5 text-white/55">{t("contact.googleReviewDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
