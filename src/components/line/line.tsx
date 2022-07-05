import React, { ReactElement } from 'react'
import { line, lineLeft, lineRight, lineText } from './line.module.css'

export const Line = ({ text }: { text: string }): ReactElement => {
    return (
        <div className={line}>
            <span className={lineLeft} />
            <span className={lineText}>{text}</span>
            <span className={lineRight} />
        </div>
    )
}
