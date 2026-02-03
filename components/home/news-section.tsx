import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const news = [
  {
    id: 1,
    title: "Rentrée scolaire 2025-2026 : Les inscriptions sont ouvertes",
    excerpt: "Nous avons le plaisir de vous annoncer l'ouverture des inscriptions pour l'année scolaire 2025-2026. Rejoignez notre grande famille !",
    date: "15 Janvier 2026",
    category: "Inscriptions",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    href: "/actualites/rentree-2025-2026",
  },
  {
    id: 2,
    title: "Excellents résultats au BFEM et au Baccalauréat",
    excerpt: "Félicitations à tous nos élèves pour ces résultats exceptionnels. 98% de réussite au Bac et 95% au BFEM !",
    date: "10 Janvier 2026",
    category: "Résultats",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    href: "/actualites/resultats-examens",
  },
  {
    id: 3,
    title: "Journée portes ouvertes le 25 Février",
    excerpt: "Venez découvrir notre établissement lors de notre journée portes ouvertes. Rencontrez l'équipe pédagogique et visitez nos installations.",
    date: "5 Janvier 2026",
    category: "Événements",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    href: "/actualites/portes-ouvertes",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Actualités
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Les dernières nouvelles
            </h2>
          </div>
          <Button variant="outline" asChild className="group bg-transparent">
            <Link href="/actualites">
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={article.href} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
