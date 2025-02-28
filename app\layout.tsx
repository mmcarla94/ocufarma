// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { NotificationHandler } from "@/components/notification-handler"
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OcuFarma - Farmaci Oculistici",
  description: "Catalogo completo di farmaci oculistici con informazioni dettagliate, prezzi e bugiardini",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Toaster />
          <NotificationHandler />
        </SessionProvider>
      </body>
    </html>
  )
}
