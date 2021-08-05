import { createContext } from 'react'

export type AccordionContextType = {
  show?: boolean,
  disabled?: boolean
}

export const AccordionContext = createContext<AccordionContextType>({
  show: false
})