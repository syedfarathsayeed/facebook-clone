import React from "react"
import {Appbar, Sidebar, Feed, AdsBar} from "../../components"
import { useHomepageStyles } from "./index_styles"

const Homepage = () => {
    const classes = useHomepageStyles()
    return (
        <>
            <Appbar />
            <main className={classes.root}>
                <Sidebar />
                <Feed />
                <AdsBar />
            </main>
        </>
    )
}

export default Homepage