import * as React from 'react'
import { cn } from '../lib/cn'

export function LogoMark({
  className,
  title = 'WASTiNNOVA Africa',
}: {
  className?: string
  title?: string
}) {
  const titleId = React.useId()

  return (
    <svg
      role="img"
      aria-labelledby={titleId}
      viewBox="0 0 64 64"
      className={cn('h-9 w-9', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>

      <circle cx="32" cy="32" r="30" fill="#006430" opacity="0.06" />

      <g fill="#006430" opacity="0.9">
        {[
          [20, 20],
          [32, 18],
          [44, 20],
          [18, 32],
          [30, 30],
          [42, 32],
          [20, 44],
          [32, 46],
          [44, 44],
          [26, 24],
          [38, 24],
          [24, 38],
          [40, 38],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.1" />
        ))}
      </g>

      <g fill="#006430" opacity="0.55">
        <circle cx="48.5" cy="28" r="2.2" />
        <circle cx="24.5" cy="40" r="2.2" />
      </g>

      <circle cx="32" cy="32" r="30" stroke="#006430" opacity="0.18" />
    </svg>
  )
}

