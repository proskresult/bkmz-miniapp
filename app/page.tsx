import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { SystemResults } from "@/components/landing/system-results"
import { Services } from "@/components/landing/services"
import { WorkFormats } from "@/components/landing/work-formats"
import { BeforeAfter } from "@/components/landing/before-after"
import { TypicalSituations } from "@/components/landing/typical-situations"
import { TelegramChannels } from "@/components/landing/telegram-channels"
import { Quiz } from "@/components/landing/quiz"
import { LeadForm } from "@/components/landing/lead-form"
import { StickyCta } from "@/components/landing/sticky-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Hero />
      <Problems />
      <SystemResults />
      <WorkFormats />
      <BeforeAfter />
      <TypicalSituations />
      <TelegramChannels />
      <Quiz />
      <LeadForm />
      
      {/* Footer */}
      <footer className="px-4 py-8 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Илья Проскуряков. Все права защищены.
          </p>
        </div>
      </footer>
      
      <StickyCta />
    </main>
  )
}
