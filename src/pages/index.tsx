import React, { ReactElement } from 'react'
import { AboutMe } from '../components/about-me/about-me'
import { HeaderBar } from '../components/header-bar/header-bar'
import { Skills } from '../components/skills/skills'
import * as styles from './index.module.css'
import { ExperienceList } from '../components/experiences/experience-list'
import { Background } from '../components/background/background'
import { Layout } from '../components/layout/layout'

const IndexPage = (): ReactElement => {
    const cvName = process.env.GATSBY_CV_NAME as string

    return (
        <Layout>
            <main>
                <title>{cvName} - CV</title>
                <Background>
                    <HeaderBar />
                    <div className={styles.content}>
                        <AboutMe />
                        <ExperienceList />
                        <Skills />
                    </div>
                </Background>
            </main>
        </Layout>
    )
}

export default IndexPage
