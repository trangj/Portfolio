import React, { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
}

function Card({ children, className } : CardProps) {
  return (
    <div className={`rounded-3xl p-10 transform transition-all hover:scale-105 card ${className}`}>
      {children}
    </div>
  )
}

export default Card