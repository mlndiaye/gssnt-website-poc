import { Users, GraduationCap, Calendar, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1 500+",
    label: "Élèves",
    description: "Inscrits cette année",
  },
  {
    icon: GraduationCap,
    value: "85",
    label: "Enseignants",
    description: "Qualifiés et dévoués",
  },
  {
    icon: Calendar,
    value: "30+",
    label: "Années",
    description: "D'expérience",
  },
  {
    icon: Award,
    value: "98%",
    label: "Réussite",
    description: "Au baccalauréat",
  },
]

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container mx-auto">
        <div className="grid gap-4 rounded-2xl bg-card p-6 shadow-xl md:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted">
                <stat.icon className="h-7 w-7 text-foreground" />
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="font-medium text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
