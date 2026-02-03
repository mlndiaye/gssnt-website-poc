"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "221338343263"
  const message = "Bonjour, je souhaite obtenir des informations sur le Groupe Scolaire Seydou Nourou Tall."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Contacter via WhatsApp</span>
    </a>
  )
}
