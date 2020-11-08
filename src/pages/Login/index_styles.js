import { fade, makeStyles } from "@material-ui/core/styles";

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
  },
  coloredButton: {
    background: "#42B72A",
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
    wordSpacing: 1.2
  },
}));

export const useOutlineStyles = makeStyles((theme) => {
  const borderColor = 'rgba(0, 0, 0, 0.23)';
  return ({
      root: {
          position: 'relative',
          borderRadius: 5,
          caretColor: theme.palette.primary.main,
          '& $notchedOutline': {
              borderColor,
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
              borderColor,
              '@media (hover: none)': {
                  borderColor,
              },
          },
          '&$focused $notchedOutline': {
              borderColor: theme.palette.primary.main,
              boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
              borderWidth: 1,
          },
          '&$error $notchedOutline': {
              borderColor: theme.palette.error.main,
          },
          '&$disabled $notchedOutline': {
              borderColor: theme.palette.action.disabled,
          },
      },
      focused: {},
      disabled: {},
      error: {},
      notchedOutline: {}
  })
});
