import React from 'react'

import { Text } from '../Text'

export type StepperItemProps = {
  step: number;
  name?: string;
  icon?: JSX.Element;
  isFinished?: boolean
}

const Item = (props: StepperItemProps) => {
  const { name = "", icon = null, step, isFinished = false } = props
  return (
    <div
      className={`openart-stepper-item${isFinished ? ' finished' : ''}`}
    >
      <div
        className="openart-stepper-icon flex-row-left-center"
      >
        {icon ? icon : (
          <Text
            device='mobile'
            size='small'
            type='link'
            className="openart-stepper-icon-default flex-column-center-center"
            text={step}
          />
        )}
        {!isFinished && (<div className='openart-stepper-line' />)}
      </div>
      <span
        className="openart-stepper-name"
      >
        {name}
      </span>
    </div>
  )
}

export { Item }