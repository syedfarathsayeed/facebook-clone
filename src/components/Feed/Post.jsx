import { Paper, Avatar, Divider, IconButton, Typography } from "@material-ui/core"
import React from "react"
import ProfilePic from "../../resources/profile.jpg"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareIcon from "mdi-material-ui/Share"
import { Button} from "./AddPost"
import { usePostStyles } from "./index_styles"

const Post = () => {
    const classes = usePostStyles()
    return (
        <Paper className={classes.post}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <Avatar alt="avatar" src={ProfilePic} />
                    <div className={classes.nameContainer}>
                        <h4 className={classes.name}>Syed Shad</h4>
                        <Typography className={classes.timestamp}>9th November at 14:30.</Typography>
                    </div>
                </div>
                <IconButton size="small" className={classes.iconButton}>
                    <MoreHorizIcon color="action" />
                </IconButton>
            </div>
            <Divider fullwidth />
            <div>
                <Typography className={classes.text}>Yayyyyyy!!! My First post!!!!</Typography>
                <img alt=""
                    src={"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
                    className={classes.center} />
                <Divider fullwidth />
                <div className={classes.reactions}>
                    <Typography>36 Likes</Typography>
                    <Typography>36 comments 30 shares</Typography>
                </div>
                <Divider fullwidth />
                <div className={classes.buttons}>
                    <Button startIcon={<LikeIcon />}>
                        {"Like"}
                    </Button>
                    <Button startIcon={<CommentIcon />}>
                        {"Comment"}
                    </Button>
                    <Button startIcon={<ShareIcon />} >
                        {"Share"}
                    </Button>
                </div>
            </div>
        </Paper>
    )
}

export default Post