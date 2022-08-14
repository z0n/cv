import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Card } from '../card/card'
import { subtitle } from './experiences.module.css'

export interface Experience {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    description?: string | null
    technologies: string[]
}

export const Experience: FC<{ experience: Experience }> = ({ experience }) => {
    const endDate = experience.endDate || 'now'

    return (
        <Card>
            <h3>{experience.position}</h3>
            <div className={subtitle}>
                <span>{experience.company}</span>
                <span>
                    {experience.startDate} - {endDate}
                </span>
            </div>
            {experience.description && (
                <span>
                    <ReactMarkdown>{experience.description}</ReactMarkdown>
                </span>
            )}
            <span>{experience.technologies.join(' • ')}</span>
        </Card>
    )
}
