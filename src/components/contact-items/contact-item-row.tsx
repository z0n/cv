import React, { FC, PropsWithChildren } from 'react'

import { contactItemRow } from './contact-items.module.css'

export const ContactItemRow: FC<PropsWithChildren> = ({ children }) => {
    return <div className={contactItemRow}>{children}</div>
}
