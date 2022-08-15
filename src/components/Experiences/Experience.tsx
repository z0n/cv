import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Card } from '../Card/Card'
import * as styles from './Experiences.module.css'

export interface WorkExperience {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    description?: string | null
    technologies: string[]
}

interface ExperienceProps {
    experience: WorkExperience
}

export const Experience: FC<ExperienceProps> = ({ experience }) => {
    const endDate = experience.endDate || 'now'

    return (
        <Card>
            <h3>{experience.position}</h3>
            <div className={styles.subtitle}>
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
