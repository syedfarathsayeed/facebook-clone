import { makeStyles } from "@material-ui/core";

export const useSearchBarStyles = makeStyles((theme) => {
  const borderColor = "transparent";
  return {
    container: {
      width: 410,
    },
    root: {
      borderRadius: 50,
      height: 40,
      width: 240,
      background: theme.palette.background.default,
      marginLeft: theme.spacing(2),
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
    notchedOutline: {
      borderColor: "transparent",
    },
  };
});

export const useTooltipStyles = makeStyles((theme) => {
  const background = "#464545";
  return {
    tooltip: {
      background,
    },
    arrow: {
      color: background,
    },
  };
});

export const useTabsStyles = makeStyles((theme) => {
  return {
    tabs: {
      paddingRight: 110,
      paddingLeft: 25,
    },
    icon: {
      fontSize: 29,
    },
    indicator: {
      height: 3,
    },
  };
});

export const useIconButtonStyles = makeStyles((theme) => {
  return {
    root: {
      background: theme.palette.background.default,
      color: "black",
    },
  };
});

export const useActionBarStyles = makeStyles((theme) => {
  return {
    actions: {
      display: "flex",
      alignItems: "center",
      "&>*:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
    avatar: {
      display: "flex",
      alignItems: "center",
      borderRadius: 50,
      "&>*": {
        marginRight: theme.spacing(1),
      },
      "&:hover": {
        background: theme.palette.background.default,
      },
    },
    typography: {
      fontWeight: "bold",
      marginRight: "10px !important",
    },
  };
});

export const useAppbarStyles = makeStyles((theme) => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      background: "white",
      width: "100%",
      height: 56,
      paddingLeft: theme.spacing(2),
    },
  };
});

export const useTabStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: 110,
      maxWidth: 110,
      height: 55,
      "&:hover": {
        background: theme.palette.background.default,
        borderRadius: 10,
      },
    },
  };
});
