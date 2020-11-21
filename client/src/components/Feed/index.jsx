import React from "react"
import Story from "./Story"
import AddPost from "./AddPost"
import Post from "./Post"
import { useFeedStyles } from "./index_styles"

const storyItems = [
    {
        title: "Dharma Productions",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Dhadak_2018_film.jpg",
        profileUrl: "https://pbs.twimg.com/profile_images/956979945867116544/n5y95EWx_400x400.jpg"
    },
    {
        title: "Manchester United",
        image: "https://www.thenationalnews.com/image/policy:1.963721:1594559865/GettyImages-946172.jpg?f=16x9&w=1200&$p$f$w=fef35e1",
        profileUrl: "https://i.pinimg.com/originals/8e/f5/9d/8ef59dc3c90a3abd56c87a5901709132.jpg"
    },
    {
        title: "Food Street",
        image: "https://www.flashpack.com/wp-content/uploads/2018/10/healthy-street-foods_featured_1352_1000.jpg",
        profileUrl: "https://i.pinimg.com/originals/cc/55/7f/cc557f6524b56bb84d53629b6e4d2f5c.png"
    },
    {
        title: "Travel Diaries",
        image: "https://i.pinimg.com/originals/a5/54/67/a5546755186018a6af70a4a402bc4b74.png",
        profileUrl: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg"
    },
    {
        title: "Animal Planet",
        image: "https://img1.pnghut.com/22/1/19/hUqkuAAwbM/video-mpeg4-part-14-play-toy-paw-patrol-pups-to-the-rescue.jpg",
        profileUrl: "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg"
    },

]

const Feed = () => {
    const classes = useFeedStyles()
    return (
        <div className={classes.feed}>
            <div className={classes.storyContainer}>
                {storyItems.map(item => (<Story key={item.title}
                    image={item.image}
                    title={item.title}
                    profileUrl={item.profileUrl} />))}
            </div>
            <AddPost />
            <Post message={"Yayyyyy!!! This is my first post"}
                imageUrl={"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
                username={"Syed Shad"}
                date={"9th November at 14:30."}
                likes={36}
                comments={36}
                shares={20} />
        </div>
    )
}

export default Feed