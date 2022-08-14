import React, { FC, PropsWithChildren } from 'react'
import './layout.css'

/* https://www.gatsbyjs.com/docs/how-to/styling/global-css/ */
export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}
