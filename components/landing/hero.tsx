"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, MessageCircle } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToCRM = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTelegram = () => {
    document.getElementById("telegram-channels")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="px-4 pt-5 pb-8">
      <div className="max-w-xl mx-auto w-full">
        {/* Фото */}
        <div className="relative w-full h-[32vh] min-h-[260px] max-h-[360px] mb-5 rounded-[28px] overflow-hidden border border-white/10">
          <Image
            src="/images/ilya-photo.jpg"
            alt="Илья Проскуряков"
            fill
            priority
            className="object-cover object-[center_22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>

        {/* Текст */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Илья Проскуряков
          </h1>

          <h2 className="text-lg font-semibold text-primary leading-snug mb-3">
            Системы управления бизнесом и рост через CRM и Telegram
          </h2>

          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Видно деньги, точки роста и управляется выручка
          </p>
        </div>

        {/* Направления в строку */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* CRM */}
          <button
            type="button"
            onClick={scrollToCRM}
            className="text-left rounded-[24px] border border-emerald-500/20 bg-[#0d1630] p-4 shadow-[0_0_24px_rgba(34,197,94,0.06)] active:scale-[0.98] transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-3">
              <Settings className="w-6 h-6 text-emerald-400" />
            </div>

            <div className="text-xs text-emerald-400 mb-2">Системы</div>

            <div className="text-base font-bold leading-snug mb-2">
              amoCRM
            </div>

            <p className="text-xs leading-5 text-muted-foreground mb-3">
              CRM, автоматизация и контроль продаж
            </p>

            <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
              Внедрить <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* Telegram */}
          <button
            type="button"
            onClick={scrollToTelegram}
            className="text-left rounded-[24px] border border-sky-500/20 bg-[#0d1630] p-4 shadow-[0_0_24px_rgba(56,189,248,0.06)] active:scale-[0.98] transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 text-sky-400" />
            </div>

            <div className="text-xs text-sky-400 mb-2">Трафик</div>

            <div className="text-base font-bold leading-snug mb-2">
              Telegram-бот
            </div>

            <p className="text-xs leading-5 text-muted-foreground mb-3">
              Клиенты из Telegram через рабочие связки
            </p>

            <div className="text-sm font-semibold text-sky-400 flex items-center gap-1">
              Получить <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full h-14 text-base font-semibold rounded-2xl"
          onClick={scrollToForm}
        >
          Получить разбор
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  )
}
