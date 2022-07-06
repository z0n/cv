import React, { ReactElement } from 'react'
import { card } from './card.module.css'

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }): ReactElement => {
    // Ich empfehle wärmstens das `classnames` npm package:
    // `import classNames from 'classnames'`
    // `import styles from './card.module.css'`
    // und dann
    // `return <div className={classNames(styles.card, className)}>{children}</div>`
    return <div className={`${card} ${className ? className : ''}`}>{children}</div>
}
