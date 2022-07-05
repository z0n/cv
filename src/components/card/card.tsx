import React, { ReactElement } from 'react'
import { card } from './card.module.css'

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }): ReactElement => {
    return <div className={`${card} ${className ? className : ''}`}>{children}</div>
}
