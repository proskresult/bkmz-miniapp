import { Card, CardContent } from "@/components/ui/card"
import { X, Check } from "lucide-react"

const comparison = {
  before: [
    "Заявки теряются в переписках",
    "Менеджеры забывают перезвонить",
    "Не знаете откуда клиенты",
    "Клиенты покупают 1 раз",
    "Хаос и ручное управление"
  ],
  after: [
    "Все заявки в одном месте",
    "Автоматические напоминания",
    "Полная аналитика по каналам",
    "Система повторных продаж",
    "Прозрачность и контроль"
  ]
}

export function BeforeAfter() {
  return (
    <section className="px-4 py-16 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          До и после внедрения
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Как изменится ваш бизнес
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-card border-destructive/20">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="font-bold text-destructive">До</h3>
              </div>
              <ul className="space-y-3">
                {comparison.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-primary">После</h3>
              </div>
              <ul className="space-y-3">
                {comparison.after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
