import React, { useRef, useState } from 'react'

import { Text } from '../Text'

export type AccordionProps = {
  text?: string,
  children?: JSX.Element
}

const Accordion = (props: AccordionProps) => {
  const { text, children } = props
  const refContent = useRef<HTMLDivElement>(null)
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
        ref={refContent}
        className='opanart-accordion-content'
      >
        {children}
      </div>
    </div>
  )
}

export { Accordion }