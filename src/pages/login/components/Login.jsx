import { useState} from 'react';
import { useNavigate} from 'react-router-dom';
import {FormControl, TextField, Container, Button, Avatar, IconButton, InputAdornment} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { login } from '../../../service/userService';
import { console_log_debug } from '../../../utils/logging';
import { useUserContext, useUserInfoContext } from '../../../hooks/useUserContext';

export const Login = () => {

    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");

    //password handling
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const {user, handleUser} = useUserContext();
    const {handleUserInfo} = useUserInfoContext();

    const navigate = useNavigate();

    const handleValidation = (e) => {
        //validates the password
        const reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$");
        setValid(reg.test(e.target.value));
        setValue(e.target.value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
         event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuarioIngresado = {username: username, password: password}
        const usuarioRecuperado =  login(usuarioIngresado)
        console_log_debug("usuario ingresado:", usuarioIngresado);
        handleUser(usuarioIngresado);
        console_log_debug('usuario del contexto: ', user)
        if (usuarioRecuperado){
            handleUserInfo(usuarioRecuperado)
            navigate('/me');
        } else {alert('invalid or unexisting credentials')}
    }
  

    return (
        <Container>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main'}}>
                <LockOutlinedIcon />
            </Avatar>

            <h1>Sign in</h1>
                <FormControl component="form" onSubmit={handleSubmit} variant="outlined">
                    {/* TODO: textfield puede abstraerse como componente que reciba como props id, label y una fn para el oninput */}
                    <TextField 
                        id="username"
                        label="Username"
                        variant="outlined"
                        required
                        onInput={(e) => setUsername(e.target.value)}
                        maxLength="40"
                    />
                    <br />
                    <TextField 
                        id="password"
                        placeholder='Password'
                        label="Password"
                        value={value}
                        required
                        onChange={(e) => handleValidation(e)}
                        error={!valid}
                        type={showPassword ? 'text' : 'password'}
                        onInput={(e) => setPassword(e.target.value)}
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
                    {/* <Button onClick={() => navigate(-1)} >Go back</Button> */}
                </FormControl>
        </Container>
    );
}