import { useState } from 'react';
import PropTypes from "prop-types";
import {FormControl, TextField, Container, Button, Avatar, IconButton, InputAdornment} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Visibility, VisibilityOff} from '@mui/icons-material';

export const Login = () => {

    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
  
    const handleValidation = (e) => {
        const reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$");
        setValid(reg.test(e.target.value));
        setValue(e.target.value);
      };

     const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
         event.preventDefault();
    };

    const handleSubmit = (e) => {

        e.preventDefault();
    } 
  

    return (
        <Container centered>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main'}}>
                <LockOutlinedIcon />
            </Avatar>
            <h1>Sign in</h1>
            <FormControl component="form" onSubmit={handleSubmit} variant="outlined">
                {/* textfield puede abstraerse como componente que reciba como props id, label y una fn para el oninput */}
                <TextField 
                    id="username"
                    label="Username"
                    variant="outlined"
                    required="true"
                    onInput={(e) => setUser(e.target.value)}
                    maxLength="40"
                />
                <br />
                <TextField 
                    id="password"
                    placeholder='Password'
                    label="Password"
                    value={value}
                    required="true"
                    onChange={(e) => handleValidation(e)}
                    error={!valid}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }}
                />
                <br />
                <Button type="submit" variant="contained">Sign in</Button>
            </FormControl>
        </Container>
    );
}

Login.propTypes = {
    name: PropTypes.string,
    edadPorFecha: PropTypes.func.isRequired,
    fechaNac: PropTypes.string.isRequired,
    countValue: PropTypes.number.isRequired,
    handleSetCount: PropTypes.func.isRequired,
};