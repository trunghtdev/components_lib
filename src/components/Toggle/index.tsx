import React, { useState } from 'react'

export type ToggleProps = {
  disabled?: boolean,
  initialValue?: boolean,
  onChange?: (params?: boolean) => any
}

const Toggle = (props: ToggleProps) => {
  const { initialValue = false, disabled, onChange } = props
  const [active, setActive] = useState<boolean>(initialValue)
  const handleChange = () => {
    setActive(p => {
      if (onChange) {
        onChange(!p)
      }
      return !p
    })
  }
  return (
    <button
      disabled={disabled}
      onClick={handleChange}
      className='openart-toggle'
    >
      <input
        checked={active}
        type='checkbox'
        className='openart-toggle-input'
      />
      <span className='openart-toggle-switch' />
    </button>
  )
}

export { Toggle }