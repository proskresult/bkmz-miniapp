import { Card, CardContent } from "@/components/ui/card"
import { Wrench, GraduationCap, Check } from "lucide-react"

const formats = [
  {
    icon: Wrench,
    title: "Под ключ",
    subtitle: "Делаю за вас",
    description: "Полностью выстраиваю систему продаж: от аудита до внедрения и обучения команды",
    features: [
      "Аудит текущей ситуации",
      "Разработка воронки продаж",
      "Настройка amoCRM",
      "Интеграции и автоматизация",
      "Обучение команды"
    ]
  },
  {
    icon: GraduationCap,
    title: "Модель + Обучение",
    subtitle: "Учу делать самим",
    description: "Даю готовую модель и обучаю вашу команду внедрять систему самостоятельно",
    features: [
      "Готовые шаблоны воронок",
      "Пошаговые инструкции",
      "Групповое обучение",
      "Чат поддержки",
      "Разборы внедрения"
    ]
  }
]

export function WorkFormats() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Форматы работы
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Выберите подходящий вариант
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {formats.map((format, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/30 transition-colors overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="p-5 border-b border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <format.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-primary font-medium mb-1">{format.subtitle}</p>
                  <h3 className="text-lg font-bold mb-2">{format.title}</h3>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                </div>
                <div className="p-5 bg-secondary/30">
                  <ul className="space-y-2.5">
                    {format.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2.5 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
