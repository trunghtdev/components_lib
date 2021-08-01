import React from 'react'

const LoadingGhost: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7321 1C9.75424 1 7.82085 1.58649 6.17635 2.6853C4.53186 3.78412 3.25014 5.3459 2.49326 7.17317C1.73638 9.00043 1.53835 11.0111 1.9242 12.9509C2.31005 14.8907 3.26246 16.6725 4.66099 18.0711C6.05951 19.4696 7.84134 20.422 9.78115 20.8079C11.721 21.1937 13.7316 20.9957 15.5589 20.2388C17.3861 19.4819 18.9479 18.2002 20.0468 16.5557C21.1456 14.9112 21.7321 12.9778 21.7321 11" stroke="url(#paint0_linear)" stroke-width="2" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="21.7321" y1="21" x2="-2.37763" y2="10.0424" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0038F5"/>
        <stop offset="1" stop-color="#9F03FF"/>
      </linearGradient>
    </defs>
  </svg>
)

export default LoadingGhost