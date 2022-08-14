import React, { FC } from 'react'
import { AboutMe } from '../components/about-me/about-me'
import { HeaderBar } from '../components/header-bar/header-bar'
import { Skills } from '../components/skills/skills'
import { content } from './index.module.css'
import { ExperienceList } from '../components/experiences/experience-list'
import { Background } from '../components/background/background'

const IndexPage: FC = () => {
    const cvName = process.env.GATSBY_CV_NAME as string

    return (
        <main>
            <title>{cvName} - CV</title>
            <Background>
                <HeaderBar />
                <div className={content}>
                    <AboutMe />
                    <ExperienceList />
                    <Skills />
                </div>
            </Background>
        </main>
    )
}

export default IndexPage
