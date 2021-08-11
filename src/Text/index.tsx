import React from 'react'

export type TextProps = {
  text?: string | number,
  className?: string,
  device?: 'mobile' | 'desktop',
  type?: 'link' | 'text'
  size?: 'large' | 'medium' | 'small' | 'x-small'
}

const Text = (props: TextProps) => {
  const { text, device = 'desktop', size = 'small', type = 'text', className } = props
  return (
    <span
      className={`openart-${type}-${device}-${size}${className ? ` ${className}` : ""}`}
    >
      {text}
    </span>
  )
}

export { Text }