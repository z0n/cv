import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import { contactItem } from './contact-items.module.css'

interface ContactListItemProps {
    icon: IconType
    href: string
    text: string
}

export const ContactItemWithLink: FC<ContactListItemProps> = ({ icon, href, text }) => {
    return (
        <div className={contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <a href={href} target={'_blank'} rel='noreferrer'>
                {text}
            </a>
        </div>
    )
}
