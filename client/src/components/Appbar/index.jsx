import {
    Avatar, IconButton as MUIIconButton, InputAdornment, Tab as MUITab,
    Tabs, TextField, Tooltip as MUITooltip, Typography
} from "@material-ui/core";
import {
    Add as AddIcon, ExitToApp as LogoutIcon, Home as HomeIcon,
    OndemandVideoOutlined as WatchIcon, Search as SearchIcon,
    StorefrontOutlined as MarketPlaceIcon, SupervisedUserCircleOutlined as GroupsIcon
} from "@material-ui/icons";
import NotificationIcon from "mdi-material-ui/Bell";
import GamingIcon from 'mdi-material-ui/FacebookGaming';
import MessengerIcon from 'mdi-material-ui/FacebookMessenger';
import React from "react";
import FacebookLogo from "../../resources/f_logo.png";
import ProfilePic from "../../resources/profile.jpg";
import {useToken} from "../../cookies"
import {
    useActionBarStyles,
    useAppbarStyles, useIconButtonStyles,
    useSearchBarStyles, useTabsStyles,
    useTabStyles, useTooltipStyles
} from "./index.styles";

const SearchBar = () => {
    const classes = useSearchBarStyles()
    return (
        <div className={classes.container}>
            <img src={FacebookLogo} height={40} width={40} alt={"facebook_logo"} />
            <TextField
                type="search"
                variant="outlined"
                placeholder="Search Facebook"
                InputProps={{
                    classes: {
                        root: classes.root,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline
                    },
                    startAdornment: <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }}
            />
        </div>
    )
}

const Tooltip = (props) => {
    const classes = useTooltipStyles()
    return <MUITooltip arrow classes={classes} {...props} />
}

const Tab = (props) => {
    const classes = useTabStyles()
    const { title, ...restProps } = props
    return (
        <Tooltip title={title}>
            <MUITab {...restProps} classes={classes} aria-label={title} />
        </Tooltip>
    )
}

const IconButton = (props) => {
    const classes = useIconButtonStyles()
    const { title, ...restProps } = props
    return (
        <Tooltip title={title}>
            <MUIIconButton classes={classes} disableRipple {...restProps} />
        </Tooltip>
    )
}

const TabsBar = () => {

    const classes = useTabsStyles()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
            className={classes.tabs}
            classes={{
                indicator: classes.indicator
            }}
        >
            <Tab icon={<HomeIcon className={classes.icon} />} title="Home" />
            <Tab icon={<WatchIcon className={classes.icon} />} title="Watch" />
            <Tab icon={<MarketPlaceIcon className={classes.icon} />} title="Marketplace" />
            <Tab icon={<GroupsIcon className={classes.icon} />} title="Groups" />
            <Tab icon={<GamingIcon className={classes.icon} />} title="Gaming" />
        </Tabs>
    )
}

const ActionsBar = () => {
    const classes = useActionBarStyles()

    const {removeToken} = useToken()

    const handleLogout = () => removeToken()
    
    return (
        <div className={classes.actions}>
            <div className={classes.avatar}>
                <Avatar alt="Profile" src={ProfilePic} />
                <Typography className={classes.typography}>Syed</Typography>
            </div>
            <IconButton title={"Create"}>
                <AddIcon />
            </IconButton>
            <IconButton title={"Messenger"}>
                <MessengerIcon />
            </IconButton>
            <IconButton title={"Notifications"}>
                <NotificationIcon />
            </IconButton>
            <IconButton title={"Logout"} onClick={handleLogout}>
                <LogoutIcon />
            </IconButton>
        </div>
    )
}

const Appbar = () => {
    const classes = useAppbarStyles()
    return (
        <header className={classes.header}>
            <SearchBar />
            <TabsBar />
            <ActionsBar />
        </header>
    )
}

export default Appbar