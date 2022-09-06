import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { ExperiencesSectionQuery } from '../../../graphql-types'
import { CvSection } from '../CvSection/CvSection'
import { Experience, WorkExperience } from './Experience'
import * as styles from './Experiences.module.css'

interface ExperienceListProps {
    cvName: string
}

export const ExperienceList: FC<ExperienceListProps> = ({ cvName }) => {
    const queryData: ExperiencesSectionQuery = useStaticQuery(graphql`
        query ExperiencesSection {
            allGraphCmsCv {
                nodes {
                    name
                    experiences {
                        id
                        position
                        company
                        startDate
                        endDate
                        description
                        technologies
                    }
                }
            }
        }
    `)

    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    let experiences: WorkExperience[] = []
    if (cvData?.experiences) {
        experiences = cvData?.experiences.sort((a, b) => {
            const aDate = new Date(a.startDate)
            const bDate = new Date(b.startDate)
            return bDate.getTime() - aDate.getTime()
        })
    }

    return (
        <CvSection title='Experience'>
            <div className={styles.experienceListItems}>
                {experiences.map(experience => (
                    <Experience key={experience.id} experience={experience} />
                ))}
            </div>
        </CvSection>
    )
}
