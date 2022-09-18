import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import { WhoAmIQuery } from '../../../graphql-types'
import { CvSectionContent } from '../CvSectionContent/CvSectionContent'
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
            <CvSectionContent>
                <p>{longDescription}</p>
            </CvSectionContent>
        </CvSection>
    )
}
