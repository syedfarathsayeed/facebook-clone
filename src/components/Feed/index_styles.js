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
      marginRight: 10,
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
    return({
        storyContainer: {
            display: "flex",
            marginTop: theme.spacing(2)
        }
    })
})
