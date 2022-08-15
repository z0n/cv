import React, { FC } from 'react'
import * as styles from './Skills.module.css'

interface SkillBarProps {
    level: number
}

export const SkillBar: FC<SkillBarProps> = ({ level }) => {
    const skillBarStyle: React.CSSProperties = { width: `${level * 20}%` }

    return <span className={styles.skillBarContent} style={skillBarStyle} />
}
