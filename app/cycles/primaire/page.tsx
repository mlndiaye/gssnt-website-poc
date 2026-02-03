import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, BookOpen, CheckCircle, GraduationCap, Calculator, Globe, Microscope } from "lucide-react"

export const metadata: Metadata = {
  title: "Primaire | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Découvrez notre programme primaire pour les enfants de 6 à 11 ans. Acquisition des fondamentaux et préparation au cycle moyen.",
}

const objectives = [
  "Maîtriser la lecture, l'écriture et le calcul",
  "Développer les capacités de raisonnement logique",
  "Acquérir une culture générale solide",
  "Maîtriser les bases des sciences et de l'histoire-géographie",
  "Développer l'expression orale et écrite en français",
  "Initier aux langues vivantes (anglais, arabe)",
]

const program = [
  {
    icon: BookOpen,
    title: "Français",
    description: "Lecture, grammaire, conjugaison, orthographe et expression écrite",
  },
  {
    icon: Calculator,
    title: "Mathématiques",
    description: "Numération, calcul, géométrie et résolution de problèmes",
  },
  {
    icon: Globe,
    title: "Histoire-Géographie",
    description: "Découverte du monde, du Sénégal et de l'Afrique",
  },
  {
    icon: Microscope,
    title: "Sciences",
    description: "Initiation scientifique et découverte de l'environnement",
  },
]

const levels = [
  { name: "CI", description: "Cours d'Initiation" },
  { name: "CP", description: "Cours Préparatoire" },
  { name: "CE1", description: "Cours Élémentaire 1" },
  { name: "CE2", description: "Cours Élémentaire 2" },
  { name: "CM1", description: "Cours Moyen 1" },
  { name: "CM2", description: "Cours Moyen 2" },
]

export default function PrimairePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm text-background">
            <GraduationCap className="h-4 w-4" />
            6 - 11 ans
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
            Cycle Primaire
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
            Les fondations d'une éducation solide pour préparer votre enfant à réussir tout au long de sa scolarité.
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
                <div className="font-serif text-2xl font-bold text-foreground">30</div>
                <div className="text-sm text-muted-foreground">Élèves max par classe</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Clock className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">8h-17h</div>
                <div className="text-sm text-muted-foreground">Horaires de classe</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <BookOpen className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">6 niveaux</div>
                <div className="text-sm text-muted-foreground">Du CI au CM2</div>
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
              Les 6 années du primaire
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {levels.map((level) => (
              <div key={level.name} className="rounded-xl bg-card p-4 text-center shadow-sm">
                <div className="mb-2 font-serif text-2xl font-bold text-foreground">{level.name}</div>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Nos objectifs
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Objectifs pédagogiques
              </h2>
              <p className="mb-8 text-muted-foreground">
                Le cycle primaire est le socle de tous les apprentissages. Notre objectif est de donner à chaque élève 
                les outils nécessaires pour réussir la suite de sa scolarité.
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
            <div className="relative order-1 aspect-square overflow-hidden rounded-2xl lg:order-2 lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
                alt="Élèves du primaire en classe"
                className="h-full w-full object-cover"
              />
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
              Un programme complet conforme aux directives du Ministère de l'Éducation Nationale du Sénégal.
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

      {/* Schedule */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Organisation
              </span>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Horaires types
              </h2>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">08h00 - 08h30</span>
                  <span className="text-muted-foreground">Accueil</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">08h30 - 10h00</span>
                  <span className="text-muted-foreground">Français</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">10h00 - 10h30</span>
                  <span className="text-muted-foreground">Récréation</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">10h30 - 12h00</span>
                  <span className="text-muted-foreground">Mathématiques</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">12h00 - 14h00</span>
                  <span className="text-muted-foreground">Pause déjeuner</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">14h00 - 15h30</span>
                  <span className="text-muted-foreground">Sciences / Histoire-Géo</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">15h30 - 16h00</span>
                  <span className="text-muted-foreground">Récréation</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">16h00 - 17h00</span>
                  <span className="text-muted-foreground">Activités complémentaires</span>
                </div>
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
              <p>Pour inscrire votre enfant au cycle primaire, vous devez fournir :</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Un extrait de naissance</li>
                <li>Le certificat de scolarité de l'année précédente (si applicable)</li>
                <li>Le bulletin de notes du dernier trimestre (si applicable)</li>
                <li>4 photos d'identité</li>
                <li>Une copie de la carte d'identité du parent</li>
              </ul>
              <p className="pt-4">
                <strong>Âge requis :</strong> L'enfant doit avoir 6 ans révolus au 31 décembre de l'année d'inscription pour entrer au CI.
              </p>
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
