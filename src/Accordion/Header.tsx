import React, { useContext } from 'react'
import { Text } from '../Text'
import { AccordionContext, AccordionContextType } from '../context/Accordion'

export type AccordionHeaderProps = {
  children?: JSX.Element | string,
  toggle?: (params?: any) =>  any
}

const Header = (props: AccordionHeaderProps) => {
  const { children, toggle } = props
  const  { show } = useContext<AccordionContextType>(AccordionContext)
  
  return (
    <button
      onClick={toggle}
      className='opanart-accordion-header flex-row-space-between-center'
    >
      {typeof children === 'string' 
        ? <Text text={children} device='desktop' type={show ? 'link' :'text'} size={show ? 'medium' :'small'}  />
        : children}
    </button>
  )
}

export default Header