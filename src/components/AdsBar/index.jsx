import { Button, CardMedia, Paper, Typography } from "@material-ui/core"
import React from "react"
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useAdsStyles } from "./index_styles"

const AdsBar = () => {
    const classes = useAdsStyles()
    return (
        <div className={classes.adsBar}>
            <div className={classes.card}>
                <img src={"https://yt3.ggpht.com/a/AATXAJwwU_Iw2nL3RRNPBcRQ3wek4pPMbc9Ke88L8rYP=s176-c-k-c0x00ffffff-no-rj"}
                    alt="Flying pup films" />
                <div className={classes.titleContainer}>
                    <Typography className={classes.title}>Flying pup films</Typography>
                    <div className={classes.buttons}>
                        <YouTubeIcon color="error" />
                        <Button className={classes.button}>Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className={classes.videos}>
                <iframe width="300"
                    height="200"
                    src="https://www.youtube.com/embed/64l1ONvdC2s"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />

                <iframe width="300"
                    height="200"
                    src="https://www.youtube.com/embed/8jqXkf1IJ8w"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />
            </div>
        </div>
    )
}

export default AdsBar