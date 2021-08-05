import React, { ReactNode, useCallback, useRef, useState } from 'react'
import Body from './Body'
import Header from './Header'
import { AccordionContext } from '../context/Accordion'

export type AccordionProps = {
  children?: ReactNode
}

const Accordion = (props: any) => {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false)
  const { children } = props
  
  const toggle = useCallback(() => {
    ref.current?.focus()
    setShow(p => !p)
  }, [])

  return (
    <AccordionContext.Provider
      value={{
        show
      }}
    >
      <div
        ref={ref}
        tabIndex={0}
        className='opanart-accordion flex-column'
      >
        {React.Children.map(children, (child) => {
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