import React, { ReactElement } from 'react'
import { AboutMe } from '../components/about-me/about-me'
import { HeaderBar } from '../components/header-bar/header-bar'
import { Skills } from '../components/skills/skills'
// einzelne class names als named imports zu importieren funktioniert, aber ich
// habe das bisher als best practice wahrgenommen, dass man CSS Modules immer
// als `import styles from './...module.css' importiert und dann das object
// referenziert: `<div className={styles.content}> ... </div>`
import { content } from './index.module.css'
// Talking about best practices: Das Schema, die Dateien in kebab-case zu
// benennen, habe ich noch in keinem Projekt außer Agora gesehen (Sergey
// hat darauf bestanden 😬). In den meisten JS/TS Projekten wäre eine React
// component namens `ExperienceList` in der datei `ExperienceList.tsx`
import { ExperienceList } from '../components/experiences/experience-list'
import { Background } from '../components/background/background'

// Ich bevorzuge den React.FC type, spart Schreibarbeit:
// `const IndexPage: FC = () => {` mit `import { FC } from 'react'`
// Außerdem kann man damit die Prop Types schöner angeben. Beispiel siehe
// src/components/background/background.tsx
const IndexPage = (): ReactElement => {
    // Diese Zeile würde ich vor die Component ziehen. Das ist ein statischer
    // Wert, der nicht bei jedem Rerender neu gelesen werden muss
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
