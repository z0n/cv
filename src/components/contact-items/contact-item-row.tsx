import React, { FC, PropsWithChildren } from 'react'

import * as styles from './contact-items.module.css'

export const ContactItemRow: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.contactItemRow}>{children}</div>
}
