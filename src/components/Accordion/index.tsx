import React, { memo, useState } from 'react'

import { Text } from '../Text'

export type AccordionProps = {
  text?: string,
  content?: JSX.Element
}

const Accordion = memo<AccordionProps>((props) => {
  const { text } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () => {
    setIsOpen(p => !p)
  }

  return (
    <div
      className='opanart-accordion'
    >
      <button
        onClick={handleClick}
        className='opanart-accordion-title flex-row-center-space-between'
      >
        <Text text={text} type={isOpen ? 'link' : 'text'} size={isOpen ? 'medium' : 'small'} device='desktop' />
      </button>
      <div
        className='opanart-accordion-content'
      >
        
      </div>
    </div>
  )
})

export { Accordion }