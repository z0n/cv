import React, { ReactElement } from 'react'
import { HeaderLogo } from './header-logo'
import * as styles from './header.module.css'

export const HeaderBar = (): ReactElement => {
    return (
        <div className={styles.bar}>
            <HeaderLogo />
        </div>
    )
}
