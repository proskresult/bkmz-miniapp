import { TrendingDown, TrendingUp, Target, RefreshCw } from "lucide-react"

const items = [
  {
    icon: TrendingDown,
    title: "Где теряются деньги",
    description: "Видны слабые места воронки"
  },
  {
    icon: TrendingUp,
    title: "Какие каналы дают рост",
    description: "Понятно, что приносит выручку"
  },
  {
    icon: Target,
    title: "Что влияет на результат",
    description: "Решения принимаются на цифрах"
  },
  {
    icon: RefreshCw,
    title: "Повторные продажи",
    description: "Есть система возврата клиентов"
  }
]

export function Problems() {
  return (
    <section id="problems" className="px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-balance">
          Как выглядит настроенная система
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Конкретные элементы, которые дают контроль, аналитику и рост
        </p>
        
        {/* Compact horizontal cards */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/40 border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition block */}
        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            Это верхний уровень.
          </p>
          <p className="text-sm text-foreground font-medium mt-1">
            Ниже — из чего именно состоит эта система
          </p>
        </div>
      </div>
    </section>
  )
}
