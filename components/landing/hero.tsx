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
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* 🔥 ФОТО ФОНОМ */}
      <div className="absolute inset-0">
        <Image
          src="/images/ilya-photo.jpg"
          alt="Илья Проскуряков"
          fill
          className="object-cover object-top opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* контент */}
      <div className="relative z-10 px-4 pt-16 pb-10 max-w-xl mx-auto w-full">

        {/* Заголовок */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">
            Илья Проскуряков
          </h1>

          <h2 className="text-lg font-semibold text-primary mb-3">
            Системы управления бизнесом  
            и рост через CRM и Telegram
          </h2>

          <p className="text-sm text-muted-foreground">
            Видно деньги, точки роста и управляется выручка
          </p>
        </div>

        {/* 🔥 КАРТОЧКИ */}
        <div className="flex flex-col gap-4 mb-10">

          {/* CRM */}
          <div
            onClick={scrollToCRM}
            className="p-5 rounded-2xl bg-[#0f172a]/80 border border-green-500/20 backdrop-blur cursor-pointer active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Settings className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <div className="text-xs text-green-400 mb-1">Системы</div>
                <div className="text-lg font-bold">
                  amoCRM и управление
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Внедрение CRM, автоматизация и контроль продаж
            </p>

            <div className="text-green-400 font-semibold flex items-center gap-2">
              Внедрить CRM <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Telegram */}
          <div
            onClick={scrollToTelegram}
            className="p-5 rounded-2xl bg-[#0f172a]/80 border border-sky-500/20 backdrop-blur cursor-pointer active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-sky-400 mb-1">Трафик</div>
                <div className="text-lg font-bold">
                  Telegram-бот
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Поток клиентов из Telegram через готовые связки
            </p>

            <div className="text-sky-400 font-semibold flex items-center gap-2">
              Получить клиентов <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full h-14 text-base font-semibold rounded-xl"
          onClick={scrollToForm}
        >
          Получить разбор
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

      </div>
    </section>
  )
}
