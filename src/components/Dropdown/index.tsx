import React, { useState } from 'react'
import ArrowDownIcon from '../../icons/ArrowDown'

import { Text } from '../Text'

export type DropdownProps = {
  renderItem: (item?: any) => JSX.Element,
  dataSource?: {}[],
  disabled?: boolean,
  prefix: string,
  prefixKey: string
}

const Dropdown = (props: DropdownProps) => {
  const { dataSource = [], renderItem, prefix, prefixKey, disabled } = props
  const [selectedItem, setSelectedItem] =useState<any>(
    dataSource.length > 0 ? dataSource[0] : {}
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const handleClickItem = (item: any) => {
    setSelectedItem(item)
    toggle()
  }
  const toggle = () => {
    setIsOpen(p => !p)
  }

  return (
    <div
      className='openart-dropdown'
    >
      <button
        disabled={disabled}
        onClick={toggle}
        className='openart-dropdown-btn flex-row-center-space-between'
        type='button'
      >
        <Text text={selectedItem[prefix]} size='medium' />
        <ArrowDownIcon className='openart-dropdown-icon' />
      </button>
      <ul
        className={`openart-dropdown-list${isOpen ? ' openart-dropdown-show' : ''}`}
      >
        {dataSource.map((item: any) => {
          return (
            <li
              onClick={() => handleClickItem(item)}
              key={item[prefixKey]}
              className={`openart-dropdown-item${item[prefixKey] === selectedItem[prefixKey] ? ' openart-dropdown-item-selected' : ''}`}
            >
              {renderItem(item) || null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { Dropdown }