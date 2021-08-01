import React from 'react';

import { Text } from '../Text'
import LoadingIcon from '../../icons/Loading';
import LoadingGhostIcon from '../../icons/LoadingGhost';

export type ButtonProps = {
  loading?: boolean,
  disabled?: boolean,
  type?: 'primary' | 'secondary' | 'subtle' | 'ghost',
  text?: string,
  size?: "small" | 'large'
}

const Button = (props: ButtonProps) => {
  const { loading, disabled, type = 'primary', size = 'small', text } = props;
  
  return (
    <button
      disabled={disabled}
      className={`openart-btn openart-btn-${size} openart-btn-${type}${loading ? " openart-btn-loading" : ""}`}
    >
      {loading ?
        (<span
          className='openart-btn-loading-content'
        >
          {type === 'primary' ? <LoadingIcon /> : <LoadingGhostIcon />}
          <Text
            type='link'
            device='desktop' 
            size={size === 'small' ? 'medium' : 'large'} 
            text='Loading...'
          />
        </span>) :
        // type === 'ghost' ? <span>Loading...</span> :<LoadingIcon className="openart-btn-loading" /> :
        text && (
          <Text 
            type='link'
            device='desktop' 
            size={size === 'small' ? 'medium' : 'large'} 
            text={text}
          />
        )}
    </button>
  );
};

export { Button };
