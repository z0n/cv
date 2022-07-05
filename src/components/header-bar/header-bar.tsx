import React, { ReactElement } from 'react'
import { HeaderLogo } from './header-logo'
import { bar } from './header.module.css'

export const HeaderBar = (): ReactElement => {
    return (
        <div className={bar}>
            <HeaderLogo fill={'#ffffff'} />
        </div>
    )
}
