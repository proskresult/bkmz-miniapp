import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Settings, PieChart, Eye, RefreshCcw, Send } from "lucide-react"

const services = [
  {
    icon: GitBranch,
    title: "Воронка продаж",
    description: "Выстраиваю путь клиента от первого касания до оплаты"
  },
  {
    icon: Settings,
    title: "Настройка amoCRM",
    description: "Внедряю CRM под ваш бизнес с интеграциями и автоматизацией"
  },
  {
    icon: PieChart,
    title: "Аналитика",
    description: "Настраиваю сквозную аналитику: знаете ROI каждого канала"
  },
  {
    icon: Eye,
    title: "Контроль менеджеров",
    description: "Система контроля: видите кто работает, а кто нет"
  },
  {
    icon: RefreshCcw,
    title: "Повторные продажи",
    description: "Автоматические касания для возврата клиентов"
  },
  {
    icon: Send,
    title: "Трафик из Telegram",
    description: "Настраиваю поток заявок из Telegram-каналов"
  }
]

export function Services() {
  return (
    <section className="px-4 py-16 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Что я делаю
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Комплексные решения для роста продаж
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card transition-all"
            >
              <CardContent className="p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
