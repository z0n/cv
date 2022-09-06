import React, { FC } from 'react'
import { Hero } from '../components/Hero/Hero'
import { ExperienceList } from '../components/Experiences/ExperienceList'
import { Layout } from '../components/Layout/Layout'
import { TechStack } from '../components/TechStack/TechStack'
import { WhoAmI } from '../components/WhoAmI/WhoAmI'

const cvName = process.env.GATSBY_CV_NAME as string

const IndexPage: FC = () => {
    return (
        <Layout>
            <head>
                <title>{cvName} - CV</title>
            </head>
            <Hero cvName={cvName} />
            <main>
                <WhoAmI cvName={cvName} />
                <ExperienceList cvName={cvName} />
                <TechStack />
            </main>
        </Layout>
    )
}

export default IndexPage
