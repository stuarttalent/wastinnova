import * as React from 'react'
import { cn } from '../../lib/cn'

export function Media({
  src,
  alt,
  className,
  priority = false,
  fallbackSrc = '/favicon.svg',
  ...props
}: Omit<React.ComponentPropsWithoutRef<'img'>, 'loading'> & {
  priority?: boolean
  fallbackSrc?: string
}) {
  const [currentSrc, setCurrentSrc] = React.useState(src)

  React.useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc)
      }}
      className={cn(
        'block w-full rounded-2xl object-cover ring-1 ring-inset ring-slate-200/80',
        className,
      )}
      {...props}
    />
  )
}

