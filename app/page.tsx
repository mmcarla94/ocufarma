// app/page.tsx
import Link from "next/link"
import { MoveRight, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategoryCard } from "@/components/category-card"
import { FeaturedMedication } from "@/components/featured-medication"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl text-primary">
              OcuFarma
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/categorie" className="text-sm font-medium transition-colors hover:text-primary">
              Categorie
            </Link>
            <Link href="/farmaci" className="text-sm font-medium transition-colors hover:text-primary">
              Tutti i Farmaci
            </Link>
            <Link href="/bugiardini" className="text-sm font-medium transition-colors hover:text-primary">
              Bugiardini
            </Link>
            <Link href="/promemoria" className="text-sm font-medium transition-colors hover:text-primary">
              I Miei Promemoria
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Accedi</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Contenuto principale */}
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 OcuFarma. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/termini" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Termini
            </Link>
            <Link href="/contatti" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contatti
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
