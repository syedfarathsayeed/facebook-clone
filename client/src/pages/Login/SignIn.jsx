import { Button, Divider, Paper, TextField, Typography } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import facebookLogo from "../../resources/facebook.svg"
import { useLogoComponentStyles, useOutlineStyles, useSignInCardStyles, useSignInStyles } from "./index_styles"

const SignInCard = () => {

    const classes = useSignInCardStyles()
    const outlineClasses = useOutlineStyles()
    const [user, setUser] = React.useState({ email: "", password: "" })

    const handleUserChange = (e) => {
        const updatedUser = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(updatedUser)
    }

    const handleGoogleSignInClick = () => {
    }

    return (
        <>
            <div>
                <Paper className={classes.paper}>
                    <TextField
                        name="email"
                        value={user.email}
                        onChange={handleUserChange}
                        placeholder="Email"
                        variant="outlined"
                        fullWidth
                        InputProps={{ classes: outlineClasses }}
                    />
                    <TextField
                        name="password"
                        value={user.password}
                        onChange={handleUserChange}
                        placeholder={"Password"}
                        variant="outlined"
                        fullWidth
                        type="password"
                        InputProps={{ classes: outlineClasses }}
                    />
                    <Button variant="contained"
                        fullWidth
                        color="primary"
                        className={classes.button}>
                        Log In
                    </Button>
                    <div className={classes.typography}>Not a member?</div>
                    <Divider className={classes.divider} />
                    <Button variant="contained"
                        onClick={handleGoogleSignInClick}
                        className={clsx(classes.coloredButton, classes.button)}>
                        Sign in with google
                    </Button>
                </Paper>
                <div className={classes.footer}>
                    <strong>Create a page</strong>
                    <Typography>{`for a celebrity, brand or business`}</Typography>
                </div>
            </div>
        </>
    )
}

const LogoComponent = () => {

    const classes = useLogoComponentStyles()

    return (
        <div className={classes.information}>
            <img src={facebookLogo} alt="facebook" height="105" width="600" className={classes.image} />
            <h2 className={classes.info}>Connect with friends and world around facebook</h2>
        </div>
    )
}


const SignIn = () => {
    const classes = useSignInStyles()

    return (
        <div className={classes.root}>
            <LogoComponent />
            <SignInCard />
        </div>
    )
}

export default SignIn