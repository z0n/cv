import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from '../ContactIcon/ContactIcon'
import * as styles from './ContactItems.module.css'

interface ContactItemProps {
    icon: IconType
    text: string
}

export const ContactItem: FC<ContactItemProps> = ({ icon, text }) => {
    return (
        <div className={styles.contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <span>{text}</span>
        </div>
    )
}
