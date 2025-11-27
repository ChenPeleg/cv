import React from 'react'
import spriteUrl from '../../../assets/skins/outline.svg?url'
import type { IconProps } from './generated'

export const AppIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> &
    IconProps & {
      alt?: string
    }
>(({ name, className, alt, ...props }, ref) => {
  return (
    <svg
      {...props}
      id={`icon-svg-${name}`}
      className={ ' flex-shrink-0' +  className || 'h-6 w-6'}
      ref={ref}
    >
      <title>{alt || name}</title>
      <use xlinkHref={`${spriteUrl}#${name}`} />
    </svg>
  )
})
