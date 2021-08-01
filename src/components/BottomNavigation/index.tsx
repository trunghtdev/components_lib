import React, { memo, useState } from 'react'

import { Text } from '../Text'

export type BottomNavigationItemProps = {
  text?: string,
  icon?: string | JSX.Element,
  id: string
}

export type BottomNavigationProps = {
  items?: BottomNavigationItemProps[],
  initialValue?: string,
}


const BottomNavigation = memo<BottomNavigationProps>((props) => {
  const { items = [], initialValue = "" } = props
  const [selectedItem, setSelectedItem] = useState<string>(initialValue)
  const Icon = ({ icon }: { icon: string | JSX.Element }) => {
    if (typeof icon === 'string') {
      return (
        <img
          src={icon}
          alt='...'
        />
      )
    } else {
      return (icon)
    }
  }

  const handleClick = (id: string) => {
    setSelectedItem(id)
  }

  return (
    <ul
      className='openart-bottom-navigation flex-row-center-center'
    >
      {items.map(item => {
        return (
          <li
            onClick={() => handleClick(item.id)}
            key={item.id}
            className={
              `openart-bottom-navigation-item flex-column-center-center${item.id === selectedItem ? ' openart-bottom-navigation-item-selected' : ''}`
            }
          >
            <Icon icon={item.icon || ""} />
            <Text type='link' device='mobile' size='small' text={item.text} />
          </li>
        )
      })}
    </ul>
  )
})

export { BottomNavigation } 