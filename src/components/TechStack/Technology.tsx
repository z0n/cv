import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import * as styles from './TechStack.module.css'

interface TechnologyProps {
    name: string
    url: string
    iconUrl: string
}

export const Technology: FC<TechnologyProps> = ({ name, url, iconUrl }) => {
    return (
        <a className={styles.item} href={url} target='_blank' rel='noreferrer'>
            <SVG className={styles.icon} src={iconUrl} />
            <span>{name}</span>
        </a>
    )
}
