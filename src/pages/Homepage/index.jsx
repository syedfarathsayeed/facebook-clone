import React from "react"
import Appbar from "../../components/Appbar"
import Sidebar from "../../components/Sidebar"


const Homepage = () => {

    return (
        <>
            <Appbar />
            <main>
                <Sidebar />
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