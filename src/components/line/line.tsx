import React, { ReactElement } from 'react'
import * as styles from './line.module.css'

export const Line = ({ text }: { text: string }): ReactElement => {
    return (
        <div className={styles.line}>
            <span className={styles.lineLeft} />
            <span className={styles.lineText}>{text}</span>
            <span className={styles.lineRight} />
        </div>
    )
}
