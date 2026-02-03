"use client"

import { useState } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content: "Le Groupe Scolaire Seydou Nourou Tall a été une bénédiction pour notre famille. Nos trois enfants y ont été scolarisés et nous avons toujours été impressionnés par la qualité de l'enseignement et le dévouement des professeurs.",
    author: "Mme Fatou Sow",
    role: "Parent d'élèves",
    image: "/images/parent-1.jpg",
  },
  {
    id: 2,
    content: "Grâce à l'accompagnement personnalisé du GSSNT, j'ai obtenu mon baccalauréat avec mention Très Bien. Aujourd'hui, je poursuis mes études en médecine à Dakar. Merci à tous mes professeurs !",
    author: "Amadou Diop",
    role: "Ancien élève, Promotion 2024",
    image: "/images/student-alumni.jpg",
  },
  {
    id: 3,
    content: "L'environnement d'apprentissage au GSSNT est exceptionnel. Mon fils a non seulement progressé académiquement, mais il a aussi développé de vraies valeurs humaines. Je recommande vivement cette école.",
    author: "M. Ibrahima Ndiaye",
    role: "Parent d'élève",
    image: "/images/parent-2.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Témoignages
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Ce qu'ils disent de nous
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-card p-8 shadow-sm md:p-12">
            <Quote className="absolute left-6 top-6 h-10 w-10 text-muted opacity-50 md:left-8 md:top-8" />
            
            <div className="relative z-10 pt-8 text-center md:pt-4">
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                "{currentTestimonial.content}"
              </p>

              <div className="flex flex-col items-center gap-3">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.author}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
