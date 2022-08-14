import React, { FC } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { AboutMeSectionQuery } from '../../../graphql-types'
import { Card } from '../card/card'
import { ContactListItem } from '../contact-items/contact-list-item'
import { ContactItemRow } from '../contact-items/contact-item-row'
import {
    aboutMeCard,
    aboutMeContainer,
    aboutMeItem,
    aboutMeCategory,
    avatar,
    contactInformation,
    name,
} from './about-me.module.css'
import { ContactItemWithLink } from '../contact-items/contact-list-item-with-link'
import { ContactIconWithLink } from '../contact-items/contact-icon-with-link'
import { CvSection } from '../cv-section/cv-section'

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
        <CvSection title='About me' sectionClassName={aboutMeContainer}>
            <Card className={aboutMeCard}>
                <div className={aboutMeCategory}>
                    {aboutMePicture && <GatsbyImage className={avatar} image={aboutMePicture} alt={cvName} />}
                    <h1 className={`${aboutMeItem} ${name}`}>{cvName}</h1>
                    {description && <h2 className={aboutMeItem}>{description}</h2>}
                </div>
                <div className={`${aboutMeCategory} ${contactInformation}`}>
                    <div>
                        {location && <ContactListItem icon={MdLocationOn} text={location} />}
                        {phone && <ContactItemWithLink icon={MdPhone} href={`tel:${phone}`} text={phone} />}
                        {email && <ContactItemWithLink icon={MdEmail} href={`mailto:${email}`} text={email} />}
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
