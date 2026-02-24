import type * as React from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

export function PageHeader({
  badge,
  title,
  subtitle,
  actions,
  className,
}: {
  badge?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}) {
  return (
    <header className={cn('border-b border-slate-200/70', className)}>
      <div className="surface-muted">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              {badge ? <div className="animate-fade-in">{badge}</div> : null}
              <h1 className="animate-fade-up text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="animate-fade-up text-base leading-relaxed text-slate-600 [animation-delay:60ms]">
                  {subtitle}
                </p>
              ) : null}
            </div>

            {actions ? (
              <div className="animate-fade-in flex flex-col gap-3 sm:flex-row lg:justify-end">
                {actions}
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    </header>
  )
}

