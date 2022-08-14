import React, { FC } from 'react'
import { Line } from '../line/line'

export const CvSection: FC<{
    title: string
    sectionClassName: string
    children: React.ReactNode
}> = ({ title, sectionClassName, children }) => {
    return (
        <div className={sectionClassName}>
            <Line text={title} />
            {children}
        </div>
    )
}
