import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, BookOpen, CheckCircle, Baby, Palette, Music, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Préscolaire | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Découvrez notre programme préscolaire pour les enfants de 3 à 5 ans. Éveil, socialisation et préparation à l'entrée au primaire.",
}

const objectives = [
  "Développer l'autonomie et la confiance en soi",
  "Favoriser la socialisation et le vivre-ensemble",
  "Initier aux premiers apprentissages (lecture, écriture, calcul)",
  "Stimuler la créativité et l'imagination",
  "Développer la motricité fine et globale",
  "Éveiller la curiosité et le goût d'apprendre",
]

const program = [
  {
    icon: BookOpen,
    title: "Langage",
    description: "Acquisition du vocabulaire, initiation à la lecture et expression orale",
  },
  {
    icon: Palette,
    title: "Arts plastiques",
    description: "Dessin, peinture, modelage pour développer la créativité",
  },
  {
    icon: Music,
    title: "Éveil musical",
    description: "Chants, comptines et découverte des instruments",
  },
  {
    icon: Heart,
    title: "Vivre ensemble",
    description: "Règles de vie, partage et respect des autres",
  },
]

const schedule = [
  { time: "08h00 - 08h30", activity: "Accueil et jeux libres" },
  { time: "08h30 - 09h15", activity: "Activités de langage" },
  { time: "09h15 - 09h45", activity: "Récréation" },
  { time: "09h45 - 10h30", activity: "Activités mathématiques" },
  { time: "10h30 - 11h15", activity: "Arts et créativité" },
  { time: "11h15 - 12h00", activity: "Éveil musical / Motricité" },
  { time: "12h00 - 14h00", activity: "Déjeuner et sieste" },
  { time: "14h00 - 15h00", activity: "Activités d'éveil" },
  { time: "15h00 - 15h30", activity: "Récréation" },
  { time: "15h30 - 16h30", activity: "Jeux éducatifs et sortie" },
]

export default function PrescolairePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm text-background">
            <Baby className="h-4 w-4" />
            3 - 5 ans
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
            Cycle Préscolaire
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
            Un environnement bienveillant pour l'éveil et l'épanouissement de votre enfant, 
            avec une pédagogie adaptée aux tout-petits.
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
                <div className="font-serif text-2xl font-bold text-foreground">15</div>
                <div className="text-sm text-muted-foreground">Élèves max par classe</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <Clock className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">8h-16h30</div>
                <div className="text-sm text-muted-foreground">Horaires de classe</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                <BookOpen className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-foreground">3 niveaux</div>
                <div className="text-sm text-muted-foreground">Petite, Moyenne, Grande Section</div>
              </div>
            </div>
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
                Notre programme préscolaire est conçu pour préparer votre enfant à l'entrée au primaire 
                dans les meilleures conditions, tout en respectant son rythme de développement.
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
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
                alt="Enfants en activité au préscolaire"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Notre approche
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Programme d'enseignement
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Une pédagogie active et ludique pour développer toutes les compétences de votre enfant.
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Organisation
              </span>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Emploi du temps type
              </h2>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="divide-y divide-border">
                {schedule.map((item) => (
                  <div key={item.time} className="flex items-center justify-between py-3">
                    <span className="font-medium text-foreground">{item.time}</span>
                    <span className="text-muted-foreground">{item.activity}</span>
                  </div>
                ))}
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
              <p>Pour inscrire votre enfant au cycle préscolaire, vous devez fournir :</p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Un extrait de naissance</li>
                <li>Un certificat de vaccination à jour</li>
                <li>4 photos d'identité</li>
                <li>Une copie de la carte d'identité du parent</li>
              </ul>
              <p className="pt-4">
                <strong>Âge requis :</strong> L'enfant doit avoir entre 3 et 5 ans au 31 décembre de l'année d'inscription.
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
