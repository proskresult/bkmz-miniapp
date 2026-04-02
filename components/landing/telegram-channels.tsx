import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, FileText } from "lucide-react"

const channels = [
  {
    icon: Users,
    title: "Канал про CRM",
    description: "Практические советы по настройке amoCRM, кейсы внедрения, разборы ошибок",
    subscribers: "2.5K+",
    link: "#"
  },
  {
    icon: FileText,
    title: "Канал про продажи",
    description: "Воронки, скрипты, автоматизация — всё для роста конверсии в продажах",
    subscribers: "3.8K+",
    link: "#"
  }
]

export function TelegramChannels() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Telegram-каналы
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Бесплатный контент и разборы
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((channel, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#229ED9]/10 flex items-center justify-center">
                    <channel.icon className="w-6 h-6 text-[#229ED9]" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {channel.subscribers} подписчиков
                  </span>
                </div>
                <h3 className="font-bold mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{channel.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full gap-2 border-[#229ED9]/30 text-[#229ED9] hover:bg-[#229ED9]/10 hover:text-[#229ED9]"
                  asChild
                >
                  <a href={channel.link} target="_blank" rel="noopener noreferrer">
                    Подписаться
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
