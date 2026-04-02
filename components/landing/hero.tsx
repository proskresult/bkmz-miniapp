"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Settings, MessageCircle } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToCRM = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTelegram = () => {
    document.getElementById("telegram-channels")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col px-4 py-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
      
      <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col flex-1">
        {/* Top section with photo and text */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          {/* Photo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10" />
            <Image
              src="/images/ilya-photo.jpg"
              alt="Илья Проскуряков"
              fill
              className="object-cover rounded-2xl brightness-90"
              priority
            />
          </div>
          
          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Илья Проскуряков
            </h1>
            
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-3 text-balance">
              Системы управления бизнесом и рост через CRM и Telegram
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty max-w-lg">
              Помогаю выстроить систему, в которой видно деньги, точки роста и управляется выручка
            </p>
          </div>
        </div>
        
        {/* Two main direction cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: amoCRM */}
          <div 
            className="group relative cursor-pointer"
            onClick={scrollToCRM}
          >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Card className="relative h-full border-border/50 bg-gradient-to-b from-secondary/80 to-secondary/40 backdrop-blur-sm overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
              
              <CardContent className="relative p-7">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-primary">Системы</span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Settings className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  amoCRM и системный бизнес
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Настройка и внедрение amoCRM. Автоматизация процессов, контроль продаж и прозрачная система управления.
                </p>
                
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Внедрить CRM</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Card 2: Telegram */}
          <div 
            className="group relative cursor-pointer"
            onClick={scrollToTelegram}
          >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-sky-500/20 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Card className="relative h-full border-border/50 bg-gradient-to-b from-secondary/80 to-secondary/40 backdrop-blur-sm overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.08),transparent_50%)]" />
              
              <CardContent className="relative p-7">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-xs font-medium text-sky-400">Трафик</span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-500/5 border border-sky-500/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-sky-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  Telegram-бот для привлечения
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Мой инструмент для получения заявок из Telegram. Связки, которые дают поток клиентов.
                </p>
                
                <div className="flex items-center gap-2 text-sky-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Получить клиентов</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Secondary CTA */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Не уверены, что нужно? Получите бесплатную консультацию
          </p>
          <Button 
            size="lg" 
            className="h-14 px-8 text-base font-semibold rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={scrollToForm}
          >
            Получить разбор
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
