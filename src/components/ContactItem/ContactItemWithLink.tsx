import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from '../ContactIcon/ContactIcon'
import * as styles from './ContactItems.module.css'

interface ContactItemProps {
    icon: IconType
    href: string
    text: string
}

export const ContactItemWithLink: FC<ContactItemProps> = ({ icon, href, text }) => {
    return (
        <div className={styles.contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <a href={href} target='_blank' rel='noreferrer'>
                {text}
            </a>
        </div>
    )
}
