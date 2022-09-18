import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { CvSectionContent } from '../CvSectionContent/CvSectionContent'
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
        <CvSectionContent>
            <h4>{experience.position}</h4>
            <div className={styles.subtitle}>
                <span>{experience.company}</span>
                <span>
                    {experience.startDate} - {endDate}
                </span>
            </div>
            {experience.description && (
                <span className={styles.description}>
                    <ReactMarkdown>{experience.description}</ReactMarkdown>
                </span>
            )}
            <span>{experience.technologies.join(' • ')}</span>
        </CvSectionContent>
    )
}
