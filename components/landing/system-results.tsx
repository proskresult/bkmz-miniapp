"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, ChevronDown, Shield, BarChart3, Zap, Users, Globe, HeartHandshake } from "lucide-react"
import { cn } from "@/lib/utils"

const systemBlocks = [
  {
    icon: Shield,
    title: "Контроль",
    items: [
      "Описание бизнес-процессов компании",
      "Регламент работы менеджера",
      "База знаний для сотрудников",
      "Общий и индивидуальный план продаж"
    ]
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    items: [
      "Понимание загрузки менеджеров",
      "Регулярные отчёты",
      "Дашборд с ключевыми метриками",
      "Аналитика конверсий и отказов",
      "Эффективность менеджеров",
      "Аналитика источников трафика"
    ]
  },
  {
    icon: Zap,
    title: "Автоматизация",
    items: [
      "Автоматическая постановка задач",
      "Движение сделок по этапам",
      "Автоматизация документооборота",
      "Шаблоны сообщений и писем"
    ]
  },
  {
    icon: Users,
    title: "Работа менеджеров",
    items: [
      "Вся работа через CRM",
      "Нет сделок без задач",
      "Нет просроченных задач",
      "Корректные причины отказов",
      "Комментарии после контактов",
      "Информация в карточке сделки"
    ]
  },
  {
    icon: Globe,
    title: "Трафик и заявки",
    items: [
      "Подключён сайт и телефония",
      "Подключена почта",
      "Мессенджеры и соцсети",
      "Фиксация источника заявки"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Работа с клиентами",
    items: [
      "Роли и права доступа",
      "Воронка первичных продаж",
      "Воронка повторных продаж",
      "Воронка отказников",
      "Структура карточек"
    ]
  }
]

export function SystemResults() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="system-results" className="px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-balance">
          Из чего состоит система
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Базовая структура, которую мы внедряем или передаём
        </p>

        {/* Accordion */}
        <div className="space-y-2">
          {systemBlocks.map((block, index) => (
            <div 
              key={index}
              className="rounded-xl border border-border/50 bg-secondary/30 overflow-hidden"
            >
              {/* Accordion header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <block.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{block.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {openIndex === index ? "свернуть" : "раскрыть"}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>

              {/* Accordion content */}
              <div 
                className={cn(
                  "grid transition-all duration-200 ease-out",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <ul className="px-4 pb-4 pt-1 space-y-2">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button 
            size="lg"
            className="h-12 px-6 text-sm font-semibold rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={scrollToForm}
          >
            Получить разбор системы
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Покажу, какие блоки у вас уже есть, а где основные потери
          </p>
        </div>
      </div>
    </section>
  )
}
