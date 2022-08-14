import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import { contactItem } from './contact-items.module.css'

interface ContactListItemProps {
    icon: IconType
    href: string
}

export const ContactIconWithLink: FC<ContactListItemProps> = ({ icon, href }) => {
    return (
        <a href={href} target={'_blank'} className={contactItem} rel='noreferrer'>
            <ContactIcon icon={icon} iconSize={'2rem'} />
        </a>
    )
}
