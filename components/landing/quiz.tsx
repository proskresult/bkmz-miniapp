"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

const questions = [
  {
    question: "Есть ли у вас CRM?",
    options: [
      "Да, используем активно",
      "Да, но работает плохо",
      "Нет, ведём в Excel/блокноте",
      "Пробовали, не зашло"
    ]
  },
  {
    question: "Что сейчас мешает больше всего?",
    options: [
      "Теряются заявки и лиды",
      "Нет контроля над менеджерами",
      "Непонятно, какой канал окупается",
      "Хаос в продажах",
      "Нет повторных продаж"
    ]
  },
  {
    question: "Используете Telegram для привлечения клиентов?",
    options: [
      "Да, активно",
      "Пробовали, но не зашло",
      "Нет, но хотим",
      "Нет и не планируем"
    ]
  },
  {
    question: "Что вам сейчас важнее?",
    options: [
      "Навести порядок в продажах",
      "Увеличить конверсию",
      "Запустить повторные продажи",
      "Выстроить систему с нуля",
      "Масштабировать бизнес"
    ]
  }
]

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = answer
    setAnswers(newAnswers)
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsCompleted(true)
      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isCompleted) {
    return (
      <section className="px-4 py-16 bg-secondary/30">
        <div className="max-w-md mx-auto">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Отлично!</h3>
              <p className="text-muted-foreground">
                Теперь заполните форму ниже, и я подготовлю персональный разбор для вашего бизнеса
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 bg-secondary/30">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Быстрая диагностика
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          4 вопроса — и я пойму, чем могу помочь
        </p>
        
        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {questions.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                index <= currentStep ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>
        
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <p className="text-xs text-muted-foreground mb-2">
              Вопрос {currentStep + 1} из {questions.length}
            </p>
            <h3 className="text-lg font-semibold mb-6">
              {questions[currentStep].question}
            </h3>
            
            <div className="space-y-3 mb-6">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-xl text-left text-sm transition-all border ${
                    answers[currentStep] === option
                      ? "bg-primary/10 border-primary text-foreground"
                      : "bg-secondary/50 border-transparent hover:bg-secondary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <div className="flex gap-3">
              {currentStep > 0 && (
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Назад
                </Button>
              )}
              <Button 
                className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={nextStep}
                disabled={!answers[currentStep]}
              >
                {currentStep === questions.length - 1 ? "Завершить" : "Далее"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
