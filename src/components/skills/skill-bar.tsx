import React, { FC } from 'react'
import { skillBarContent } from './skills.module.css'

interface SkillBarProps {
    level: number
}

export const SkillBar: FC<SkillBarProps> = ({ level }) => {
    const skillBarStyle: React.CSSProperties = { width: `${level * 20}%` }

    return <span className={skillBarContent} style={skillBarStyle} />
}
