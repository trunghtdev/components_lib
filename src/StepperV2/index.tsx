import React, { useState } from 'react'

import { Text } from '../Text'
import PlusIcon from '../Icons/Plus'
import MinusIcon from '../Icons/Minus'

export type StepperV2Props = {
  disabled?: boolean;
  onChange?: (value?: number) => any
}

const StepperV2 = (props: StepperV2Props) => {
  const [value, setValue] = useState<number>(1)
  const { disabled = false, onChange } = props
  const handleClick = (increse = true) => {
    if (increse) {
      setValue(p => {
        if (onChange) {
          onChange(p + 1)
        }
        return p + 1
      })
    } else {
      setValue(p => {
        let res = p
        if (p > 1) {
          res = p - 1
        }
        if (onChange) {
          onChange(res)
        }
        return res
      })
    }
  }
  return (
    <div
      tabIndex={0}
      className='openart-stepperv2 flex-row-space-between-center'
    >
      <button
        disabled={disabled}
        onClick={() => handleClick(false)}
        className='openart-stepperv2-minus flex-column-center-center'
      >
        <MinusIcon />
      </button>
      <Text className={`openart-stepperv2-step${disabled ? ' disabled' : ''}`} type='link' size='medium' device='desktop' text={value} />
      <button
        disabled={disabled}
        onClick={() => handleClick()}
        className='openart-stepperv2-plus flex-column-center-center'
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export { StepperV2 }