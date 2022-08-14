import React, { FC, PropsWithChildren } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage, { IFluidObject } from 'gatsby-background-image'
import { BackgroundImageQuery } from '../../../graphql-types'
import { background } from './background.module.css'

export const Background: FC<PropsWithChildren> = ({ children }) => {
    const queryData: BackgroundImageQuery = useStaticQuery(graphql`
        query BackgroundImage {
            allGraphCmsCv {
                nodes {
                    name
                    backgroundImage {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 3840) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const cvName = process.env.GATSBY_CV_NAME as string
    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    const backgroundImage = cvData?.backgroundImage?.localFile?.childImageSharp?.fluid as IFluidObject

    return (
        <BackgroundImage className={background} fluid={backgroundImage} backgroundColor={'#fffbfe'}>
            {children}
        </BackgroundImage>
    )
}
