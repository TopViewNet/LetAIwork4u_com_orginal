import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CTO at TechCorp",
      content:
        "LETAIWORK4U has completely transformed how our team works with AI. The solutions are intuitive and the support is outstanding.",
      avatar: "/diverse-group-city.png",
      initials: "AJ",
    },
    {
      name: "Samantha Lee",
      role: "Product Manager",
      content:
        "I've tried many AI platforms, but LETAIWORK4U stands out for its ease of use and powerful capabilities. Highly recommended!",
      avatar: "/contemplative-artist.png",
      initials: "SL",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content:
        "As a startup founder, I needed reliable AI solutions that could scale. LETAIWORK4U exceeded my expectations in every way.",
      avatar: "/contemplative-man.png",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "The AI analytics features have given us insights we never had before. It's been a game-changer for our marketing strategy.",
      avatar: "/diverse-group-city.png",
      initials: "ER",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it - hear from some of our satisfied customers
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
