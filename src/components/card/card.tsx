import React, { FC, ReactNode } from 'react'
import { card } from './card.module.css'

export const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={`${card} ${className ? className : ''}`}>{children}</div>
}
