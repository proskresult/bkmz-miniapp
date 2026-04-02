"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StickyCta() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="max-w-md mx-auto">
        <Button 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={scrollToForm}
        >
          Получить разбор
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
