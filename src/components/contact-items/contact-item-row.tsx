import React, { ReactElement } from 'react'

import { contactItemRow } from './contact-items.module.css'

export const ContactItemRow = ({ children }: { children: React.ReactNode }): ReactElement => {
    return <div className={contactItemRow}>{children}</div>
}
