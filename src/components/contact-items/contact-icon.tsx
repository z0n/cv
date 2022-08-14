import React, { ReactElement } from 'react'
import { IconContext, IconType } from 'react-icons'
import * as styles from './contact-items.module.css'

export const ContactIcon = ({ icon, iconSize }: { icon: IconType; iconSize: string }): ReactElement => {
    return (
        <span className={styles.contactItemIcon}>
            <IconContext.Provider value={{ size: iconSize }}>{React.createElement(icon)}</IconContext.Provider>
        </span>
    )
}
