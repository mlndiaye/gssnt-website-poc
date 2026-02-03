import Image from "next/image"
import { Quote } from "lucide-react"

export function DirectorMessage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/school-building.jpg"
                alt="Bâtiment du Groupe Scolaire Seydou Nourou Tall"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden lg:block">
              <div className="rounded-xl bg-card p-4 shadow-lg">
                <p className="font-serif text-3xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">années d'excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Mot du Directeur
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Un message de bienvenue
              </h2>
            </div>

            <div className="relative rounded-2xl bg-card p-6 shadow-sm md:p-8">
              <Quote className="absolute left-6 top-6 h-12 w-12 text-muted opacity-50 md:left-8 md:top-8" />
              <div className="relative z-10 space-y-6 pt-8 text-center md:pt-4">
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Chers parents, chers élèves, bienvenue au Groupe Scolaire Seydou Nourou Tall de Pikine. 
                  Depuis plus de 30 ans, notre établissement s'engage à offrir une éducation de qualité, 
                  fondée sur les valeurs d'excellence, de discipline et de réussite.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Notre mission est de former des citoyens responsables, capables de contribuer 
                  au développement de notre nation. Nous mettons tout en œuvre pour accompagner 
                  chaque élève vers la réussite, dans un environnement sain et stimulant.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Ensemble, construisons l'avenir de nos enfants.
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                    <div className="h-20 w-20 overflow-hidden rounded-full bg-muted">
                      <Image
                        src="/images/director.jpg"
                        alt="M. Moussa Diallo - Directeur"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-serif text-lg font-semibold text-foreground">
                        M. Moussa Diallo
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Directeur Général du GSSNT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
