import React from 'react'

import { StepperItemProps, Item } from './Item'

export type StepperProps = {
  items?: StepperItemProps&{ id: string }[] 
}

const Stepper = (props: StepperProps) => {
  const { items = [] } = props

  return (
    <div
      className='openart-stepper flex-row-space-between-center'
    >
      {items.map(({id, ...item}, step) => (
        <Item
          key={id}
          step={step+1}
          isFinished={items.length === (step+1)}
          {...item}
        />
      ))}
    </div>
  )
}

export { Stepper }