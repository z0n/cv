import React, { FC } from 'react'
import { IconContext, IconType } from 'react-icons'
import { contactItemIcon } from './contact-items.module.css'

export const ContactIcon: FC<{ icon: IconType; iconSize: string }> = ({ icon, iconSize }) => {
    return (
        <span className={contactItemIcon}>
            <IconContext.Provider value={{ size: iconSize }}>{React.createElement(icon)}</IconContext.Provider>
        </span>
    )
}
