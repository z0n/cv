import React, { FC, PropsWithChildren } from 'react'
import { card } from './card.module.css'

interface CardProps extends PropsWithChildren {
    className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
    return <div className={`${card} ${className ? className : ''}`}>{children}</div>
}
