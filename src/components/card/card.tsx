import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'
import * as styles from './card.module.css'

interface CardProps extends PropsWithChildren {
    className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
    return <div className={classNames(styles.card, className)}>{children}</div>
}
