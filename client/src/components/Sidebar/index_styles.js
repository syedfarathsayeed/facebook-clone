import { makeStyles } from "@material-ui/core";

export const useSidebarStyles = makeStyles((theme) => {
  return {
    listItemIcon: {
      minWidth: 45,
    },
    listItemText: {
      fontSize: 15,
      fontWeight: 500,
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;",
    },
    list: {
      maxWidth: 340,
      marginRight: 120
    },
    listButton: {
      borderRadius: 10,
      padding: theme.spacing(2),
    },
  };
});
