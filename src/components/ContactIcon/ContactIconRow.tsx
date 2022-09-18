import React, { FC, PropsWithChildren } from 'react'
import * as styles from './ContactIcon.module.css'

export const ContactIconRow: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.contactIconRow}>{children}</div>
}
