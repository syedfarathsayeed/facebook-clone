import React from "react"
import { Avatar as MUIAvatar } from "@material-ui/core"
import useStyles from "./index_styles"

const Avatar = (props) => {
    const { profileUrl, ...other } = props
    const classes = useStyles()
    return (
        <MUIAvatar alt="avatar" src={profileUrl} className={classes.avatar} {...other} />
    )
}

export default Avatar