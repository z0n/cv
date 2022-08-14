import React, { FC } from 'react'
import { skillBarContent } from './skills.module.css'

export const SkillBar: FC<{ level: number }> = ({ level }) => {
    const skillBarStyle: React.CSSProperties = { width: `${level * 20}%` }

    return <span className={skillBarContent} style={skillBarStyle} />
}
