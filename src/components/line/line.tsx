import React, { FC } from 'react'
import * as styles from './line.module.css'

interface LineProps {
    text: string
}

export const Line: FC<LineProps> = ({ text }) => {
    return (
        <div className={styles.line}>
            <span className={styles.lineLeft} />
            <span className={styles.lineText}>{text}</span>
            <span className={styles.lineRight} />
        </div>
    )
}
