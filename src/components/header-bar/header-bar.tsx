import React, { FC } from 'react'
import { HeaderLogo } from './header-logo'
import * as styles from './header.module.css'

export const HeaderBar: FC = () => {
    return (
        <div className={styles.bar}>
            <HeaderLogo />
        </div>
    )
}
