import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Actualités | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Découvrez les dernières actualités, événements et annonces du Groupe Scolaire Seydou Nourou Tall de Pikine.",
}

const categories = [
  { name: "Tous", slug: "tous" },
  { name: "Événements", slug: "evenements" },
  { name: "Inscriptions", slug: "inscriptions" },
  { name: "Résultats", slug: "resultats" },
  { name: "Vie scolaire", slug: "vie-scolaire" },
]

const news = [
  {
    id: 1,
    title: "Rentrée scolaire 2025-2026 : Les inscriptions sont ouvertes",
    excerpt: "Nous avons le plaisir de vous annoncer l'ouverture des inscriptions pour l'année scolaire 2025-2026. Les places sont limitées, ne tardez pas à inscrire vos enfants pour leur assurer une place dans notre établissement.",
    date: "15 Janvier 2026",
    category: "Inscriptions",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    slug: "rentree-2025-2026",
    featured: true,
  },
  {
    id: 2,
    title: "Excellents résultats au BFEM et au Baccalauréat 2024",
    excerpt: "Félicitations à tous nos élèves pour ces résultats exceptionnels. Avec 98% de réussite au Baccalauréat et 95% au BFEM, le GSSNT confirme son statut d'établissement d'excellence.",
    date: "10 Janvier 2026",
    category: "Résultats",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    slug: "resultats-examens-2024",
    featured: true,
  },
  {
    id: 3,
    title: "Journée portes ouvertes le 25 Février 2026",
    excerpt: "Venez découvrir notre établissement lors de notre journée portes ouvertes. Rencontrez l'équipe pédagogique, visitez nos installations et posez toutes vos questions.",
    date: "5 Janvier 2026",
    category: "Événements",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    slug: "portes-ouvertes-fevrier-2026",
    featured: false,
  },
  {
    id: 4,
    title: "Cérémonie de remise des prix d'excellence",
    excerpt: "Le GSSNT a organisé sa traditionnelle cérémonie de remise des prix pour récompenser les meilleurs élèves de chaque niveau. Une soirée mémorable pour nos jeunes talents.",
    date: "20 Décembre 2025",
    category: "Vie scolaire",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    slug: "ceremonie-prix-excellence",
    featured: false,
  },
  {
    id: 5,
    title: "Nouveau laboratoire informatique inauguré",
    excerpt: "Notre établissement s'équipe d'un nouveau laboratoire informatique moderne avec 30 postes de travail pour initier nos élèves aux nouvelles technologies.",
    date: "15 Décembre 2025",
    category: "Vie scolaire",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    slug: "nouveau-laboratoire-informatique",
    featured: false,
  },
  {
    id: 6,
    title: "Tournoi sportif inter-classes",
    excerpt: "Grande compétition sportive entre les classes du cycle moyen et secondaire. Football, basketball et athlétisme au programme de cette semaine sportive.",
    date: "10 Décembre 2025",
    category: "Événements",
    image: "https://images.unsplash.com/photo-1461896836934- voices-b2bc?q=80&w=800&auto=format&fit=crop",
    slug: "tournoi-sportif",
    featured: false,
  },
  {
    id: 7,
    title: "Réunion parents-professeurs du 1er trimestre",
    excerpt: "La réunion parents-professeurs du premier trimestre aura lieu le 28 novembre. C'est l'occasion d'échanger sur le parcours de vos enfants.",
    date: "5 Décembre 2025",
    category: "Vie scolaire",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    slug: "reunion-parents-professeurs",
    featured: false,
  },
  {
    id: 8,
    title: "Concours de récitation en arabe",
    excerpt: "Nos élèves ont brillé lors du concours régional de récitation en arabe. 3 podiums pour le GSSNT qui confirme son excellence dans l'enseignement des langues.",
    date: "1 Décembre 2025",
    category: "Résultats",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    slug: "concours-recitation-arabe",
    featured: false,
  },
]

export default function ActualitesPage() {
  const featuredNews = news.filter((article) => article.featured)
  const regularNews = news.filter((article) => !article.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-background/70">
              Restez informés
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl">
              Actualités
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-background/80">
              Découvrez les dernières nouvelles, événements et annonces de notre établissement.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border bg-card py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={category.slug}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">À la une</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredNews.map((article) => (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link href={`/actualites/${article.slug}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden">
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
                      <h3 className="mb-3 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
                        Lire la suite
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">Toutes les actualités</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularNews.map((article) => (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link href={`/actualites/${article.slug}`} className="block">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
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
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="rounded-lg border border-border bg-card px-8 py-3 font-medium text-foreground transition-colors hover:bg-muted">
                Charger plus d'articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                Restez informés
              </h2>
              <p className="mb-8 text-muted-foreground">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités de l'école directement dans votre boîte mail.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
