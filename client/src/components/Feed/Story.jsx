import { Paper, Typography } from "@material-ui/core"
import Avatar from "../Avatar"
import React from "react"
import { useStoryStyles } from "./index_styles"

const Story = (props) => {
    const { title, profileUrl } = props
    const classes = useStoryStyles(props)
    return (
        <Paper className={classes.story}>
            <Avatar profileUrl={profileUrl} className={classes.avatar}/>
            <Typography className={classes.typography}>{title}</Typography>
        </Paper>
    )
}

export default Story