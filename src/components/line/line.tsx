import React, { FC } from 'react'
import { line, lineLeft, lineRight, lineText } from './line.module.css'

export const Line: FC<{ text: string }> = ({ text }) => {
    return (
        <div className={line}>
            <span className={lineLeft} />
            <span className={lineText}>{text}</span>
            <span className={lineRight} />
        </div>
    )
}
