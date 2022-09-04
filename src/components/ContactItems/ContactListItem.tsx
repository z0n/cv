import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './ContactIcon'
import * as styles from './ContactItems.module.css'

interface ContactListItemProps {
    icon: IconType
    text: string
}

export const ContactListItem: FC<ContactListItemProps> = ({ icon, text }) => {
    return (
        <div className={styles.contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <span>{text}</span>
        </div>
    )
}
