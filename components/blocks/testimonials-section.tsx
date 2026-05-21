"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = [
    {
      name: "Alex Johnson",
      role: t("testimonials.0.role"),
      content: t("testimonials.0.content"),
      avatar: "/diverse-group-city.png",
      initials: "AJ",
    },
    {
      name: "Samantha Lee",
      role: t("testimonials.1.role"),
      content: t("testimonials.1.content"),
      avatar: "/contemplative-artist.png",
      initials: "SL",
    },
    {
      name: "Michael Chen",
      role: t("testimonials.2.role"),
      content: t("testimonials.2.content"),
      avatar: "/contemplative-man.png",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: t("testimonials.3.role"),
      content: t("testimonials.3.content"),
      avatar: "/diverse-group-city.png",
      initials: "ER",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("testimonials.title")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
