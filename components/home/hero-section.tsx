import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-foreground lg:min-h-[700px]">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center lg:min-h-[700px]">
        <span className="mb-4 inline-block rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-sm text-background backdrop-blur-sm">
          Bienvenue au GSSNT
        </span>
        
        <h1 className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl text-balance">
          Groupe Scolaire Seydou Nourou Tall – Pikine
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg text-background/90 md:text-xl text-pretty">
          Former les acteurs de demain dans un environnement propice à l'excellence académique, à la discipline et à la réussite.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" asChild className="group">
            <Link href="/inscriptions">
              S'inscrire
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
            <Link href="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-background/60">
            <span className="text-xs uppercase tracking-widest">Découvrir</span>
            <div className="h-12 w-px bg-background/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
