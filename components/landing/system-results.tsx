"use client"

import { useState } from "react"
import {
  ChevronDown,
  Globe,
  HeartHandshake,
  Users,
  BarChart3,
  Zap,
  Shield,
  Check,
  TrendingDown,
  TrendingUp,
  Target,
  RefreshCcw,
} from "lucide-react"

const systemModules = [
  {
    id: "traffic",
    title: "Трафик и заявки",
    subtitle: "откуда приходят клиенты",
    icon: Globe,
    items: [
      "Подключён сайт",
      "Подключена телефония",
      "Подключена почта",
      "Подключены мессенджеры и соцсети",
      "Фиксируется источник каждой заявки",
    ],
  },
  {
    id: "clients",
    title: "Работа с клиентами",
    subtitle: "как устроена логика воронок",
    icon: HeartHandshake,
    items: [
      "Настроены роли и права доступа",
      "Есть воронка первичных продаж",
      "Есть воронка повторных продаж",
      "Есть воронка отказников",
      "Настроена структура карточек",
      "Настроены причины отказов",
    ],
  },
  {
    id: "managers",
    title: "Работа менеджеров",
    subtitle: "как команда работает в CRM",
    icon: Users,
    items: [
      "Вся работа ведётся только через CRM",
      "Нет сделок без задач",
      "Нет просроченных задач",
      "Сделки не двигаются хаотично",
      "Причины отказов корректны",
      "После каждого контакта есть комментарий",
      "Вся информация хранится в карточке сделки",
      "Статусы соответствуют процессу",
    ],
  },
  {
    id: "analytics",
    title: "Аналитика",
    subtitle: "что видно в цифрах",
    icon: BarChart3,
    items: [
      "Понимание загрузки менеджеров",
      "Настроены регулярные отчёты",
      "Есть дашборд",
      "Видна аналитика конверсий",
      "Видна аналитика отказов",
      "Понятна эффективность менеджеров",
      "Видна аналитика источников трафика",
    ],
  },
  {
    id: "automation",
    title: "Автоматизация",
    subtitle: "что работает без ручного контроля",
    icon: Zap,
    items: [
      "Автоматическая постановка задач",
      "Автоматическое движение сделок",
      "Автоматизирован документооборот",
      "Есть шаблоны сообщений и писем",
    ],
  },
  {
    id: "control",
    title: "Контроль",
    subtitle: "как держится система",
    icon: Shield,
    items: [
      "Есть описание бизнес-процессов",
      "Есть регламент работы",
      "Есть база знаний",
      "Есть план продаж",
    ],
  },
]

const topLevelItems = [
  {
    title: "Где теряются деньги",
    text: "Видны слабые места воронки",
    icon: TrendingDown,
  },
  {
    title: "Какие каналы дают рост",
    text: "Понятно, что приносит выручку",
    icon: TrendingUp,
  },
  {
    title: "Что влияет на результат",
    text: "Решения принимаются на цифрах",
    icon: Target,
  },
  {
    title: "Как вернуть клиентов",
    text: "Есть система возврата и повторных продаж",
    icon: RefreshCcw,
  },
]

export function SystemResults() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-xl">

        {/* 🔥 Заголовок */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Эффективная CRM ответит на вопросы:
          </h2>

          <p className="mt-3 text-base text-muted-foreground">
            Показывает, где теряются деньги и что реально влияет на рост
          </p>
        </div>

        {/* 🔹 Верхний блок */}
        <div className="mb-12 space-y-4">
          {topLevelItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#070b12] px-5 py-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <div className="text-xl font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 🔹 Состав системы */}
        <div className="mb-6 text-center">
          <h3 className="text-3xl font-bold text-white">
            Из чего состоит система
          </h3>
          <p className="mt-3 text-muted-foreground">
            Базовая структура, которую мы внедряем или передаём
          </p>
        </div>

        {/* 🔽 Аккордеон */}
        <div className="space-y-4">
          {systemModules.map((module, index) => {
            const Icon = module.icon
            const isOpen = openIndex === index

            return (
              <div
                key={module.id}
                className="rounded-3xl border border-white/10 bg-[#070b12]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="text-primary" />
                    </div>

                    <div className="text-left">
                      <div className="text-lg font-semibold text-white">
                        {module.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {isOpen ? "свернуть" : "раскрыть"}
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="mb-3 text-sm text-primary">
                      {module.subtitle}
                    </div>

                    <div className="space-y-2">
                      {module.items.map((item) => (
                        <div key={item} className="flex gap-2 text-sm text-white">
                          <Check className="h-4 w-4 text-primary mt-1" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 🔘 CTA */}
        <div className="mt-8 text-center">
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-black"
          >
            Получить разбор →
          </a>
        </div>

      </div>
    </section>
  )
}
