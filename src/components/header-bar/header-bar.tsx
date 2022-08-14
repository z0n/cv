import React, { FC } from 'react'
import { HeaderLogo } from './header-logo'
import { bar } from './header.module.css'

export const HeaderBar: FC = () => {
    return (
        <div className={bar}>
            <HeaderLogo fill={'#ffffff'} />
        </div>
    )
}
