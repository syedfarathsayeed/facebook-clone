import { makeStyles } from "@material-ui/core";

export const useSidebarStyles = makeStyles((theme) => {
  return {
    avatar: {
      width: 28,
      height: 28,
    },
    listItem: {
      minWidth: 38,
    },
    listItemText: {
      fontSize: 15,
      fontWeight: 500,
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;",
    },
    list:{
        maxWidth: 350
    }
  };
});
