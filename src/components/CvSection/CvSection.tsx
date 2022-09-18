import React, { FC, PropsWithChildren } from 'react'
import * as styles from './CvSection.module.css'

interface CvSectionProps extends PropsWithChildren {
    title: string
}

export const CvSection: FC<CvSectionProps> = ({ title, children }) => {
    return (
        <section>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </section>
    )
}
