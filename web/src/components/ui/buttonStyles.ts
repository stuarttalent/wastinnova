import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),transparent_45%),linear-gradient(to_bottom,#0A7A3F,#006430)] text-white shadow-apple-sm hover:shadow-apple active:translate-y-[1px]',
  secondary:
    'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),transparent_55%),linear-gradient(to_bottom,#0F172A,#020617)] text-white shadow-apple-sm hover:shadow-apple active:translate-y-[1px]',
  outline:
    'surface text-slate-900 ring-1 ring-inset ring-slate-200/80 hover:bg-slate-50/70 active:bg-slate-100 active:translate-y-[1px]',
  ghost:
    'bg-transparent text-slate-900 hover:bg-slate-100/80 active:bg-slate-200/70',
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
    'inline-flex select-none items-center justify-center gap-2 rounded-full font-medium transition-[transform,box-shadow,background-color,color] duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    'disabled:pointer-events-none disabled:opacity-50',
    variantClassName[variant],
    sizeClassName[size],
    className,
  )
}

