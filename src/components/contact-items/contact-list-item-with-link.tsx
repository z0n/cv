import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import { contactItem } from './contact-items.module.css'

// Ist vielleicht matter of taste, aber für die Lesbarkeit empfehle ich
// folgendes Pattern, um die PropTypes zu deklarieren:
/*
       // Immer dasselbe Schema für den Interface Name:
       // Component-Name + "Props" Suffix:
       // < component name > Props
interface ContactItemWithLinkProps {
    icon: IconType
    href: string
    text: string
}

export const ContactItemWithLink: FC<ContactItemWithLinkProps> = ({
    icon,
    href,
    text,
}) => {
    return (
    ...
*/
export const ContactItemWithLink = ({
    icon,
    href,
    text,
}: {
    icon: IconType
    href: string
    text: string
}): ReactElement => {
    return (
        <div className={contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <a href={href} target={'_blank'} rel='noreferrer'>
                {text}
            </a>
        </div>
    )
}
