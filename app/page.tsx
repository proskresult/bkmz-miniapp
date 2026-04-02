import { TopNav } from "@/components/landing/top-nav"
import { Hero } from "@/components/landing/hero"
import { StickyCta } from "@/components/landing/sticky-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <TopNav />
      <Hero />
      <StickyCta />
    </main>
  )
}
