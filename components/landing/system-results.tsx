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
      "Сделки не двигаются назад хаотично",
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
      "Автоматическое движение сделок по этапам",
      "Автоматизирован документооборот",
      "Есть шаблоны сообщений и писем",
    ],
  },
  {
    id: "control",
    title: "Контроль",
    subtitle: "как держится система целиком",
    icon: Shield,
    items: [
      "Есть описание бизнес-процессов компании",
      "Есть регламент работы менеджера",
      "Сформирована база знаний для сотрудников",
      "Есть общий и индивидуальный план продаж",
    ],
  },
]

export function SystemResults() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="system-results" className="px-4 py-14">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 text-center">
          <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Система, которую мы выстраиваем
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white">
            Как выглядит
            <br />
            настроенная система
          </h2>

          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Конкретные элементы, которые дают контроль, аналитику и рост
          </p>
        </div>

        <div className="mb-6 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-[#070b12] px-4 py-4">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Где теряются деньги</div>
                <div className="text-base text-muted-foreground">
                  Видны слабые места воронки
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#070b12] px-4 py-4">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Какие каналы дают рост</div>
                <div className="text-base text-muted-foreground">
                  Понятно, что приносит выручку
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#070b12] px-4 py-4">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Что влияет на результат</div>
                <div className="text-base text-muted-foreground">
                  Решения принимаются на цифрах
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#070b12] px-4 py-4">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <HeartHandshake className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Повторные продажи</div>
                <div className="text-base text-muted-foreground">
                  Есть система возврата клиентов
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-5 text-center">
          <div className="text-base text-muted-foreground">Это верхний уровень.</div>
          <div className="mt-1 text-xl font-semibold text-white">
            Ниже — из чего именно состоит эта система
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-white">
            Из чего состоит система
          </h3>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Базовая структура, которую мы внедряем или передаём
          </p>
        </div>

        <div className="space-y-4">
          {systemModules.map((module, index) => {
            const Icon = module.icon
            const isOpen = openIndex === index

            return (
              <div
                key={module.id}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/30 bg-white/[0.04] shadow-[0_0_0_1px_rgba(34,197,94,0.06)]"
                    : "border-white/10 bg-[#070b12]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
                        isOpen
                          ? "border-primary/25 bg-primary/12"
                          : "border-primary/15 bg-primary/8"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-2xl font-semibold leading-tight text-white">
                        {module.title}
                      </div>
                      <div className="text-base text-muted-foreground">
                        {isOpen ? "свернуть" : "раскрыть"}
                      </div>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-white" : "text-white/75"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/8 px-5 pb-5 pt-4">
                      <div className="mb-4 text-sm uppercase tracking-[0.12em] text-primary/80">
                        {module.subtitle}
                      </div>

                      <div className="space-y-3">
                        {module.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <div className="text-base leading-7 text-slate-200">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#lead-form"
            className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Получить разбор системы
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Покажу, какие блоки у вас уже есть, а где основные потери
          </p>
        </div>
      </div>
    </section>
  )
}
