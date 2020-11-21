import { makeStyles } from "@material-ui/core";

export const useAdsStyles = makeStyles((theme) => {
  return {
    adsBar: {
      marginTop: theme.spacing(2),
    },
    card: {
      display: "flex",
      height: 150,
      background: "black",
      width: 300,
      color: "white",
    },
    title:{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif",
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase"
    },
    titleContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: theme.spacing(2)
    },
    buttons:{
        display: "flex",
        justifyContent: "space-between",
        marginRight: theme.spacing(2)
    },
    button:{
        height: 20,
        color: "white",
        background: "red",
        textTransform: "none",
        marginLeft: theme.spacing(1)
    },
    videos:{
        display: "flex",
        flexDirection: "column",
        "&>*":{
            marginTop: theme.spacing(3)
        }
    }
  };
});
