import { Button, Divider, Paper, TextField, Typography, CircularProgress } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import facebookLogo from "../../resources/facebook.svg"
import SignUp from "./SignUp"
import { auth, createUserProfileDocument, useFirebase } from "../../firebase/firebaseUtils"
import { useLogoComponentStyles, useOutlineStyles, useSignInCardStyles, useSignInStyles } from "./index_styles"
import { useHistory } from "react-router-dom"
import { useToken } from "../../cookies"

const OutlineTextField = (props) => {
    const classes = useOutlineStyles()
    return (
        <TextField
            variant="outlined"
            InputProps={{ classes }}
            {...props}
        />
    )
}

const SignInCard = () => {
    const history = useHistory()
    const classes = useSignInCardStyles()
    const {login} = useFirebase()
    const {setToken} = useToken()
    const [user, setUser] = React.useState({ email: "", password: "" })
    const [openCreateDialog, setOpenCreateDialog] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleUserChange = (e) => {
        const updatedUser = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(updatedUser)
    }

    const handleCreateClick = () => {
        setOpenCreateDialog(true)
    }

    const handleCloseDialog = () => setOpenCreateDialog(false)

    const handleSignUpClick = async (userDetails) => {
        const { email, password, ...rest } = userDetails
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, { ...rest })
        } catch (error) {
            alert(error)
        } finally {
            setOpenCreateDialog(false)
        }
    }

    const handleSignIn = async () => {
        setLoading(true)
        try {
            const res = await login(user.email, user.password)
            setToken(res.user.refreshToken)
            history.push("/home")
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSignIn()
        }
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <OutlineTextField
                    name="email"
                    value={user.email}
                    onChange={handleUserChange}
                    placeholder="Email"
                    fullWidth
                    onKeyDown={handleKeyDown}
                />
                <OutlineTextField
                    name="password"
                    value={user.password}
                    onChange={handleUserChange}
                    placeholder={"Password"}
                    fullWidth
                    type="password"
                    onKeyDown={handleKeyDown}
                />
                <div className={classes.wrapper}>
                    <Button variant="contained"
                        fullWidth
                        color="primary"
                        onClick={handleSignIn}
                        disabled={loading}
                        className={classes.button}>
                        Log In
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
                <div className={classes.typography}>Not a member?</div>
                <Divider className={classes.divider} />
                <Button variant="contained"
                    onClick={handleCreateClick}
                    className={clsx(classes.coloredButton, classes.button)}>
                    Create New Account
                    </Button>
            </Paper>
            <div className={classes.footer}>
                <strong>Create a page</strong>
                <Typography>{`for a celebrity, brand or business`}</Typography>
            </div>
            <SignUp open={openCreateDialog}
                onClose={handleCloseDialog}
                onClick={handleSignUpClick} />
        </div>
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