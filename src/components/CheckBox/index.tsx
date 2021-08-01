import React, { memo, useState } from 'react'

export type CheckBoxProps = {
  disabled?: boolean,
  initialValue?: boolean,
  type?: 'round' | 'default'
}

const CheckBox = memo<CheckBoxProps>((props) => {
  const { disabled, initialValue = false, type } = props
  const [checked, setChecked] = useState<boolean>(initialValue)
  const handleClick = () => {
    setChecked(p => !p)
  }
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`openart-checkbox openart-checkbox-${type}`}
    >
      <input
        disabled={disabled}
        checked={checked}
        className='openart-checkbox-input'
        type='checkbox'
      />
      <span 
        className='flex-column-center-center openart-checkbox-check' 
      />
    </button>
  )
})

export { CheckBox }