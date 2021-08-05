import React, { useContext } from 'react'

import Forward from '../Icons/Forward'
import { Text } from '../Text'
import { AccordionContext, AccordionContextType } from '../context/Accordion'

export type AccordionHeaderProps = {
  children?: JSX.Element | string,
  toggle?: (params?: any) =>  any,
  visibleIcon?: boolean
}

const Header = (props: AccordionHeaderProps) => {
  const { children, toggle, visibleIcon = true } = props
  const  { show, disabled } = useContext<AccordionContextType>(AccordionContext)
  
  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className='opanart-accordion-header flex-row-space-between-center'
    >
      {typeof children === 'string' 
        ? <Text text={children} device='desktop' type={show ? 'link' :'text'} size={show ? 'medium' :'small'}  />
        : children}
      {visibleIcon && (<Forward className='opanart-accordion-icon' />)}
    </button>
  )
}

export default Header