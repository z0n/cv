import React, { FC } from 'react'
import { AboutMe } from '../components/AboutMe/AboutMe'
import { HeaderBar } from '../components/HeaderBar/HeaderBar'
import { Skills } from '../components/Skills/Skills'
import * as styles from './index.module.css'
import { ExperienceList } from '../components/Experiences/ExperienceList'
import { Background } from '../components/Background/Background'
import { Layout } from '../components/Layout/Layout'

const IndexPage: FC = () => {
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
