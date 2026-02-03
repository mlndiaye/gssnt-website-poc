import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, BookOpen, CheckCircle, GraduationCap, Atom, BookText, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Secondaire | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Découvrez notre programme secondaire pour les élèves de 16 à 19 ans. Préparation intensive au baccalauréat avec 98% de réussite.",
}

const objectives = [
  "Préparer efficacement au baccalauréat",
  "Maîtriser les programmes de chaque série",
  "Développer l'autonomie et la rigueur intellectuelle",
  "Accompagner l'orientation post-bac",
  "Former des citoyens responsables et cultivés",
  "Préparer à l'enseignement supérieur",
]

const series = [
  {
    icon: Atom,
    title: "Série S",
    description: "Sciences : Mathématiques, Physique-Chimie, SVT pour les carrières scientifiques et techniques.",
    subjects: ["Mathématiques", "Physique-Chimie", "SVT", "Philosophie"],
  },
  {
    icon: BookText,
    title: "Série L",
    description: "Lettres : Français, Philosophie, Langues pour les carrières littéraires et juridiques.",
    subjects: ["Philosophie", "Français", "Histoire-Géo", "Langues vivantes"],
  },
]

const levels = [
  { name: "Seconde", description: "Année de détermination" },
  { name: "Première", description: "Spécialisation S ou L" },
  { name: "Terminale", description: "Année du Baccalauréat" },
]

const results = [
  { year: "2024", rate: "98%", mentions: "45% mentions" },
  { year: "2023", rate: "96%", mentions: "42% mentions" },
  { year: "2022", rate: "95%", mentions: "40% mentions" },
]

export default function SecondairePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm text-background">
            <GraduationCap className="h-4 w-4" />
            16 - 19 ans
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
            Cycle Secondaire
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
            La préparation d'excellence au baccalauréat avec un accompagnement personnalisé vers l'enseignement supérieur.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-10 z-10 px-4">
        <div className="container mx-auto">
          <div className="grid gap-4 rounded-2xl bg-card p-6 shadow-xl md:grid-cols-3">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">35</div>
                <div className="text-sm text-muted-foreground">Élèves max par classe</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Clock className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">8h-18h</div>
                <div className="text-sm text-muted-foreground">Horaires de cours</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <BookOpen className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Réussite au Bac 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Structure
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Les 3 années du secondaire
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {levels.map((level) => (
              <div key={level.name} className="rounded-xl bg-card p-6 text-center shadow-sm">
                <div className="mb-2 font-serif text-2xl font-bold text-foreground">{level.name}</div>
                <p className="text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Nos filières
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Séries proposées
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Deux séries pour répondre aux aspirations de chaque élève.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {series.map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-8 shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mb-6 text-muted-foreground">{item.description}</p>
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-foreground">Matières principales :</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject) => (
                      <span key={subject} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Nos objectifs
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Objectifs pédagogiques
              </h2>
              <p className="mb-8 text-muted-foreground">
                Le cycle secondaire prépare nos élèves au baccalauréat et aux études supérieures avec un accompagnement personnalisé.
              </p>
              <ul className="space-y-4">
                {objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                alt="Élèves du secondaire en classe"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Nos résultats
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              L'excellence au baccalauréat
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Des résultats qui témoignent de la qualité de notre enseignement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {results.map((result) => (
              <div key={result.year} className="rounded-2xl bg-card p-8 text-center shadow-sm">
                <div className="mb-2 text-sm font-medium text-muted-foreground">Session {result.year}</div>
                <div className="mb-2 font-serif text-5xl font-bold text-foreground">{result.rate}</div>
                <div className="text-muted-foreground">de réussite</div>
                <div className="mt-4 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
                  {result.mentions}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bac Prep */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Préparation aux examens
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Réussir le Baccalauréat
            </h2>
            <p className="mb-8 text-muted-foreground">
              Notre dispositif de préparation au baccalauréat :
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Cours de renforcement</h3>
                <p className="text-sm text-muted-foreground">Séances intensives en mathématiques, physique, philosophie et langues.</p>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Bacs blancs</h3>
                <p className="text-sm text-muted-foreground">Plusieurs sessions d'examens blancs dans les conditions réelles.</p>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Tutorat</h3>
                <p className="text-sm text-muted-foreground">Accompagnement personnalisé par nos meilleurs enseignants.</p>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Orientation universitaire</h3>
                <p className="text-sm text-muted-foreground">Aide au choix des filières et préparation des dossiers d'inscription.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Rejoignez-nous
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Conditions d'admission
            </h2>
            <div className="mb-8 space-y-4 text-left text-muted-foreground">
              <p>Pour inscrire votre enfant au cycle secondaire, vous devez fournir :</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Un extrait de naissance</li>
                <li>Le relevé de notes du BFEM</li>
                <li>Le certificat de scolarité de l'année précédente</li>
                <li>Les bulletins de notes des deux derniers trimestres</li>
                <li>4 photos d'identité</li>
                <li>Une copie de la carte d'identité du parent</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="group">
                <Link href="/inscriptions">
                  Pré-inscrire mon enfant
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
