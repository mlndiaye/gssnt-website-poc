import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/a-propos" },
  { title: "Nos Cycles", href: "/cycles/prescolaire" },
  { title: "Actualités", href: "/actualites" },
  { title: "Galerie", href: "/galerie" },
  { title: "Contact", href: "/contact" },
]

const cycles = [
  { title: "Préscolaire", href: "/cycles/prescolaire" },
  { title: "Primaire", href: "/cycles/primaire" },
  { title: "Moyen", href: "/cycles/moyen" },
  { title: "Secondaire", href: "/cycles/secondaire" },
]

const services = [
  { title: "Inscriptions", href: "/inscriptions" },
  { title: "Espace Parents", href: "/espace-parents" },
  { title: "Calendrier scolaire", href: "/espace-parents" },
  { title: "Documents", href: "/espace-parents" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold">GSSNT</span>
                <span className="block text-xs opacity-80">Pikine</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              Le Groupe Scolaire Seydou Nourou Tall de Pikine forme les acteurs de demain dans un environnement propice à l'excellence académique.
            </p>
            <p className="font-serif text-sm font-semibold">
              Excellence – Discipline – Réussite
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nos cycles */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Nos cycles</h3>
            <ul className="space-y-2">
              {cycles.map((cycle) => (
                <li key={cycle.title}>
                  <Link
                    href={cycle.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {cycle.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-6 font-serif text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                <span className="text-sm opacity-80">Pikine, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 opacity-80" />
                <a
                  href="tel:+221338343263"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  +221 33 834 32 63
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 opacity-80" />
                <a
                  href="mailto:contact@gssnt.sn"
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  contact@gssnt.sn
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold">Suivez-nous</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Groupe Scolaire Seydou Nourou Tall. Tous droits réservés.
            </p>
            <div className="flex gap-4 text-sm opacity-80">
              <Link href="/mentions-legales" className="transition-opacity hover:opacity-100">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="transition-opacity hover:opacity-100">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
