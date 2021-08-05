import React from 'react'

import { Text } from '../Text'

export type TagProps = {
  text?: string,
  type?: 'primary' | 'warning' | 'success' | 'error'
}

const Tag = (props: TagProps) => {
  const { text, type='primary' } = props
  return (
    <div
      className={`openart-tag flex-column-center-center openart-tag-${type}`}
    >
      <Text type='link' text={text} size='small' device='desktop' />
    </div>
  )
}

export { Tag }