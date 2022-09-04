import React, { FC } from 'react'
import { Line } from '../Line/Line'

interface CvSectionProps {
    title: string
    sectionClassName: string
    children: React.ReactNode
}

export const CvSection: FC<CvSectionProps> = ({ title, sectionClassName, children }) => {
    return (
        <div className={sectionClassName}>
            <Line text={title} />
            {children}
        </div>
    )
}