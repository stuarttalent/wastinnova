import * as React from 'react'
import type { ButtonSize, ButtonVariant } from './buttonStyles'
import { buttonClassName } from './buttonStyles'

export function Button({
  variant,
  size,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
}) {
  return (
    <button
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  )
}

