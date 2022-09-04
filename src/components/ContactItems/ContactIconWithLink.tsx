import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './ContactIcon'
import * as styles from './ContactItems.module.css'

interface ContactListItemProps {
    icon: IconType
    href: string
}

export const ContactIconWithLink: FC<ContactListItemProps> = ({ icon, href }) => {
    return (
        <a href={href} target={'_blank'} className={styles.contactItem} rel='noreferrer'>
            <ContactIcon icon={icon} iconSize={'2rem'} />
        </a>
    )
}