import { makeStyles } from "@material-ui/core";

export const useStoryStyles = makeStyles((theme) => {
  return {
    story: (props) => ({
      backgroundImage: `url(${props.image})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      height: 200,
      width: 105,
      borderRadius: 10,
      transition: "transform 100ms ease-in",
      cursor: "pointer",
      boxShadow: "inset 0px 5px 17px 200px rgba(0,0,0,0.20)",
      "&:hover": {
        transform: "scale(1.02)",
      },
    }),
    typography: {
      color: "white",
      position: "absolute",
      bottom: 10,
      left: 10,
      fontWeight: "bold",
    },
    avatar: {
      margin: theme.spacing(2),
      border: `4px ${theme.palette.primary.main} solid`,
    },
  };
});

export const useFeedStyles = makeStyles((theme) => {
  return {
    storyContainer: {
      display: "flex",
      marginTop: theme.spacing(2),
      "&>*:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
    feed: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  };
});

export const useOutlineTextfieldStyles = makeStyles((theme) => {
  const borderColor = "transparent";
  return {
    root: {
      position: "relative",
      background: theme.palette.background.default,
      borderRadius: 40,
      height: 40,
      marginLeft: theme.spacing(2),
      "& $notchedOutline": {
        borderColor,
      },
      "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
        borderColor,
        "@media (hover: none)": {
          borderColor,
        },
      },
      "&$focused $notchedOutline": {
        borderColor,
      },
    },
    focused: {},
    notchedOutline: {},
  };
});

export const useAddPostStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "10px 15px 10px 15px",
      marginTop: theme.spacing(4),
      width: 480,
      borderRadius: 10,
    },
    message: {
      display: "flex",
      alignItems: "center",
    },
    textfield: {
      marginRight: theme.spacing(3),
    },
    divider: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    avatar: {
      height: 42,
      width: 42,
    },
    buttons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&>*:not(:last-child)": {
        marginRight: theme.spacing(1),
      },
    },
    icon: {
      height: 32,
      width: 30,
    },
  };
});

export const useButtonStyles = makeStyles((theme) => {
  return {
    button: {
      background: "none",
      height: 40,
      width: 160,
      borderRadius: 10,
      textTransform: "none",
      color: "#65676b",
      fontFamily: "inherit",
      fontWeight: 600,
    },
  };
});

export const usePostStyles = makeStyles((theme) => {
  return {
    post: {
      marginTop: theme.spacing(4),
      width: 510,
      borderRadius: 10,
      marginBottom: theme.spacing(2)
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: theme.spacing(1),
    },
    title: {
      display: "flex",
      margin: theme.spacing(2),
    },
    nameContainer: {
      marginLeft: theme.spacing(1),
    },
    name: {
      margin: 0,
      marginTop: theme.spacing(1),
      fontWeight: "600",
    },
    timestamp: {
      margin: 0,
      fontWeight: "light",
      fontSize: 12,
      color: "#65676b",
    },
    iconButton: {
      margin: theme.spacing(3),
    },
    content: {
      padding: theme.spacing(4),
    },
    text: {
      padding: "10px 15px 10px 15px",
    },
    center: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
    },
    reactions:{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "10px 20px 10px 20px",
      color: "#65676b"
    },
    buttons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(1),
      "&>*:not(:last-child)": {
        marginRight: theme.spacing(1),
      },
    },
  };
});
