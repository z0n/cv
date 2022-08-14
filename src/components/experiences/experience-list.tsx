import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import { ExperiencesSectionQuery } from '../../../graphql-types'
import { CvSection } from '../cv-section/cv-section'
import { Experience } from './experience'
import * as styles from './experiences.module.css'

export const ExperienceList = (): ReactElement => {
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

    const cvName = process.env.GATSBY_CV_NAME as string
    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    let experiences: Experience[] = []
    if (cvData?.experiences) {
        experiences = cvData?.experiences.sort((a, b) => {
            const aDate = new Date(a.startDate)
            const bDate = new Date(b.startDate)
            return bDate.getTime() - aDate.getTime()
        })
    }

    return (
        <CvSection title='Experiences' sectionClassName={styles.experienceList}>
            <div className={styles.experienceListItems}>
                {experiences.map(experience => (
                    <Experience key={experience.id} experience={experience} />
                ))}
            </div>
        </CvSection>
    )
}
