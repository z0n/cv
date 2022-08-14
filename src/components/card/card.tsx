import React, { FC, ReactNode } from 'react'
import { card } from './card.module.css'

interface CardProps {
    children: ReactNode
    className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
    return <div className={`${card} ${className ? className : ''}`}>{children}</div>
}
