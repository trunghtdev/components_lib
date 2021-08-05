import React, { useContext } from 'react'
import { AccordionContext, AccordionContextType } from '../context/Accordion'

export type BodyProps = {
  children?: JSX.Element | string
}

const Body = (props: BodyProps) => {
  const { children } = props
  const  { show } = useContext<AccordionContextType>(AccordionContext)
  return (
    <div
      className={`opanart-accordion-body${show ? ' show' : ''}`}
    >
      <div
        className='opanart-accordion-content'
      >
        {children}
      </div>
    </div>
  )
}

export default Body