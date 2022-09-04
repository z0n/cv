import React, { FC } from 'react'
import { HeaderLogo } from './HeaderLogo'
import * as styles from './HeaderBar.module.css'

export const HeaderBar: FC = () => {
    return (
        <div className={styles.bar}>
            <HeaderLogo />
        </div>
    )
}
