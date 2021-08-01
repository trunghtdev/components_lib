import React, { memo } from 'react'

export type LinkProps = {
  icon?: JSX.Element | string,
  text?: string,
  disabled?: boolean
}

const Link = memo<
  LinkProps&
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>(({ icon, text, disabled, children, ...props }) => {
  
  const Icon = () => {
    if (typeof icon === 'string') {
      return (
        <img src={icon} alt='...' className='openart-link-icon' />
      )
    }
    if (!icon) {
      return <></>
    }
    return React.cloneElement(icon, { class: `${icon.props.className} openart-link-icon` })
  }

  return (
    <a
      aria-disabled={!!disabled}
      className='openart-link flex-row-center-bottom'
      {...props}
    >
      {icon&&<Icon />}
      {children}
      {text&&(
        <span className='openart-link-text'>{text}</span>
      )}
    </a>
  )
})

export { Link }