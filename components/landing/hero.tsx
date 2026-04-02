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
    <section className="min-h-screen px-4 pt-6 pb-10 flex flex-col">

      <div className="max-w-xl mx-auto w-full">

        {/* 🔥 БОЛЬШОЕ ФОТО */}
        <div className="relative w-full h-[42vh] mb-6 rounded-3xl overflow-hidden">
          <Image
            src="/images/ilya-photo.jpg"
            alt="Илья Проскуряков"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* ТЕКСТ */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">
            Илья Проскуряков
          </h1>

          <h2 className="text-lg font-semibold text-primary mb-3 leading-snug">
            Системы управления бизнесом  
            и рост через CRM и Telegram
          </h2>

          <p className="text-sm text-muted-foreground">
            Видно деньги, точки роста и управляется выручка
          </p>
        </div>

        {/* 🔥 КАРТОЧКИ */}
        <div className="flex flex-col gap-4 mb-8">

          {/* CRM */}
          <div
            onClick={scrollToCRM}
            className="p-5 rounded-2xl bg-[#0f172a] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.08)] cursor-pointer active:scale-[0.98] transition"
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
              Внедрение CRM, автоматизация процессов и контроль продаж
            </p>

            <div className="text-green-400 font-semibold flex items-center gap-2">
              Внедрить CRM <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Telegram */}
          <div
            onClick={scrollToTelegram}
            className="p-5 rounded-2xl bg-[#0f172a] border border-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.08)] cursor-pointer active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-sky-400" />
              </div>

              <div>
                <div className="text-xs text-sky-400 mb-1">Трафик</div>
                <div className="text-lg font-bold">
                  Telegram-бот для заявок
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Поток клиентов из Telegram через рабочие связки
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
