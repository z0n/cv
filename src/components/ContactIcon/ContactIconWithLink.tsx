import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './ContactIcon'

interface ContactListItemProps {
    icon: IconType
    href: string
}

export const ContactIconWithLink: FC<ContactListItemProps> = ({ icon, href }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <ContactIcon icon={icon} iconSize={'2rem'} />
        </a>
    )
}
