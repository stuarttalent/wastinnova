import * as React from 'react'
import { cn } from '../../lib/cn'

export function Badge({
  className,
  tone = 'neutral',
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  tone?: 'neutral' | 'brand' | 'safety'
}) {
  const toneClassName =
    tone === 'brand'
      ? 'bg-brand-50 text-brand-800 ring-brand-100'
      : tone === 'safety'
        ? 'bg-safety-50 text-safety-900 ring-safety-100'
        : 'bg-slate-50 text-slate-700 ring-slate-200'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset',
        toneClassName,
        className,
      )}
      {...props}
    />
  )
}

