import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, BookOpen, CheckCircle, Lightbulb, FlaskConical, Languages, History } from "lucide-react"

export const metadata: Metadata = {
  title: "Moyen | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Découvrez notre programme du cycle moyen pour les élèves de 12 à 15 ans. Préparation au BFEM et développement de l'esprit critique.",
}

const objectives = [
  "Approfondir les connaissances dans toutes les disciplines",
  "Développer l'esprit critique et l'autonomie",
  "Préparer efficacement au BFEM",
  "Maîtriser deux langues vivantes (anglais et arabe)",
  "Initier à la méthodologie de travail du secondaire",
  "Accompagner l'orientation future des élèves",
]

const program = [
  {
    icon: FlaskConical,
    title: "Sciences",
    description: "Physique-Chimie, SVT et Mathématiques approfondies",
  },
  {
    icon: Languages,
    title: "Langues",
    description: "Français, Anglais et Arabe avec pratique orale renforcée",
  },
  {
    icon: History,
    title: "Sciences humaines",
    description: "Histoire, Géographie et Éducation civique",
  },
  {
    icon: Lightbulb,
    title: "Méthodologie",
    description: "Techniques d'apprentissage et préparation aux examens",
  },
]

const levels = [
  { name: "6ème", description: "Première année" },
  { name: "5ème", description: "Deuxième année" },
  { name: "4ème", description: "Troisième année" },
  { name: "3ème", description: "Année du BFEM" },
]

export default function MoyenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm text-background">
            <Lightbulb className="h-4 w-4" />
            12 - 15 ans
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
            Cycle Moyen
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
            L'approfondissement des connaissances et le développement de l'esprit critique pour préparer le BFEM et le passage au secondaire.
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
                <div className="font-serif text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Réussite au BFEM</div>
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
              Les 4 années du cycle moyen
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {levels.map((level) => (
              <div key={level.name} className="rounded-xl bg-card p-6 text-center shadow-sm">
                <div className="mb-2 font-serif text-3xl font-bold text-foreground">{level.name}</div>
                <p className="text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Élèves du cycle moyen en classe"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Nos objectifs
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Objectifs pédagogiques
              </h2>
              <p className="mb-8 text-muted-foreground">
                Le cycle moyen est une étape cruciale où l'élève développe son autonomie et se prépare aux exigences du secondaire et du BFEM.
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
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Notre approche
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Programme d'enseignement
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Un programme riche et diversifié pour une formation complète de l'élève.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {program.map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <item.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BFEM Prep */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Préparation aux examens
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Réussir le BFEM
            </h2>
            <p className="mb-8 text-muted-foreground">
              Notre établissement met en place un dispositif complet pour préparer nos élèves de 3ème au BFEM :
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Cours de renforcement</h3>
                <p className="text-sm text-muted-foreground">Sessions intensives dans les matières principales pendant les vacances et les week-ends.</p>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Examens blancs</h3>
                <p className="text-sm text-muted-foreground">Simulations régulières dans les conditions réelles de l'examen.</p>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Suivi personnalisé</h3>
                <p className="text-sm text-muted-foreground">Accompagnement individuel pour les élèves en difficulté.</p>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-3 font-serif font-bold text-foreground">Orientation</h3>
                <p className="text-sm text-muted-foreground">Conseils pour le choix de la série au secondaire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Rejoignez-nous
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Conditions d'admission
            </h2>
            <div className="mb-8 space-y-4 text-left text-muted-foreground">
              <p>Pour inscrire votre enfant au cycle moyen, vous devez fournir :</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Un extrait de naissance</li>
                <li>Le certificat de scolarité de l'année précédente</li>
                <li>Les bulletins de notes des deux derniers trimestres</li>
                <li>Le certificat d'entrée en 6ème (pour les nouveaux)</li>
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
