import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import { contactItem } from './contact-items.module.css'

export const ContactListItem: FC<{ icon: IconType; text: string }> = ({ icon, text }) => {
    return (
        <div className={contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <span>{text}</span>
        </div>
    )
}
