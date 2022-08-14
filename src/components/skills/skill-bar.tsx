import React, { ReactElement } from 'react'
import * as styles from './skills.module.css'

export const SkillBar = ({ level }: { level: number }): ReactElement => {
    const skillBarStyle: React.CSSProperties = { width: `${level * 20}%` }

    return <span className={styles.skillBarContent} style={skillBarStyle} />
}
