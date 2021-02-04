import { darken, fade, makeStyles } from "@material-ui/core/styles";

export const useSignInStyles = makeStyles((theme) => ({
  root: {
    marginTop: 110,
    padding: "20px 0",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
}));

export const useSignInCardStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    boxSizing: "border-box",
    boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
    "&>*:not(:first-child)": {
      margin: theme.spacing(1),
    },
    "&>*:first-child": {
      marginBottom: theme.spacing(1),
    },
    "&>*:nth-last-child(-n+2)": {
      marginTop: theme.spacing(3),
    },
    "&>*:last-child": {
      marginBottom: theme.spacing(3),
    },
  },
  button: {
    height: 50,
    padding: theme.spacing(3),
    textTransform: "capitalize",
    color: theme.palette.secondary.light,
    fontWeight: "bolder",
    fontSize: "18px",
    "&:hover": {
      background: darken(theme.palette.primary.main, 0.1),
    },
  },
  coloredButton: {
    background: "#42B72A",
    "&:hover": {
      background: darken("#42B72A", 0.1),
    },
  },
  divider: {
    background: "lightgrey",
    width: "100%",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>*": {
      margin: 3,
      marginTop: theme.spacing(4),
    },
  },
  typography: {
    marginTop: "20px !important",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
}));

export const useLogoComponentStyles = makeStyles((theme) => ({
  information: {
    marginRight: 110,
    marginLeft: 250,
    marginTop: "-120px !important",
    maxWidth: 430,
  },
  image: {
    marginLeft: -184,
    marginBottom: -5,
  },
  info: {
    margin: 0,
    padding: 0,
    fontSize: 28,
    fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
    lineHeight: "28px",
    fontWeight: 500,
    color: "#1c1e21",
    wordSpacing: 1.2,
  },
}));

export const useOutlineStyles = makeStyles((theme) => {
  const borderColor = "rgba(0, 0, 0, 0.23)";
  return {
    root: {
      position: "relative",
      borderRadius: 5,
      caretColor: theme.palette.primary.main,
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
        borderColor: theme.palette.primary.main,
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
        borderWidth: 1,
      },
      "&$error $notchedOutline": {
        borderColor: theme.palette.error.main,
      },
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.action.disabled,
      },
    },
    focused: {},
    disabled: {},
    error: {},
    notchedOutline: {},
  };
});

export const useSignUpStyles = makeStyles((theme) => {
  return {
    paper: {
      maxWidth: 432,
    },
    dialogTitle: {
      padding: "10px 5px 10px 15px",
    },
    dialogHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 32,
      marginBottom: 0,
      color: "#1c1e21",
      fontWeight: 600,
      fontFamily: "SFProDisplay-Bold, Helvetica, Arial, sans-serif",
    },
    subtitle: {
      color: "#606770",
    },
    content: {
      padding: theme.spacing(3),
    },
    firstname: {
      marginRight: 13,
    },
    smallTitle: {
      fontSize: 12,
      color: "#606770",
      margin: 2,
    },
    customSelect: {
      marginRight: theme.spacing(2),
    },
    radioButtons: {
      display: "flex",
      alignItems: "center",
      "&>*:not(:last-child)": {
        marginRight: theme.spacing(2),
      },
    },
    coloredButton: {
      background: "#42B72A",
      "&:hover": {
        background: darken("#42B72A", 0.1),
      },
    },
    button: {
      height: 36,
      width: 194,
      margin: "25%",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
      textTransform: "capitalize",
      color: theme.palette.secondary.light,
      fontWeight: "bolder",
      fontSize: "18px",
      "&:hover": {
        background: darken(theme.palette.primary.main, 0.1),
      },
    },
  };
});

export const useSignUpOutlineStyles = makeStyles((theme) => {
  const borderColor = "rgba(0, 0, 0, 0.23)";
  return {
    root: {
      position: "relative",
      borderRadius: 5,
      height: 40,
      marginBottom: theme.spacing(2),
      minWidth: 194,
      background: "#f2f3f4",
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
        borderWidth: 0.5,
      },
      "&$error $notchedOutline": {
        borderColor: theme.palette.error.main,
      },
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.action.disabled,
      },
    },
    focused: {},
    disabled: {},
    error: {},
    notchedOutline: {},
  };
});

export const useGenderStyles = makeStyles((theme) => {
  return {
    radioContainer: {
      border: "0.5px solid rgba(0, 0, 0, 0.23)",
      borderRadius: 4,
      height: 18,
      width: 115,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      paddingRight: 0,
      "&:hover": {
        cursor: "pointer",
      },
    },
    label: {
      color: "black",
      textTransform: "capitalize",
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
});
