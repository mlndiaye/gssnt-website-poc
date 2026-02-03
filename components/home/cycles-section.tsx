import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Baby, BookOpen, Lightbulb, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const cycles = [
  {
    icon: Baby,
    title: "Préscolaire",
    ages: "3-5 ans",
    description: "Éveil, socialisation et découverte du monde pour préparer nos tout-petits à l'entrée au primaire.",
    href: "/cycles/prescolaire",
    image: "/images/prescolaire.jpg",
    features: ["Éveil sensoriel", "Activités ludiques", "Initiation à la lecture"],
  },
  {
    icon: BookOpen,
    title: "Primaire",
    ages: "6-11 ans",
    description: "Acquisition des fondamentaux en lecture, écriture et calcul pour une base solide.",
    href: "/cycles/primaire",
    image: "/images/primaire.jpg",
    features: ["Français", "Mathématiques", "Sciences"],
  },
  {
    icon: Lightbulb,
    title: "Moyen",
    ages: "12-15 ans",
    description: "Approfondissement des connaissances et développement de l'esprit critique.",
    href: "/cycles/moyen",
    image: "/images/moyen.jpg",
    features: ["Sciences physiques", "Histoire-Géo", "Langues vivantes"],
  },
  {
    icon: GraduationCap,
    title: "Secondaire",
    ages: "16-19 ans",
    description: "Préparation intensive au baccalauréat avec accompagnement personnalisé.",
    href: "/cycles/secondaire",
    image: "/images/secondaire.jpg",
    features: ["Série S", "Série L", "Orientation universitaire"],
  },
]

export function CyclesSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Notre offre éducative
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nos cycles d'enseignement
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Du préscolaire au secondaire, nous accompagnons chaque élève dans son parcours d'apprentissage avec des programmes adaptés à chaque niveau.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cycles.map((cycle) => (
            <div
              key={cycle.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cycle.image || "/placeholder.svg"}
                  alt={cycle.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/90 backdrop-blur-sm">
                    <cycle.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {cycle.ages}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">{cycle.title}</h3>
                
                <p className="mb-4 text-sm text-muted-foreground">
                  {cycle.description}
                </p>
                
                <Button variant="ghost" asChild className="group/btn mt-auto justify-start p-0 hover:bg-transparent">
                  <Link href={cycle.href} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/inscriptions">
              Inscrire mon enfant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
