import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, IconButton, InputBase, Radio, Select, TextField, Typography, withStyles } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import moment from "moment";
import React from "react";
import clsx from "clsx"
import { useGenderStyles, useSignUpOutlineStyles, useSignUpStyles } from "./index_styles";

const getYears = () => {
    const currentYear = new Date().getFullYear()
    const years = [];
    let startYear = 1960;
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
}

const getMonths = () => {
    return moment.months().map(month => month.substring(0, 3))
}

const getDays = () => {
    let days = []
    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }
    return days
}

const OutlineTextField = (props) => {
    const classes = useSignUpOutlineStyles()
    return (
        <TextField
            variant="outlined"
            InputProps={{ classes }}
            {...props}
        />
    )
}

const SelectInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        height: 24,
        width: 83,
        position: 'relative',
        border: '0.5px solid rgba(0, 0, 0, 0.23)',
        fontSize: 15,
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '&:focus': {
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.23)",
            background: "transparent"
        },
    },
}))(InputBase);

const CustomSelect = ({ options, name, ...restProps }) => {
    return (
        <FormControl variant="outlined">
            <Select
                native
                inputProps={{
                    name,
                }}
                input={<SelectInput />}
                {...restProps}
            >
                {options.map(option => <option value={option}>{option}</option>)}
            </Select>
        </FormControl>
    )
}

const Gender = ({ checked, onChange, onClick, label, name, ...other }) => {
    const classes = useGenderStyles()
    return (
        <div className={classes.radioContainer} onClick={onClick} name={name} {...other}>
            <FormLabel className={classes.label}>{label}</FormLabel>
            <Radio size="small"
                name={name}
                color="primary"
                disableRipple
                disableFocusRipple
                value={label}
                checked={checked}
                onChange={onChange} />
        </div>
    )
}

const initialUserDetails = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: ""
}

const SignUp = (props) => {
    const { open, onClose, onClick } = props
    const classes = useSignUpStyles()
    const [userDetails, setUserDetails] = React.useState(initialUserDetails)
    const [loading, setLoading] = React.useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleClick = (value) => {
        setUserDetails(prevState => ({
            ...prevState,
            gender: value
        }))
    }

    const handleSignUpClick = async () => {
        try {
            const { firstName, surname, email, day, month, year, gender, password } = userDetails
            const userToSend = {
                displayName: `${userDetails.firstName} ${userDetails.surname}`,
                firstName,
                surname,
                email,
                dob: `${day}-${month}-${year}`,
                gender,
                password
            }
            await onClick(userToSend)
            setUserDetails(initialUserDetails)
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog onClose={onClose} open={open} classes={{ paper: classes.paper }} disableBackdropClick>
            <DialogTitle className={classes.dialogTitle}>
                <div className={classes.dialogHeader}>
                    <Typography className={classes.title}>Sign Up</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon color="action" />
                    </IconButton>
                </div>
                <Typography className={classes.subtitle}>It's quick and easy.</Typography>
            </DialogTitle>
            <DialogContent dividers className={classes.content}>
                <OutlineTextField
                    placeholder="First name"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleChange}
                    className={classes.firstname}
                />
                <OutlineTextField
                    placeholder="Surname"
                    name="surname"
                    value={userDetails.surname}
                    onChange={handleChange}
                />
                <OutlineTextField
                    placeholder="Email address"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    type="Email"
                    fullWidth
                />
                <OutlineTextField
                    placeholder="New password"
                    name="password"
                    value={userDetails.password}
                    onChange={handleChange}
                    fullWidth
                />
                <FormLabel component="legend" className={classes.smallTitle}>Date of birth</FormLabel>
                <CustomSelect name="day"
                    options={getDays()}
                    className={classes.customSelect}
                    value={userDetails.day}
                    onChange={handleChange} />
                <CustomSelect name="month"
                    options={getMonths()}
                    className={classes.customSelect}
                    value={userDetails.month}
                    onChange={handleChange} />
                <CustomSelect name="year"
                    options={getYears()}
                    value={userDetails.year}
                    onChange={handleChange} />
                <FormLabel component="legend" className={classes.smallTitle}>Gender</FormLabel>
                <div className={classes.radioButtons}>
                    <Gender name="gender"
                        label={"male"}
                        checked={userDetails.gender === "male"}
                        onChange={handleChange}
                        onClick={() => handleClick("male")} />
                    <Gender name="gender"
                        label={"female"}
                        checked={userDetails.gender === "female"}
                        onChange={handleChange}
                        onClick={() => handleClick("female")} />
                    <Gender name="gender"
                        label={"other"}
                        checked={userDetails.gender === "other"}
                        onChange={handleChange}
                        onClick={() => handleClick("other")} />
                </div>
                <div className={classes.wrapper}>
                    <Button variant="contained"
                        onClick={handleSignUpClick}
                        disabled={loading}
                        className={clsx(classes.coloredButton, classes.button)}>
                        Sign Up
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SignUp