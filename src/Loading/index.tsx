import React, { useEffect, useMemo, useRef } from 'react'

import { Text } from '../Text'

export type LoadingProps = {
  progress?: number,
  type?: 'circle' | 'line'
}

const Loading = (props: LoadingProps) => {
  const refCircle = useRef<SVGCircleElement>(null)
  const { type = 'line', progress = 0 } = props
  
  const progressConverted = useMemo(() => {
    if (progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress
  }, [progress])

  useEffect(() => {
    if (!(type === 'circle') || !refCircle.current) {
      return;
    }
    if (type === 'circle' && refCircle.current) {
      const radius = refCircle.current?.r?.baseVal?.value || 0;
      const circumference = radius * 2 * Math.PI;
      refCircle.current.style.strokeDasharray = `${circumference} ${circumference}`
      refCircle.current.style.strokeDashoffset = `${circumference - progressConverted / 100 * circumference}`
    }
  }, [type, progressConverted])

  return (
    <div
      className={`openart-loading openart-loading-${type} flex-column-center-${type === 'line' ? 'left' : 'center'}`}
    >
      {type === 'line' 
        ? (
          <span 
            style={{ ['--data-progress' as never]: `${progressConverted}%` }} 
            className={`openart-loading-${type}-progress`}
          />
        ) 
        : (
          <svg
            className={`openart-loading-${type}-progress`}
            width="150"
            height="150"
          >
            <defs>
              <linearGradient id="openart-loading-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" />
                <stop offset="100%"/>
              </linearGradient>
            </defs>
            <circle
              className={`openart-loading-${type}-progress-2`}
              strokeWidth="12"
              fill="transparent"
              r="65"
              cx="75"
              cy="75"
            />
            <circle
              className={`openart-loading-${type}-progress-1`}
              ref={refCircle}
              strokeWidth="12"
              fill="transparent"
              r="65"
              cx="75"
              cy="75"
            />
          </svg>
        )
      }
      <div
        className={`openart-loading-${type}-status flex-row-left-center`}
      >
        <Text type='link' size='large' device='mobile' text={`${progressConverted}%`} />        
        <Text size='medium' device='mobile' text='Done' />
      </div>
    </div>
  )
}

export { Loading }