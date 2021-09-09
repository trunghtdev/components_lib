import React, { useRef, useEffect, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'

import { Text } from '../Text'

export type TooltipProps = {
  children: JSX.Element,
  text?: string,
  position?: 'right' | 'top' | 'left' | 'bottom'
}

export type Position = {
  offsetWidth: number;
  offsetTop: number;
  offsetLeft: number;
  offsetHeight: number;
}

export type Size = {
  clientWidth: number;
  clientHeight: number;
}

const Tooltip = (props: TooltipProps) => {
  const [show, setShow] = useState<boolean>(false)
  const refChildren = useRef<HTMLElement>(null)
  const refTooltip = useRef<HTMLDivElement>(null)
  const [] = useState<any>()
  const { children, text, position = 'top' } = props

  const handleMouseOver = () => {
    setShow(true)
  }

  const handleMouseOut = () => {
    setShow(false)
  }

  const Content = () => {
    return ReactDOM.createPortal(
      (
        <div
          ref={refTooltip}
          className='openart-tooltip'
        >
          <Text type='text' device='mobile' size='medium' text={text} />
        </div>
      ),
      document.getElementsByTagName('body')[0]
    )
  }


  useEffect(() => {
    if (refChildren.current && refTooltip.current) {
      const absHeight = (refTooltip.current.clientHeight - refChildren.current.clientHeight) / 2
      const midWidth = (refChildren.current.clientWidth - refTooltip.current.clientWidth) / 2
      
      let left = -1;

      let childrenOffsetHeight: number = 0
      let childrenOffsetWidth: number = 0
      let childrenOffsetTop: number = 0
      let childrenOffsetLeft: number = 0

      let elementChildren: any = refChildren.current
      do {
        childrenOffsetHeight += elementChildren.offsetHeight
        childrenOffsetWidth += elementChildren.offsetWidth
        childrenOffsetTop += elementChildren.offsetTop
        childrenOffsetLeft += elementChildren.offsetLeft
        if (elementChildren.nodeName === 'BODY') {
          break;
        }
      } while (elementChildren = elementChildren.offsetParent);

      switch (position) {
        case 'right':
          refTooltip.current.style.top = `${absHeight > 0 ? childrenOffsetTop - absHeight : childrenOffsetTop - absHeight}px`
          refTooltip.current.style.left = `${childrenOffsetWidth + childrenOffsetLeft}px`
          refTooltip.current.style.visibility = 'visible'
          break;
        case 'bottom':
          left = midWidth < 0 ? 2 : childrenOffsetLeft + midWidth
          refTooltip.current.style.top = `${childrenOffsetTop + refChildren.current.clientHeight}px`
          refTooltip.current.style.left = `${left}px`
          refTooltip.current.style.visibility = 'visible'
          break;
        case 'top':
          left = midWidth < 0 ? 2 : childrenOffsetLeft + midWidth
          refTooltip.current.style.top = `${childrenOffsetTop - refChildren.current.clientHeight}px`
          refTooltip.current.style.left = `${left}px`
          refTooltip.current.style.visibility = 'visible'
          break;
        case 'left': 
          refTooltip.current.style.top = `${absHeight > 0 ? childrenOffsetTop - absHeight : childrenOffsetTop - absHeight}px`
          refTooltip.current.style.left = `${childrenOffsetLeft - refTooltip.current.clientWidth}px`
          refTooltip.current.style.visibility = 'visible'
          break;
        default:
          break;
      }
    }
  })

  return (
    <>
      {<Content />}
      {React.cloneElement(children, { 
        ref: refChildren, 
        onMouseOver: handleMouseOver, onMouseOut: handleMouseOut 
        })}
    </>
  )
}

export { Tooltip }