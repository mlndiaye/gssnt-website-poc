import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center md:px-12 md:py-20">
          {/* Background image */}
          <Image
            src="/images/graduation.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-foreground/70" />

          <div className="relative z-10">
            <h2 className="mb-4 font-serif text-3xl font-bold text-background md:text-4xl lg:text-5xl text-balance">
              Prêt à rejoindre notre famille ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-background/80 text-pretty">
              Les inscriptions pour l'année scolaire 2025-2026 sont ouvertes. 
              Offrez à votre enfant une éducation d'excellence au sein du Groupe Scolaire Seydou Nourou Tall.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/inscriptions">
                  Commencer l'inscription
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <a href="tel:+221338343263">
                  <Phone className="mr-2 h-4 w-4" />
                  +221 33 834 32 63
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-background/60">
              Horaires d'accueil : Lundi - Vendredi, 8h00 - 17h00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
