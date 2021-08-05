import React, { ReactNode, useCallback, useState } from 'react'
import Body from './Body'
import Header from './Header'
import { AccordionContext } from '../context/Accordion'

export type AccordionProps = {
  children?: ReactNode,
  disabled?: boolean
}

const Accordion = (props: AccordionProps) => {
  const [show, setShow] = useState<boolean>(false)
  const { children, disabled } = props
  
  const toggle = useCallback(() => {
    if (!disabled){
      setShow(p => !p)
    }
  }, [disabled])

  return (
    <AccordionContext.Provider
      value={{
        show,
        disabled
      }}
    >
      <div
        tabIndex={0}
        className={`opanart-accordion flex-column${disabled ? ' disabled' : ''}${show ? ' show' : ''}`}
      >
        {React.Children.map(children, (child: JSX.Element) => {
          if (child) {
            switch (child.type.displayName) {
              case 'Body':
                return React.cloneElement(child, {
                  show
                });
              case 'Header':
                return React.cloneElement(child, {
                  toggle
                });
              default:
                return React.cloneElement(child);
            }
          }
          return null
        })}
      </div>
    </AccordionContext.Provider>
  )
}

Accordion.Body = Body
Accordion.Header = Header

export { Accordion }