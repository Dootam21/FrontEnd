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


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
         if (username === '' || password === '') {
            setErrorMessage('Please enter a username or password')
        }
        else if (username !== 'admin' && password !== 'admin'){
            setErrorMessage('Incorrect username or password. Please try again.');
        }
        else {
            window.location.href = "/home";
            setErrorMessage('');
            setUsername('');
            setPassword('');
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword)
    }
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
                            paddingTop={25}
                        >
                            <h1 style={{ backgroundColor: "#3990FF", color: "white", width: "100%" }}>Login</h1>
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
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                marginY={2}
                                sx={{ m: 1, width: '100%' }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Remember me"

                                />
                                <Link to="/getPassword">Forgot password?</Link>
                            </Stack>
                            <div style={{ backgroundColor: "none", height: "20" }}>
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            </div>
                            <Button
                                type="submit" variant="outlined"
                                sx={{ m: 1, width: '100%' }}
                            >Sign in
                            </Button>
                            <Stack
                                direction="row"
                            >
                                Don't have an account
                                <Link to="/register">Sign up here</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>

            </form >
        </div>
    )
}

export default Login