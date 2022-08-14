import React, { ReactElement } from 'react'

import * as styles from './contact-items.module.css'

export const ContactItemRow = ({ children }: { children: React.ReactNode }): ReactElement => {
    return <div className={styles.contactItemRow}>{children}</div>
}
