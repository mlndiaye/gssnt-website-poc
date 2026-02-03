import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Target, Eye, Users, Award, BookOpen, Heart, Shield, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Découvrez l'histoire, la mission et les valeurs du Groupe Scolaire Seydou Nourou Tall de Pikine. Plus de 30 ans d'excellence éducative au Sénégal.",
}

const values = [
  {
    icon: Shield,
    title: "Discipline",
    description: "La rigueur et le respect des règles sont les fondements de notre réussite. Nous formons des élèves responsables et respectueux.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Nous visons l'excellence dans tous les domaines, académique comme personnel. Chaque élève est encouragé à donner le meilleur de lui-même.",
  },
  {
    icon: Heart,
    title: "Citoyenneté",
    description: "Former des citoyens engagés et responsables qui contribueront au développement de notre société et de notre nation.",
  },
]

const team = [
  {
    name: "M. Moussa Diallo",
    role: "Directeur Général",
    description: "30 ans d'expérience dans l'éducation",
    initials: "MD",
  },
  {
    name: "Mme Aminata Fall",
    role: "Directrice Pédagogique",
    description: "Spécialiste en pédagogie moderne",
    initials: "AF",
  },
  {
    name: "M. Ousmane Sarr",
    role: "Directeur du Secondaire",
    description: "Expert en préparation aux examens",
    initials: "OS",
  },
  {
    name: "Mme Khady Ndiaye",
    role: "Directrice du Primaire",
    description: "Spécialiste de l'éducation primaire",
    initials: "KN",
  },
  {
    name: "M. Ibrahima Gueye",
    role: "Directeur du Préscolaire",
    description: "Expert en petite enfance",
    initials: "IG",
  },
  {
    name: "Mme Fatou Diop",
    role: "Responsable Administrative",
    description: "Gestion administrative et financière",
    initials: "FD",
  },
]

const milestones = [
  { year: "1994", event: "Fondation du Groupe Scolaire Seydou Nourou Tall à Pikine" },
  { year: "1998", event: "Ouverture du cycle secondaire" },
  { year: "2005", event: "Construction du nouveau bâtiment administratif" },
  { year: "2010", event: "Premier taux de réussite au Bac supérieur à 90%" },
  { year: "2015", event: "Inauguration de la salle informatique moderne" },
  { year: "2020", event: "Adaptation à l'enseignement hybride" },
  { year: "2024", event: "Célébration des 30 ans avec 98% de réussite au Bac" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-background/70">
              Notre histoire
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
              À propos du GSSNT
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
              Depuis 1994, le Groupe Scolaire Seydou Nourou Tall de Pikine forme les acteurs de demain dans un environnement propice à l'excellence.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Notre parcours
                </span>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Plus de 30 ans d'excellence éducative
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondé en 1994, le Groupe Scolaire Seydou Nourou Tall est né de la vision d'offrir une éducation de qualité aux enfants de Pikine et de ses environs. Notre établissement porte le nom du vénéré Cheikh Seydou Nourou Tall, figure emblématique de l'éducation au Sénégal.
                  </p>
                  <p>
                    Au fil des années, nous avons grandi pour devenir l'un des établissements de référence de la région, accueillant aujourd'hui plus de 1 500 élèves du préscolaire au secondaire.
                  </p>
                  <p>
                    Notre engagement envers l'excellence académique et la formation citoyenne nous a permis d'atteindre des taux de réussite exceptionnels, avec 98% de réussite au baccalauréat en 2024.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`relative flex items-center gap-4 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="ml-10 rounded-lg bg-card p-4 shadow-sm md:ml-0">
                          <span className="font-serif text-lg font-bold text-foreground">{milestone.year}</span>
                          <p className="text-sm text-muted-foreground">{milestone.event}</p>
                        </div>
                      </div>
                      <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground md:relative md:left-auto">
                        {milestone.year.slice(-2)}
                      </div>
                      <div className="hidden flex-1 md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-card p-8 shadow-sm md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Notre Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Offrir une éducation de qualité qui prépare les élèves à réussir académiquement tout en développant leur sens de la responsabilité, leur esprit critique et leurs compétences sociales. Nous nous engageons à créer un environnement d'apprentissage stimulant où chaque élève peut s'épanouir et atteindre son plein potentiel.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-sm md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <Eye className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">Notre Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Être l'établissement de référence au Sénégal, reconnu pour l'excellence de son enseignement, la qualité de son encadrement et la réussite de ses élèves. Nous aspirons à former des citoyens éclairés, capables de contribuer positivement au développement de notre société et de relever les défis du monde moderne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Ce qui nous guide
              </span>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Nos valeurs fondamentales
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Ces trois piliers guident notre action quotidienne et façonnent l'éducation que nous offrons à nos élèves.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <value.icon className="h-10 w-10 text-foreground" />
                  </div>
                  <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Notre équipe
              </span>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                L'équipe administrative
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Une équipe dévouée et expérimentée au service de l'excellence éducative.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 font-serif text-5xl font-bold text-foreground">30+</div>
                <p className="text-muted-foreground">Années d'expérience</p>
              </div>
              <div>
                <div className="mb-2 font-serif text-5xl font-bold text-foreground">1 500+</div>
                <p className="text-muted-foreground">Élèves inscrits</p>
              </div>
              <div>
                <div className="mb-2 font-serif text-5xl font-bold text-foreground">85</div>
                <p className="text-muted-foreground">Enseignants qualifiés</p>
              </div>
              <div>
                <div className="mb-2 font-serif text-5xl font-bold text-foreground">98%</div>
                <p className="text-muted-foreground">Réussite au Bac</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
