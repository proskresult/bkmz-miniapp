import { TopNav } from "@/components/landing/top-nav"
import { SystemResults } from "@/components/landing/system-results"
import { WorkFormats } from "@/components/landing/work-formats"
import { BeforeAfter } from "@/components/landing/before-after"
import { TypicalSituations } from "@/components/landing/typical-situations"
import { StickyCta } from "@/components/landing/sticky-cta"

export default function AmoCrmPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <TopNav />

      {/* Hero страницы amoCRM */}
      <section className="px-4 pt-10 pb-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            amoCRM / системный бизнес
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Внедрение amoCRM
            <br />
            и системный рост бизнеса
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            Не просто настройка CRM, а выстраивание системы, в которой видно
            деньги, точки роста и управляется выручка. От привлечения клиентов
            до повторных продаж, аналитики и контроля прибыли.
          </p>
        </div>
      </section>

      {/* Все CRM-блоки с главной до TelegramChannels */}
      <SystemResults />
      <WorkFormats />
      <BeforeAfter />
      <TypicalSituations />

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Обсудим, как должна выглядеть ваша система
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Покажу, где у вас сейчас потери, какие блоки уже есть, а что нужно
            выстроить, чтобы CRM начала реально влиять на выручку.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/consultation"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-black"
            >
              Обсудить внедрение
            </a>

            <a
              href="/#lead-form"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white"
            >
              Получить разбор
            </a>
          </div>
        </div>
      </section>

      <StickyCta />
    </main>
  )
}
