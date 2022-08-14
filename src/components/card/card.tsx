import React, { ReactElement } from 'react'
import * as styles from './card.module.css'

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }): ReactElement => {
    return <div className={`${styles.card} ${className ? className : ''}`}>{children}</div>
}
