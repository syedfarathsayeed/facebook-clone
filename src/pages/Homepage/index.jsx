import React from "react"
import Appbar from "../../components/Appbar"
import Sidebar from "../../components/Sidebar"
import Feed from "../../components/Feed"
import { useHomepageStyles } from "./index_styles"

const Homepage = () => {
    const classes = useHomepageStyles()
    return (
        <>
            <Appbar />
            <main className={classes.root}>
                <Sidebar />
                <Feed />
            </main>
        </>
    )
}

export default Homepage

/**
 * App bar
 * Navigation menu
 * Posts feed
 * side bar
 */