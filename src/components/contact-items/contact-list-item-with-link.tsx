import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'
import { ContactIcon } from './contact-icon'
import * as styles from './contact-items.module.css'

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
        <div className={styles.contactItem}>
            <ContactIcon icon={icon} iconSize={'1.5rem'} />
            <a href={href} target={'_blank'} rel='noreferrer'>
                {text}
            </a>
        </div>
    )
}
