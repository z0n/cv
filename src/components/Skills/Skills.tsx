import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SkillsSectionQuery } from '../../../graphql-types'
import { CvSectionContent } from '../CvSectionContent/CvSectionContent'
import { CvSection } from '../CvSection/CvSection'
import { SkillBar } from './SkillBar'
import * as styles from './Skills.module.css'

interface SkillsProps {
    cvName: string
}

export const Skills: FC<SkillsProps> = ({ cvName }) => {
    const queryData: SkillsSectionQuery = useStaticQuery(graphql`
        query SkillsSection {
            allGraphCmsCv {
                nodes {
                    name
                    skills {
                        id
                        name
                        level
                    }
                }
            }
        }
    `)

    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    const skills = cvData?.skills || []

    return (
        <CvSection title='Skills'>
            <CvSectionContent className={styles.skillsContainerItems}>
                {skills.map(skill => (
                    <CvSectionContent key={skill.id} className={styles.skillContainer}>
                        <SkillBar level={skill.level} />
                        {skill.name}
                    </CvSectionContent>
                ))}
            </CvSectionContent>
        </CvSection>
    )
}
