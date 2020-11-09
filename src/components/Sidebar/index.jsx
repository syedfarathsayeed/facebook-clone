import React from "react"
import { Avatar, List, ListItem as MUIListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import CovidIcon from "../../resources/icons/covidIcon.png"
import Friends from "../../resources/icons/friends.png"
import Groups from "../../resources/icons/group.png"
import Marketplace from "../../resources/icons/marketplace.png"
import Saved from "../../resources/icons/saved.png"
import AdCentre from "../../resources/icons/adcentre.png"
import Favourites from "../../resources/icons/favourites.png"
import Memories from "../../resources/icons/memories.png"
import Climate from "../../resources/icons/climate.png"
import Videos from "../../resources/icons/videos.png"
import Events from "../../resources/icons/events.png"
import ProfilePic from "../../resources/profile.jpg"
import { useSidebarStyles } from "./index_styles"

const getIcon = (url) => <img src={url} width={28} height={28} alt={url} />

const menuItems = [
    {
        title: "COVID-19 Information Centre",
        icon: getIcon(CovidIcon)
    },
    {
        title: "Friends",
        icon: getIcon(Friends)
    },
    {
        title: "Groups",
        icon: getIcon(Groups)
    },
    {
        title: "Marketplace",
        icon: getIcon(Marketplace)
    },
    {
        title: "Videos",
        icon: getIcon(Videos)
    },
    {
        title: "Events",
        icon: getIcon(Events)
    },
    {
        title: "Memories",
        icon: getIcon(Memories)
    },
    {
        title: "Saved",
        icon: getIcon(Saved)
    },
    {
        title: "Ad Centre",
        icon: getIcon(AdCentre)
    },
    {
        title: "Climate Science Information Centre",
        icon: getIcon(Climate)
    },
    {
        title: "Favourites",
        icon: getIcon(Favourites)
    },

]

const ListItem = (props) => {
    const classes = useSidebarStyles()
    const { title, icon } = props
    return (
        <MUIListItem button>
            <ListItemIcon className={classes.listItem}>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} classes={{ primary: classes.listItemText }} />
        </MUIListItem>
    )
}

const Sidebar = () => {
    const classes = useSidebarStyles()
    return (
        <List component="nav" className={classes.list}>
            <ListItem title={"Syed Farath Sayeed"} icon={<Avatar alt="Profile" src={ProfilePic} className={classes.avatar} />} />
            {menuItems.map((item, index) => <ListItem key={index} title={item.title} icon={item.icon} />)}
        </List>
    )
}

export default Sidebar