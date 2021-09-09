import React from 'react';

import { Text } from '../Text'

export type TokenProps = {
  text?: string;
  state?: 'disabled'  | 'activated'
}

const Token = (props: TokenProps) => {
  const { text = '', state } = props

  return (
    <div
      className={`openart-token flex-column-center-center${state  ? ` ${state}` : ''}`}
    >
      <Text device='mobile' type='text' size='medium' text={text} />
    </div>
  )
}

export { Token }