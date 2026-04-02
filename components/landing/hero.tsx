"use client"

import Link from "next/link"
import { Settings, MessageCircle, BookOpen, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="px-4 pt-6 pb-10">
      <div className="mx-auto max-w-2xl text-center">
        {/* Фото */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/hero.jpg"
            alt="Илья Проскуряков"
            className="w-full object-cover"
          />
        </div>

        {/* Текст */}
        <h1 className="mt-6 text-2xl font-bold text-white md:text-3xl">
          Илья Проскуряков
        </h1>

        <p className="mt-2 text-base font-medium text-green-500">
          Системы управления бизнесом и рост через CRM и Telegram
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Видно деньги, точки роста и управляется выручка
        </p>

        {/* Карточки */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          
          {/* CRM */}
          <Link href="/amocrm">
            <div className="rounded-2xl border border-white/10 bg-[#0B1730] p-4 text-left transition hover:scale-[1.02] hover:border-green-500/40">
              <div className="mb-3 inline-flex rounded-xl bg-green-500/10 p-2">
                <Settings className="h-5 w-5 text-green-400" />
              </div>
              <p className="text-xs text-green-400">Системы</p>
              <p className="mt-1 font-semibold text-white">amoCRM</p>
              <p className="mt-1 text-xs text-muted-foreground">
                CRM, автоматизация и контроль продаж
              </p>
              <p className="mt-2 text-sm text-green-400">Внедрить →</p>
            </div>
          </Link>

          {/* Telegram */}
          <Link href="/telegram-bot">
            <div className="rounded-2xl border border-white/10 bg-[#0B1730] p-4 text-left transition hover:scale-[1.02] hover:border-blue-500/40">
              <div className="mb-3 inline-flex rounded-xl bg-blue-500/10 p-2">
                <MessageCircle className="h-5 w-5 text-blue-400" />
              </div>
              <p className="text-xs text-blue-400">Трафик</p>
              <p className="mt-1 font-semibold text-white">Telegram-бот</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Клиенты из Telegram через рабочие связки
              </p>
              <p className="mt-2 text-sm text-blue-400">Получить →</p>
            </div>
          </Link>

          {/* Материалы */}
          <Link href="/useful">
            <div className="rounded-2xl border border-white/10 bg-[#0B1730] p-4 text-left transition hover:scale-[1.02] hover:border-yellow-500/40">
              <div className="mb-3 inline-flex rounded-xl bg-yellow-500/10 p-2">
                <BookOpen className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-xs text-yellow-400">Польза</p>
              <p className="mt-1 font-semibold text-white">Материалы</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Разборы, фишки и практические материалы
              </p>
              <p className="mt-2 text-sm text-yellow-400">Открыть →</p>
            </div>
          </Link>

          {/* Консультация */}
          <Link href="/consultation">
            <div className="rounded-2xl border border-white/10 bg-[#0B1730] p-4 text-left transition hover:scale-[1.02] hover:border-purple-500/40">
              <div className="mb-3 inline-flex rounded-xl bg-purple-500/10 p-2">
                <Calendar className="h-5 w-5 text-purple-400" />
              </div>
              <p className="text-xs text-purple-400">Консультация</p>
              <p className="mt-1 font-semibold text-white">Записаться</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Разберём задачу и найдём решение
              </p>
              <p className="mt-2 text-sm text-purple-400">Выбрать →</p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <a
          href="/consultation"
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-black"
        >
          Получить разбор →
        </a>
      </div>
    </section>
  )
}
