import React from 'react'

import { Text } from '../Text'
import PlusIcon from '../Icons/Plus'
import MinusIcon from '../Icons/Minus'

export type StepperV2Props = {
  disabled?: boolean
}

const StepperV2 = (props: StepperV2Props) => {
  const { disabled = false } = props
  return (
    <div
      tabIndex={0}
      className='openart-stepperv2 flex-row-space-between-center'
    >
      <button
        disabled={disabled}
        className='openart-stepperv2-minus flex-column-center-center'
      >
        <MinusIcon />
      </button>
      <Text className={`openart-stepperv2-step${disabled ? ' disabled' : ''}`} type='link' size='medium' device='desktop' text={1} />
      <button
        disabled={disabled}
        className='openart-stepperv2-plus flex-column-center-center'
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export { StepperV2 }