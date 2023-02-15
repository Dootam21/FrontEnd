import { useState } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [CfPassword, setCfPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showCfPassword, setShowCfPassword] = useState("");
    const [checkTerm, setCheckTerm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== CfPassword) {
            setErrorMessage('Confirm password is not correct');
        }
        else if (email === '' || username === '' || password === '' || CfPassword === '') {
            setErrorMessage('Please fill out all required fields');
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setErrorMessage('Invalid email address');
        }
        else if (email === 'admin@example.com') {
            setErrorMessage('This email is already used by another user');
        }
        else if (username === 'admin') {
            setErrorMessage('This username is already used by another user');
        }
        else if (checkTerm === false) {
            setErrorMessage('Please agree to the terms and conditions');
        } 
        else {
            window.location.href = '/login';
            setErrorMessage('');
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword)
    }
    const handleClickShowCfPassword = () => {
        setShowCfPassword((showCfPassword) => !showCfPassword)
    }
    const handleBlur = () => {
        // Check if the email is valid
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setErrorMessage('Invalid email address');
        }
    };
    const handleChange = (event) => {
        setEmail(event.target.value);
        setErrorMessage('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: 500,
                            height: 500,
                        }}
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            paddingTop={20}
                        >
                            <h1 style={{ backgroundColor: "#3990FF", color: "white", width: "100%" }}>Register</h1>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                                <Input
                                    id="standard-basic"
                                    label="Email Address"
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errorMessage !== ''}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                                <Input
                                    id="standard-basic"
                                    label="Username"
                                    variant="standard"
                                    onChange={(e) => setUsername(e.target.value)}
                                    error={errorMessage !== ''}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={errorMessage !== ''}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Confirm password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showCfPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowCfPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            >
                                                {showCfPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={(e) => setCfPassword(e.target.value)}
                                    error={errorMessage !== ''}
                                />
                            </FormControl>
                            <Stack
                                sx={{ m: 1, width: '100%' }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="I accept the terms and conditions"
                                    checked={checkTerm}
                                    onClick={(e) => setCheckTerm(true)}
                                />
                            </Stack>
                            <div style={{ backgroundColor: "none", height: "20" }}>
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            </div>
                            <Button
                                type="submit" variant="outlined"
                                sx={{ m: 1, width: '100%' }}
                            >Sign up
                            </Button>
                            <Stack
                                direction="row"
                            >
                                Already have an account?
                                <Link to="/login">Sign in here</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </form >
        </div>
    )
}

export default Register