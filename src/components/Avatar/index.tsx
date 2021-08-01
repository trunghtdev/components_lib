import React, { ImgHTMLAttributes } from 'react'

import { Text } from '../Text'

export type AvatarProps = {
  name?: string,
  status?: string,
  image?: ImgHTMLAttributes<HTMLElement>
}

const Avatar = (props: AvatarProps) => {
  const { name, image, status } = props
  return (
    <div
      className='openart-avatar'
    >
      <div
        className='openart-avatar-img'
      >
        <span />
        {image 
          ? (<img {...image} />) 
          : (<span>T</span>)}
      </div>
      <div
        className='openart-avatar-text flex-column-center-left'
      >
        {name && (<Text type='link' text={name} device='desktop' size='medium' />)}
        {status && (<Text text={status} device='desktop' size='x-small' />)}
      </div>
    </div>
  )
}

export { Avatar }