import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 active:bg-brand-800',
  secondary:
    'bg-slate-900 text-white shadow-soft hover:bg-slate-800 active:bg-slate-950',
  outline:
    'bg-white text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 active:bg-slate-100',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200',
}

const sizeClassName: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export function buttonClassName({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(
    'inline-flex select-none items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50',
    variantClassName[variant],
    sizeClassName[size],
    className,
  )
}

