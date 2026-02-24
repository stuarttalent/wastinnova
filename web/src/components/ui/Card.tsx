import type * as React from 'react'
import { cn } from '../../lib/cn'

export function Card({
  className,
  tone = 'surface',
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  tone?: 'surface' | 'muted'
}) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200/80 p-6 shadow-apple-sm transition will-change-transform',
        'hover:-translate-y-0.5 hover:shadow-apple',
        tone === 'surface' ? 'surface' : 'surface-muted',
        className,
      )}
      {...props}
    />
  )
}

