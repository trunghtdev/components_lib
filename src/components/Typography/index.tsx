import React, { memo } from 'react'

export type TypographyProps = {
  device?: 'mobile' | 'desktop',
  size?: 'large' | 'medium' | 'small',
  type?: 'regular' | 'bold',
  text?: string
}

const Typography = memo<TypographyProps>((props) => {
  const { type = 'regular', size = 'medium', device = 'desktop', text } = props
  return (
    <span
      className={`openart-typography-${type} openart-typography-${device}-${size}`}
    >
      {text}
    </span>
  )
})

export default Typography