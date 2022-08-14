import React, { FC } from 'react'
import { line, lineLeft, lineRight, lineText } from './line.module.css'

interface LineProps {
    text: string
}

export const Line: FC<LineProps> = ({ text }) => {
    return (
        <div className={line}>
            <span className={lineLeft} />
            <span className={lineText}>{text}</span>
            <span className={lineRight} />
        </div>
    )
}
