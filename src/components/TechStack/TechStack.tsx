import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import { TechStackQuery } from '../../../graphql-types'
import { Card } from '../Card/Card'
import { CvSection } from '../CvSection/CvSection'
import { Technology } from './Technology'
import * as styles from './TechStack.module.css'

interface TechStackProps {
    cvName: string
}

export const TechStack: FC<TechStackProps> = ({ cvName }) => {
    const queryData: TechStackQuery = useStaticQuery(graphql`
        query TechStack {
            allGraphCmsCv {
                nodes {
                    name
                    technologies {
                        id
                        name
                        url
                        icon {
                            url
                        }
                    }
                }
            }
        }
    `)

    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)
    const technologies = cvData?.technologies || []

    return (
        <CvSection title='What I like to work with'>
            <Card className={styles.list}>
                {technologies.map(technology => (
                    <Technology
                        key={technology.id}
                        name={technology.name}
                        url={technology.url}
                        iconUrl={technology.icon.url}
                    />
                ))}
            </Card>
        </CvSection>
    )
}
