import { Button as MUIButton, Divider, Paper, TextField } from "@material-ui/core"
import Avatar from "../Avatar"
import React from "react"
import ProfilePic from "../../resources/profile.jpg"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useAddPostStyles, useOutlineTextfieldStyles, useButtonStyles } from "./index_styles"

export const Button = (props) => {
    const classes = useButtonStyles()
    return <MUIButton variant="text" className={classes.button} {...props}/>
}

const AddPost = () => {
    const classes = useAddPostStyles()
    const outlineTextfieldClasses = useOutlineTextfieldStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.message}>
                <Avatar profileUrl={ProfilePic} className={classes.avatar} />
                <TextField
                    placeholder={"What's on your mind, Syed?"}
                    variant="outlined"
                    fullWidth
                    className={classes.textfield}
                    InputProps={{
                        classes: outlineTextfieldClasses
                    }}
                />
            </div>
            <Divider fullWidth className={classes.divider} />
            <div className={classes.buttons}>
                <Button startIcon={<VideocamIcon className={classes.icon} style={{color: "red"}}/>}>
                    {"Live video"}
                </Button>
                <Button startIcon={<PhotoAlbumIcon className={classes.icon} style={{color: "#84CB4C"}}/>}>
                    {"Photo/Video"}
                </Button>
                <Button startIcon={<InsertEmoticonIcon className={classes.icon} style={{color: "#E6E633"}}/>} >
                    {"Feeling/Activity"}
                </Button>
            </div>
        </Paper>
    )
}

export default AddPost