import React, { FC } from 'react'
import { Card } from '../Card/Card'
import { CvSection } from '../CvSection/CvSection'

export const TechStack: FC = () => {
    return (
        <CvSection title='What I like to work with'>
            <Card>
                <div className='test'></div>
            </Card>
        </CvSection>
    )
}
