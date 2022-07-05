import React, { ReactElement } from 'react'
import { Line } from '../line/line'

export const CvSection = ({
    title,
    sectionClassName,
    children,
}: {
    title: string
    sectionClassName: string
    children: React.ReactNode
}): ReactElement => {
    return (
        <div className={sectionClassName}>
            <Line text={title} />
            {children}
        </div>
    )
}
