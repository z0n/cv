import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import { contactItem } from './contact-items.module.css'

export const ContactIconWithLink: FC<{ icon: IconType; href: string }> = ({ icon, href }) => {
    return (
        <a href={href} target={'_blank'} className={contactItem} rel='noreferrer'>
            <ContactIcon icon={icon} iconSize={'2rem'} />
        </a>
    )
}
