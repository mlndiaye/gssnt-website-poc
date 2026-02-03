import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { DirectorMessage } from "@/components/home/director-message"
import { CyclesSection } from "@/components/home/cycles-section"
import { StatsSection } from "@/components/home/stats-section"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <DirectorMessage />
        <CyclesSection />
        <GalleryPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
