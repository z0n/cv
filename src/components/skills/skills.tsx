import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SkillsSectionQuery } from '../../../graphql-types'
import { Card } from '../card/card'
import { CvSection } from '../cv-section/cv-section'
import { SkillBar } from './skill-bar'
import * as styles from './skills.module.css'

export const Skills: FC = () => {
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

    const cvName = process.env.GATSBY_CV_NAME as string
    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    const skills = cvData?.skills || []

    return (
        <CvSection title='Skills' sectionClassName={styles.skillsContainer}>
            <Card className={styles.skillsContainerItems}>
                {skills.map(skill => (
                    <Card key={skill.id} className={styles.skillContainer}>
                        <SkillBar level={skill.level} />
                        {skill.name}
                    </Card>
                ))}
            </Card>
        </CvSection>
    )
}
