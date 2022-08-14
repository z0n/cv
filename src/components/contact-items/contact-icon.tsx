import React, { FC } from 'react'
import { IconContext, IconType } from 'react-icons'
import { contactItemIcon } from './contact-items.module.css'

interface ContactIconProps {
    icon: IconType
    iconSize: string
}

export const ContactIcon: FC<ContactIconProps> = ({ icon, iconSize }) => {
    return (
        <span className={contactItemIcon}>
            <IconContext.Provider value={{ size: iconSize }}>{React.createElement(icon)}</IconContext.Provider>
        </span>
    )
}
