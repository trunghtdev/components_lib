import React, { useState } from 'react'

import StarIcon from '../Icons/Star'

export type RatingProps = {
  count?: number
}

const Rating = (props: RatingProps) => {
  const [selected, setSelected] = useState<number>(-1)
  const [currentHover, setCurrentHover] = useState<number>(-1)
  const { count = 1 } = props
  
  const handleMouseOver = (index: number) => {
    setCurrentHover(index)
  }

  const handleMouseOut = () => {
    setCurrentHover(-1)
  }

  const handleClick = (index: number) => {
    setSelected(index)
  }

  return (
    <div
      className='openart-rating'
    >
      {Array(count).fill(null).map((_, index) => {
        return (
          <StarIcon
            onClick={() => handleClick(index)}
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleMouseOver(index)} 
            className={`'openart-rating-star'${index <= currentHover || index <= selected ? ' hover' : ''}`}
          />
        )
      })}
    </div>
  )
}

export { Rating }