import type * as React from 'react'
import { cn } from '../../lib/cn'
import { Container } from './Container'

export function Section({
  id,
  tone = 'default',
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string
  tone?: 'default' | 'muted'
  eyebrow?: React.ReactNode
  title?: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-16 sm:py-20',
        tone === 'muted' && 'surface-muted',
        className,
      )}
    >
      <Container>
        {title || subtitle || eyebrow ? (
          <div className="max-w-2xl">
            {eyebrow ? (
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {eyebrow}
              </div>
            ) : null}
            {title ? (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className={cn(title || subtitle || eyebrow ? 'mt-10' : '')}>
          {children}
        </div>
      </Container>
    </section>
  )
}

