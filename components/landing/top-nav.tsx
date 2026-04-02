"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/amocrm", label: "amoCRM" },
  { href: "/telegram-bot", label: "Telegram-бот" },
  { href: "/useful", label: "Польза" },
  { href: "/consultation", label: "Консультация" },
]

export function TopNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [open])

  const currentLabel =
    navItems.find((item) => item.href === pathname)?.label || "Меню"

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">Навигация</div>
            <div className="truncate text-sm font-semibold text-white">
              {currentLabel}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
            Меню
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          />

          <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-2xl border-b border-white/10 bg-[#05070b] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div>
                <div className="text-xs text-muted-foreground">Меню</div>
                <div className="text-lg font-semibold text-white">
                  Илья Проскуряков
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]"
                aria-label="Закрыть меню"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-4 py-4">
              <div className="space-y-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex min-h-16 items-center justify-between rounded-3xl border px-5 py-4 transition ${
                        isActive
                          ? "border-primary/30 bg-primary/10 text-white"
                          : "border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <div>
                        <div className="text-base font-semibold">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {isActive ? "Текущий раздел" : "Перейти"}
                        </div>
                      </div>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          isActive ? "bg-primary/15" : "bg-white/[0.04]"
                        }`}
                      >
                        <ChevronRight
                          className={`h-5 w-5 ${
                            isActive ? "text-primary" : "text-white/70"
                          }`}
                        />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
