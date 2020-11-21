import { Paper, Avatar, Divider, IconButton, Typography } from "@material-ui/core"
import React from "react"
import ProfilePic from "../../resources/profile.jpg"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareIcon from "mdi-material-ui/Share"
import { Button } from "./AddPost"
import { usePostStyles } from "./index_styles"

const Post = ({ message, date, username, likes, comments, shares, imageUrl }) => {
    const classes = usePostStyles()
    return (
        <Paper className={classes.post}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <Avatar alt="avatar" src={ProfilePic} />
                    <div className={classes.nameContainer}>
                        <h4 className={classes.name}>{username}</h4>
                        <Typography className={classes.timestamp}>{date}</Typography>
                    </div>
                </div>
                <IconButton size="small" className={classes.iconButton}>
                    <MoreHorizIcon color="action" />
                </IconButton>
            </div>
            <Divider fullwidth />
            <div>
                <Typography className={classes.text}>{message}</Typography>
                <img alt="post"
                    src={imageUrl}
                    className={classes.center} />
                <Divider fullwidth />
                <div className={classes.reactions}>
                    <Typography>{`${likes} Likes`}</Typography>
                    <Typography>{`${comments} comments ${shares} shares`}</Typography>
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