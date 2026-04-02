"use client"

import { CheckCircle2 } from "lucide-react"

const situations = [
  "CRM есть, но в ней никто нормально не работает",
  "Лиды приходят, но часть теряется",
  "Нет прозрачности по воронке",
  "Неясно, какой канал реально окупается",
  "Бизнес вырос, а система управления не выросла вместе с ним",
  "Нужен Telegram как источник заявок"
]

export function TypicalSituations() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-balance">
          Узнаёте себя?
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Типичные ситуации, с которыми приходят клиенты
        </p>
        
        <div className="space-y-4">
          {situations.map((situation, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground">{situation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
