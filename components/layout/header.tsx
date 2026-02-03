"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const cycles = [
  { title: "Préscolaire", href: "/cycles/prescolaire", description: "Éveil et découverte pour les tout-petits" },
  { title: "Primaire", href: "/cycles/primaire", description: "Les fondamentaux de l'apprentissage" },
  { title: "Moyen", href: "/cycles/moyen", description: "Approfondissement des connaissances" },
  { title: "Secondaire", href: "/cycles/secondaire", description: "Préparation au baccalauréat" },
]

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/a-propos" },
  { title: "Actualités", href: "/actualites" },
  { title: "Galerie", href: "/galerie" },
  { title: "Espace Parents", href: "/espace-parents" },
  { title: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isCycleActive = () => pathname.startsWith("/cycles")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-bold text-foreground">GSSNT</span>
            <span className="block text-xs text-muted-foreground">Pikine</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/") ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                  )}>
                    Accueil
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/a-propos" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/a-propos") ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                  )}>
                    À propos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  isCycleActive() ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                )}>Nos Cycles</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {cycles.map((cycle) => (
                      <li key={cycle.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={cycle.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{cycle.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {cycle.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/actualites" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/actualites") ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                  )}>
                    Actualités
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/galerie" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/galerie") ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                  )}>
                    Galerie
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/espace-parents" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/espace-parents") ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                  )}>
                    Espace Parents
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive("/contact") ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "bg-transparent"
                  )}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <Button variant="outline" asChild>
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button asChild>
            <Link href="/inscriptions">S'inscrire</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden border-t border-border bg-card",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium hover:bg-muted",
                    isActive(link.href) ? "bg-primary text-primary-foreground" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <details className="group" open={isCycleActive()}>
                <summary className={cn(
                  "flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-muted",
                  isCycleActive() ? "bg-primary text-primary-foreground" : "text-foreground"
                )}>
                  Nos Cycles
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <ul className="mt-2 space-y-1 pl-4">
                  {cycles.map((cycle) => (
                    <li key={cycle.title}>
                      <Link
                        href={cycle.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm hover:bg-muted hover:text-foreground",
                          isActive(cycle.href) ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {cycle.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Nous contacter</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/inscriptions" onClick={() => setMobileMenuOpen(false)}>S'inscrire</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
