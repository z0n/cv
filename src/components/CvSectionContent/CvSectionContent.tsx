import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'
import * as styles from './CvSectionContent.module.css'

interface CvSectionContentProps extends PropsWithChildren {
    className?: string
}

export const CvSectionContent: FC<CvSectionContentProps> = ({ children, className }) => {
    return <div className={classNames(styles.cvSectionContent, className)}>{children}</div>
}
