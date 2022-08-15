import React, { FC } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import classNames from 'classnames'
import { AboutMeSectionQuery } from '../../../graphql-types'
import { Card } from '../Card/Card'
import { ContactListItem } from '../ContactItems/ContactListItem'
import { ContactItemRow } from '../ContactItems/ContactItemRow'
import * as styles from './AboutMe.module.css'
import { ContactListItemWithLink } from '../ContactItems/ContactListItemWithLink'
import { ContactIconWithLink } from '../ContactItems/ContactIconWithLink'
import { CvSection } from '../CvSection/CvSection'

export const AboutMe: FC = () => {
    const queryData: AboutMeSectionQuery = useStaticQuery(graphql`
        query AboutMeSection {
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
                }
            }
        }
    `)

    const cvName = process.env.GATSBY_CV_NAME as string
    const cvData = queryData.allGraphCmsCv.nodes.find(node => node.name === cvName)

    const aboutMePicture = getImage(cvData?.aboutMeSection.picture as IGatsbyImageData)
    const { description, location, phone, email, linkedin, github } = cvData?.aboutMeSection || {}

    return (
        <CvSection title='About me' sectionClassName={styles.container}>
            <Card className={styles.card}>
                <div className={styles.category}>
                    {aboutMePicture && <GatsbyImage className={styles.avatar} image={aboutMePicture} alt={cvName} />}
                    <h1 className={classNames(styles.item, styles.name)}>{cvName}</h1>
                    {description && <h2 className={styles.item}>{description}</h2>}
                </div>
                <div className={classNames(styles.category, styles.contactInformation)}>
                    <div>
                        {location && <ContactListItem icon={MdLocationOn} text={location} />}
                        {phone && <ContactListItemWithLink icon={MdPhone} href={`tel:${phone}`} text={phone} />}
                        {email && <ContactListItemWithLink icon={MdEmail} href={`mailto:${email}`} text={email} />}
                    </div>
                    <ContactItemRow>
                        {linkedin && (
                            <ContactIconWithLink icon={FaLinkedin} href={`https://www.linkedin.com/in/${linkedin}`} />
                        )}
                        {github && <ContactIconWithLink icon={FaGithub} href={`https://github.com/${github}`} />}
                    </ContactItemRow>
                </div>
            </Card>
        </CvSection>
    )
}
