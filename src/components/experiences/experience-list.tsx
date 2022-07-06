import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import { ExperiencesSectionQuery } from '../../../graphql-types'
import { CvSection } from '../cv-section/cv-section'
import { Experience } from './experience'
import { experienceList, experienceListItems } from './experiences.module.css'

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

    // Diese Zeile würde ich vor die Component ziehen. Das ist ein statischer
    // Wert, der nicht bei jedem Rerender neu gelesen werden muss
    //
    // Meiner Meinung noch besser für diese Stelle:
    // den cvName als Prop übergeben. Ich find's einfacher, wenn es möglichst
    // wenige Stellen gibt, an denen auf process.env zugegriffen wird.
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
        <CvSection title='Experiences' sectionClassName={experienceList}>
            <div className={experienceListItems}>
                {experiences.map(experience => (
                    <Experience key={experience.id} experience={experience} />
                ))}
            </div>
        </CvSection>
    )
}
