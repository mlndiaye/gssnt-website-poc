"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, FileText, Clock, Phone, Upload, AlertCircle } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Remplir le formulaire",
    description: "Complétez le formulaire de préinscription en ligne avec les informations de l'élève.",
  },
  {
    number: "2",
    title: "Préparer les documents",
    description: "Rassemblez les documents requis : extrait de naissance, bulletins, photos d'identité.",
  },
  {
    number: "3",
    title: "Prise de rendez-vous",
    description: "Notre équipe vous contactera pour fixer un rendez-vous de finalisation.",
  },
  {
    number: "4",
    title: "Finalisation",
    description: "Venez avec les documents originaux pour finaliser l'inscription.",
  },
]

const classes = [
  { value: "prescolaire-petite", label: "Préscolaire - Petite Section" },
  { value: "prescolaire-moyenne", label: "Préscolaire - Moyenne Section" },
  { value: "prescolaire-grande", label: "Préscolaire - Grande Section" },
  { value: "primaire-ci", label: "Primaire - CI" },
  { value: "primaire-cp", label: "Primaire - CP" },
  { value: "primaire-ce1", label: "Primaire - CE1" },
  { value: "primaire-ce2", label: "Primaire - CE2" },
  { value: "primaire-cm1", label: "Primaire - CM1" },
  { value: "primaire-cm2", label: "Primaire - CM2" },
  { value: "moyen-6eme", label: "Moyen - 6ème" },
  { value: "moyen-5eme", label: "Moyen - 5ème" },
  { value: "moyen-4eme", label: "Moyen - 4ème" },
  { value: "moyen-3eme", label: "Moyen - 3ème" },
  { value: "secondaire-seconde", label: "Secondaire - Seconde" },
  { value: "secondaire-premiere-s", label: "Secondaire - Première S" },
  { value: "secondaire-premiere-l", label: "Secondaire - Première L" },
  { value: "secondaire-terminale-s", label: "Secondaire - Terminale S" },
  { value: "secondaire-terminale-l", label: "Secondaire - Terminale L" },
]

const requiredDocs = [
  "Extrait de naissance",
  "Certificat de scolarité (si applicable)",
  "Bulletins de notes des deux derniers trimestres",
  "4 photos d'identité",
  "Copie de la carte d'identité du parent/tuteur",
]

export default function InscriptionsPage() {
  const [formData, setFormData] = useState({
    prenomEleve: "",
    nomEleve: "",
    dateNaissance: "",
    classe: "",
    prenomParent: "",
    nomParent: "",
    telephone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, classe: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-background/70">
              Rejoignez-nous
            </span>
            <h1 className="mb-6 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
              Inscriptions 2025-2026
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-background/80 text-pretty">
              Les inscriptions pour l'année scolaire 2025-2026 sont ouvertes. Offrez à votre enfant une éducation d'excellence.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Comment s'inscrire
              </span>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Procédure d'admission
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="rounded-2xl bg-card p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-serif text-xl font-bold text-primary-foreground">
                      {step.number}
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 translate-x-full bg-border lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div>
                <span className="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Étape 1
                </span>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                  Formulaire de préinscription
                </h2>

                {isSubmitted ? (
                  <div className="rounded-2xl bg-card p-8 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                      Demande envoyée avec succès !
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Nous avons bien reçu votre demande de préinscription. Notre équipe vous contactera dans les plus brefs délais pour la suite de la procédure.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Nouvelle inscription
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-card p-6 shadow-sm md:p-8">
                    {/* Student Info */}
                    <div>
                      <h3 className="mb-4 font-serif font-bold text-foreground">Informations de l'élève</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="prenomEleve">Prénom de l'élève *</Label>
                          <Input
                            id="prenomEleve"
                            name="prenomEleve"
                            value={formData.prenomEleve}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nomEleve">Nom de l'élève *</Label>
                          <Input
                            id="nomEleve"
                            name="nomEleve"
                            value={formData.nomEleve}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="dateNaissance">Date de naissance *</Label>
                          <Input
                            id="dateNaissance"
                            name="dateNaissance"
                            type="date"
                            value={formData.dateNaissance}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="classe">Classe demandée *</Label>
                          <Select value={formData.classe} onValueChange={handleSelectChange} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une classe" />
                            </SelectTrigger>
                            <SelectContent>
                              {classes.map((cls) => (
                                <SelectItem key={cls.value} value={cls.value}>
                                  {cls.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Parent Info */}
                    <div>
                      <h3 className="mb-4 font-serif font-bold text-foreground">Informations du parent/tuteur</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="prenomParent">Prénom *</Label>
                          <Input
                            id="prenomParent"
                            name="prenomParent"
                            value={formData.prenomParent}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nomParent">Nom *</Label>
                          <Input
                            id="nomParent"
                            name="nomParent"
                            value={formData.nomParent}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="telephone">Téléphone *</Label>
                          <Input
                            id="telephone"
                            name="telephone"
                            type="tel"
                            value={formData.telephone}
                            onChange={handleInputChange}
                            placeholder="+221 XX XXX XX XX"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message complémentaire</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Informations supplémentaires, questions..."
                        rows={4}
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                    </p>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Required Documents */}
                <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">Documents requis</h3>
                  </div>
                  <ul className="space-y-3">
                    {requiredDocs.map((doc) => (
                      <li key={doc} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule */}
                <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">Horaires d'accueil</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Lundi - Vendredi :</strong> 8h00 - 17h00</p>
                    <p><strong>Samedi :</strong> 8h00 - 12h00</p>
                    <p><strong>Dimanche :</strong> Fermé</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">Besoin d'aide ?</h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    Notre équipe est disponible pour répondre à toutes vos questions.
                  </p>
                  <a
                    href="tel:+221338343263"
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    +221 33 834 32 63
                  </a>
                </div>

                {/* Important Notice */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    <h4 className="font-semibold text-amber-800">Important</h4>
                  </div>
                  <p className="text-sm text-amber-700">
                    Les places sont limitées. La préinscription ne garantit pas l'admission. 
                    Seule la validation finale avec les documents originaux confirme l'inscription.
                  </p>
                </div>
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
