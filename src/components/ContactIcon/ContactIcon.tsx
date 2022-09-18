import React, { FC } from 'react'
import { IconContext, IconType } from 'react-icons'
import * as styles from './ContactIcon.module.css'

interface ContactIconProps {
    icon: IconType
    iconSize: string
}

export const ContactIcon: FC<ContactIconProps> = ({ icon, iconSize }) => {
    return (
        <span className={styles.contactIcon}>
            <IconContext.Provider value={{ size: iconSize }}>{React.createElement(icon)}</IconContext.Provider>
        </span>
    )
}
