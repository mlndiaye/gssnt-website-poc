import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/school-courtyard.jpg",
    alt: "Cour de l'école",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/library.jpg",
    alt: "Bibliothèque",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/computer-lab.jpg",
    alt: "Salle informatique",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/sports.jpg",
    alt: "Activités sportives",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/arts.jpg",
    alt: "Arts et créativité",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/graduation.jpg",
    alt: "Cérémonie de remise de diplômes",
    span: "col-span-2 row-span-1",
  },
]

export function GalleryPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Notre quotidien
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            La vie au GSSNT
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Découvrez notre établissement et les moments forts de la vie scolaire à travers notre galerie photos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className={`group relative overflow-hidden rounded-xl ${image.span} ${index === 0 ? "aspect-square md:aspect-auto" : "aspect-square"}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-card">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/galerie" className="group">
              Voir toute la galerie
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
