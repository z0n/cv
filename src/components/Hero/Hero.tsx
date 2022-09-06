import React, { FC } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { HeroQuery } from '../../../graphql-types'
import { ContactItemRow } from '../ContactItems/ContactItemRow'
import * as styles from './Hero.module.css'
import { ContactIconWithLink } from '../ContactItems/ContactIconWithLink'
import classNames from 'classnames'

interface HeroProps {
    cvName: string
}

export const Hero: FC<HeroProps> = ({ cvName }) => {
    const queryData: HeroQuery = useStaticQuery(graphql`
        query Hero {
            allGraphCmsCv {
                nodes {
                    name
                    aboutMeSection {
                        picture {
                            gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
                        }
                        description
                        location
                        phone
                        email
                        linkedin
                        github
                    }
                    backgroundImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: DOMINANT_COLOR)
                            }
                        }
                    }
                }
            }
        }
    `)

    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    const headerImage = getImage(cvData?.backgroundImage?.localFile as IGatsbyImageData)
    const aboutMePicture = getImage(cvData?.aboutMeSection.picture as IGatsbyImageData)
    const { description, location, phone, email, linkedin, github } = cvData?.aboutMeSection || {}

    return (
        <header className={styles.container}>
            {headerImage && (
                <GatsbyImage
                    className={styles.background}
                    alt='Header background image'
                    image={headerImage}
                    loading='eager'
                />
            )}
            <div className={styles.section}>
                {aboutMePicture && <GatsbyImage className={styles.avatar} image={aboutMePicture} alt={cvName} />}
                <h1 className={classNames(styles.item, styles.name)}>{cvName}</h1>
                {description && <h2 className={styles.item}>{description}</h2>}
            </div>
            <div className={classNames(styles.section, styles.contactInformation)}>
                {/* <div>
                    {location && <ContactListItem icon={MdLocationOn} text={location} />}
                    {phone && <ContactListItemWithLink icon={MdPhone} href={`tel:${phone}`} text={phone} />}
                    {email && <ContactListItemWithLink icon={MdEmail} href={`mailto:${email}`} text={email} />}
                </div> */}
                <ContactItemRow>
                    {linkedin && (
                        <ContactIconWithLink icon={FaLinkedin} href={`https://www.linkedin.com/in/${linkedin}`} />
                    )}
                    {github && <ContactIconWithLink icon={FaGithub} href={`https://github.com/${github}`} />}
                </ContactItemRow>
            </div>
        </header>
    )
}
