import type { ReactNode } from "react"
import { TopNav } from "@/components/landing/top-nav"
import { StickyCta } from "@/components/landing/sticky-cta"

type PageShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-background pb-24">
      <TopNav />

      <section className="px-4 pt-10 pb-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl">{children}</div>
      </section>

      <StickyCta />
    </main>
  )
}
