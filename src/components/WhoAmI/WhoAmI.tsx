import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import { WhoAmIQuery } from '../../../graphql-types'
import { Card } from '../Card/Card'
import { CvSection } from '../CvSection/CvSection'

interface WhoAmIProps {
    cvName: string
}

export const WhoAmI: FC<WhoAmIProps> = ({ cvName }) => {
    const queryData: WhoAmIQuery = useStaticQuery(graphql`
        query WhoAmI {
            allGraphCmsCv {
                nodes {
                    name
                    aboutMeSection {
                        longDescription
                    }
                }
            }
        }
    `)

    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    const { longDescription } = cvData?.aboutMeSection || {}

    return (
        <CvSection title='Who am I'>
            <Card>
                <p>{longDescription}</p>
            </Card>
        </CvSection>
    )
}
