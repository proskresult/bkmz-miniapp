"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/amocrm", label: "amoCRM" },
  { href: "/telegram-bot", label: "Telegram-бот" },
  { href: "/useful", label: "Польза" },
  { href: "/consultation", label: "Консультация" },
]

export function TopNav() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-black"
                    : "border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
