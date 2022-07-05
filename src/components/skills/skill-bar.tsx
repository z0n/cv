import React, { ReactElement } from 'react'
import { skillBarContent } from './skills.module.css'

export const SkillBar = ({ level }: { level: number }): ReactElement => {
    const skillBarStyle: React.CSSProperties = { width: `${level * 20}%` }

    return <span className={skillBarContent} style={skillBarStyle} />
}
