import React from 'react'

export type BodyProps = {
  children?: JSX.Element | string
}

const Body = (props: BodyProps) => {
  const { children } = props
  return (
    <div
      className='opanart-accordion-body'
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