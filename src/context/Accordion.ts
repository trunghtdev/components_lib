import { createContext } from 'react'

export type AccordionContextType = {
  show?: boolean
}

export const AccordionContext = createContext<AccordionContextType>({
  show: false
})