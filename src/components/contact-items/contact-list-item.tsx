import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import * as styles from './contact-items.module.css'

export const ContactListItem = ({ icon, text }: { icon: IconType; text: string }): ReactElement => {
    return (
        <div className={styles.contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <span>{text}</span>
        </div>
    )
}
