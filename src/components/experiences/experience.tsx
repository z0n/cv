import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import { Card } from '../card/card'
import * as styles from './experiences.module.css'

export interface Experience {
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    description?: string | null
    technologies: string[]
}

export const Experience = ({ experience }: { experience: Experience }): ReactElement => {
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
