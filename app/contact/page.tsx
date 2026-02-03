"use client";

import React from "react"

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Contactez-Nous
              </h1>
              <p className="text-lg md:text-xl opacity-90 text-pretty">
                Notre equipe est a votre disposition pour repondre a toutes vos
                questions concernant les inscriptions, les programmes ou la vie
                scolaire.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Adresse</h3>
                  <p className="text-sm text-muted-foreground">
                    Quartier Nimzatt, Pikine
                    <br />
                    Dakar, Senegal
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Telephone</h3>
                  <p className="text-sm text-muted-foreground">
                    +221 33 XXX XX XX
                    <br />
                    +221 77 XXX XX XX
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@gs-snt.sn
                    <br />
                    inscriptions@gs-snt.sn
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">Horaires</h3>
                  <p className="text-sm text-muted-foreground">
                    Lun - Ven: 7h30 - 17h00
                    <br />
                    Sam: 8h00 - 12h00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">
                  Notre Localisation
                </h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15436.51455595779!2d-17.4002!3d14.7645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172d0a1df86d9%3A0x8db08d0ad6f7e0f4!2sPikine%2C%20Senegal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation du Groupe Scolaire Seydou Nourou Tall"
                    className="absolute inset-0"
                  />
                </div>

                {/* WhatsApp CTA */}
                <Card className="mt-6 bg-[#25D366]/10 border-[#25D366]/20">
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold">
                        Contactez-nous sur WhatsApp
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Reponse rapide garantie
                      </p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                    >
                      <a
                        href="https://wa.me/221770000000"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Envoyer un message
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Envoyez-nous un message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Remplissez le formulaire ci-dessous et nous vous
                      repondrons dans les plus brefs delais.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nom">Nom complet *</Label>
                          <Input
                            id="nom"
                            placeholder="Votre nom"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telephone">Telephone *</Label>
                          <Input
                            id="telephone"
                            type="tel"
                            placeholder="+221 XX XXX XX XX"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sujet">Sujet *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inscription">
                              Demande d&apos;inscription
                            </SelectItem>
                            <SelectItem value="information">
                              Demande d&apos;information
                            </SelectItem>
                            <SelectItem value="visite">
                              Planifier une visite
                            </SelectItem>
                            <SelectItem value="scolarite">
                              Questions sur la scolarite
                            </SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Decrivez votre demande..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={formStatus === "success"}
                      >
                        {formStatus === "success" ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Message envoye !
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">
                Questions Frequentes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retrouvez les reponses aux questions les plus frequemment posees
                par les parents.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Quels sont les documents necessaires pour l'inscription ?",
                  answer:
                    "Les documents requis sont : extrait de naissance, certificat de scolarite, photos d'identite, carnet de vaccination, et une copie de la piece d'identite du parent/tuteur.",
                },
                {
                  question: "Quand ouvrent les inscriptions pour la prochaine annee ?",
                  answer:
                    "Les inscriptions ouvrent generalement en avril pour la rentree de septembre. Les places etant limitees, nous vous conseillons de vous inscrire des l'ouverture.",
                },
                {
                  question: "Proposez-vous des facilites de paiement ?",
                  answer:
                    "Oui, nous proposons un echelonnement des frais de scolarite en 3 ou 4 versements. Contactez notre service administratif pour plus de details.",
                },
                {
                  question: "Y a-t-il une cantine scolaire ?",
                  answer:
                    "Oui, notre etablissement dispose d'une cantine qui propose des repas equilibres. Les menus sont elabores pour repondre aux besoins nutritionnels des enfants.",
                },
                {
                  question: "Quels sont les horaires de l'ecole ?",
                  answer:
                    "Les cours se deroulent de 8h00 a 12h30 et de 15h00 a 17h00 du lundi au vendredi. Le samedi, les cours ont lieu de 8h00 a 12h00.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="py-4">
                    <h3 className="font-serif font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
