"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, Shield } from "lucide-react"

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Заявка отправлена!</h3>
              <p className="text-muted-foreground">
                Я свяжусь с вами в Telegram в течение 24 часов для проведения бесплатного разбора
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="px-4 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Получить разбор вашей ситуации
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Заполните форму — и я подготовлю персональные рекомендации
        </p>
        
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Имя"
                  required
                  className="h-12 bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  placeholder="Telegram / телефон"
                  required
                  className="h-12 bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  placeholder="Ниша / бизнес"
                  required
                  className="h-12 bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Комментарий (необязательно)"
                  className="min-h-[100px] bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Отправка..."
                ) : (
                  <>
                    Отправить заявку
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              <span>Данные защищены и не передаются третьим лицам</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
