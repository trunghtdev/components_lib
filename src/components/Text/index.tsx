import React, { memo } from 'react'

export type TextProps = {
  text?: string,
  device?: 'mobile' | 'desktop',
  type?: 'link' | 'text'
  size?: 'large' | 'medium' | 'small' | 'x-small'
}

const Text = memo<TextProps>((props) => {
  const { text, device = 'desktop', size = 'small', type = 'text' } = props
  return (
    <span
      className={`openart-${type}-${device}-${size}`}
    >
      {text}
    </span>
  )
})

export { Text }