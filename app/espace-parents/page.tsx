import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  FileText, 
  Bell, 
  Download, 
  Clock, 
  BookOpen,
  GraduationCap,
  Users,
  Phone
} from "lucide-react"

export const metadata: Metadata = {
  title: "Espace Parents/Élèves | Groupe Scolaire Seydou Nourou Tall - Pikine",
  description: "Accédez au calendrier scolaire, aux documents téléchargeables et aux annonces du Groupe Scolaire Seydou Nourou Tall.",
}

const announcements = [
  {
    id: 1,
    title: "Réunion parents-professeurs",
    date: "28 Février 2026",
    content: "La réunion parents-professeurs du 2ème trimestre aura lieu le 28 février 2026 à partir de 15h.",
    type: "important",
  },
  {
    id: 2,
    title: "Vacances de février",
    date: "15 Février 2026",
    content: "Les vacances de février débuteront le 15 février et se termineront le 2 mars 2026.",
    type: "info",
  },
  {
    id: 3,
    title: "Examens blancs du Bac",
    date: "10 Mars 2026",
    content: "Les examens blancs du baccalauréat se dérouleront du 10 au 17 mars 2026.",
    type: "important",
  },
  {
    id: 4,
    title: "Journée sportive",
    date: "5 Avril 2026",
    content: "Grande journée sportive inter-classes le samedi 5 avril. Tous les élèves sont invités à participer.",
    type: "info",
  },
]

const documents = [
  {
    title: "Règlement intérieur",
    description: "Les règles de vie au sein de l'établissement",
    icon: FileText,
    href: "#",
  },
  {
    title: "Calendrier scolaire 2025-2026",
    description: "Dates importantes de l'année scolaire",
    icon: Calendar,
    href: "#",
  },
  {
    title: "Programmes par niveau",
    description: "Les programmes officiels de chaque cycle",
    icon: BookOpen,
    href: "#",
  },
  {
    title: "Formulaires administratifs",
    description: "Certificats, attestations et autres documents",
    icon: FileText,
    href: "#",
  },
]

const calendarEvents = [
  { date: "5 Oct 2025", event: "Rentrée scolaire", type: "rentree" },
  { date: "24-31 Oct 2025", event: "Vacances de Toussaint", type: "vacances" },
  { date: "20 Déc 2025 - 5 Jan 2026", event: "Vacances de Noël", type: "vacances" },
  { date: "15 Jan 2026", event: "Fin du 1er trimestre", type: "trimestre" },
  { date: "15-28 Fév 2026", event: "Vacances de février", type: "vacances" },
  { date: "31 Mar 2026", event: "Fin du 2ème trimestre", type: "trimestre" },
  { date: "4-19 Avr 2026", event: "Vacances de Pâques", type: "vacances" },
  { date: "Mai 2026", event: "Examens du BFEM", type: "examen" },
  { date: "Juin 2026", event: "Baccalauréat", type: "examen" },
  { date: "30 Juin 2026", event: "Fin de l'année scolaire", type: "fin" },
]

export default function EspaceParentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-background/70">
              Ressources
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
              Espace Parents & Élèves
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
              Retrouvez toutes les informations importantes, le calendrier scolaire et les documents utiles.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="relative -mt-10 z-10 px-4">
          <div className="container mx-auto">
            <div className="grid gap-4 rounded-2xl bg-card p-6 shadow-xl md:grid-cols-4">
              <Link href="#annonces" className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Bell className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Annonces</div>
                  <div className="text-sm text-muted-foreground">Dernières nouvelles</div>
                </div>
              </Link>
              <Link href="#calendrier" className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Calendar className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Calendrier</div>
                  <div className="text-sm text-muted-foreground">Dates importantes</div>
                </div>
              </Link>
              <Link href="#documents" className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <FileText className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Documents</div>
                  <div className="text-sm text-muted-foreground">Téléchargements</div>
                </div>
              </Link>
              <Link href="/contact" className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Contact</div>
                  <div className="text-sm text-muted-foreground">Nous joindre</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section id="annonces" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Actualités
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Annonces importantes
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`rounded-2xl p-6 ${
                    announcement.type === "important"
                      ? "border-l-4 border-primary bg-card"
                      : "bg-muted"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {announcement.date}
                    </span>
                    {announcement.type === "important" && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                        Important
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                    {announcement.title}
                  </h3>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar */}
        <section id="calendrier" className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Organisation
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Calendrier scolaire 2025-2026
              </h2>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
              <div className="divide-y divide-border">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className={`h-3 w-3 rounded-full ${
                        event.type === "rentree" ? "bg-green-500" :
                        event.type === "vacances" ? "bg-blue-500" :
                        event.type === "trimestre" ? "bg-amber-500" :
                        event.type === "examen" ? "bg-red-500" :
                        "bg-gray-500"
                      }`} />
                      <span className="font-medium text-foreground">{event.event}</span>
                    </div>
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground">Rentrée</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-sm text-muted-foreground">Vacances</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="text-sm text-muted-foreground">Fin de trimestre</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm text-muted-foreground">Examens</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section id="documents" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Ressources
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Documents téléchargeables
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {documents.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  className="group flex items-center gap-4 rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary">
                    <doc.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-foreground">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Schedules */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Organisation quotidienne
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Horaires de l'établissement
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">Préscolaire</h3>
                <p className="text-muted-foreground">8h00 - 16h30</p>
                <p className="text-sm text-muted-foreground">Sieste : 12h30 - 14h00</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">Primaire</h3>
                <p className="text-muted-foreground">8h00 - 17h00</p>
                <p className="text-sm text-muted-foreground">Pause : 12h00 - 14h00</p>
              </div>
              <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">Moyen & Secondaire</h3>
                <p className="text-muted-foreground">8h00 - 18h00</p>
                <p className="text-sm text-muted-foreground">Pause : 12h00 - 14h00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
                Une question ?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Notre équipe administrative est disponible pour répondre à toutes vos questions.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+221338343263">
                    <Phone className="mr-2 h-4 w-4" />
                    +221 33 834 32 63
                  </a>
                </Button>
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
