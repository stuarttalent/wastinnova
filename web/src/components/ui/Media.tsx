import type * as React from 'react'
import { cn } from '../../lib/cn'

export function Media({
  src,
  alt,
  className,
  priority = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'img'>, 'loading'> & {
  priority?: boolean
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      className={cn(
        'block w-full rounded-2xl object-cover ring-1 ring-inset ring-slate-200/80',
        className,
      )}
      {...props}
    />
  )
}

