"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { name: "Toutes", slug: "all" },
  { name: "Campus", slug: "campus" },
  { name: "Événements", slug: "evenements" },
  { name: "Vie scolaire", slug: "vie-scolaire" },
  { name: "Sports", slug: "sports" },
  { name: "Cérémonies", slug: "ceremonies" },
]

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    alt: "Vue du campus principal",
    category: "campus",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    alt: "Élèves en classe",
    category: "vie-scolaire",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    alt: "Cérémonie de remise des diplômes",
    category: "ceremonies",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    alt: "Journée portes ouvertes",
    category: "evenements",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Cours de sciences",
    category: "vie-scolaire",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
    alt: "Bibliothèque",
    category: "campus",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    alt: "Activités sportives",
    category: "sports",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
    alt: "Étudiants en discussion",
    category: "vie-scolaire",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    alt: "Cérémonie de fin d'année",
    category: "ceremonies",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    alt: "Livres et apprentissage",
    category: "vie-scolaire",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    alt: "Salle informatique",
    category: "campus",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1461896836934- voices-b2bc?q=80&w=1200&auto=format&fit=crop",
    alt: "Match de football",
    category: "sports",
  },
]

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter((img) => img.category === selectedCategory)

  const openLightbox = (id: number) => {
    setLightboxImage(id)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    if (lightboxImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setLightboxImage(filteredImages[nextIndex].id)
  }

  const prevImage = () => {
    if (lightboxImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxImage(filteredImages[prevIndex].id)
  }

  const currentImage = images.find((img) => img.id === lightboxImage)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-background/70">
              Notre école en images
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl">
              Galerie photos
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-background/80">
              Découvrez notre campus, nos événements et la vie quotidienne au Groupe Scolaire Seydou Nourou Tall.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border bg-card py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
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

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => openLightbox(image.id)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground/80 p-3 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-background">{image.alt}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage !== null && currentImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4">
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="max-h-[90vh] max-w-[90vw]">
              <img
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
              />
              <p className="mt-4 text-center text-background">{currentImage.alt}</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
