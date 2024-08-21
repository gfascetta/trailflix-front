import { useState } from 'react';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, FormHelperText,  Stack } from '@mui/material';

export const Login = ({name, edadPorFecha, fechaNac, countValue, handleSetCount, }) => {

    const [span, setSpan] = useState("");

    const pasarAMayus = (str) => {
        setSpan("hola".concat(' ',str).toUpperCase().split("").reverse().join(""));
    }

    return (
        <div>
            <h1>Hello {name}, edad:{edadPorFecha(fechaNac)}</h1>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input 
                    id="my-input" 
                    aria-describedby="my-helper-text"
                    onChange={(e) => pasarAMayus(e.target.value)}
                />
                <span>{span}</span>
                <FormHelperText id="my-helper-text">We'll never share your email</FormHelperText>
            </FormControl>
            <h2>Count: {countValue}</h2>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => handleSetCount(countValue+1)}>Add count +1</Button>
                <Button variant="contained" onClick={() => handleSetCount(0)}>reset</Button>
            </Stack> 
        </div>
       
    );
        
}

Login.propTypes = {
    name: PropTypes.string,
    edadPorFecha: PropTypes.func.isRequired,
    fechaNac: PropTypes.string.isRequired,
    countValue: PropTypes.number.isRequired,
    handleSetCount: PropTypes.func.isRequired,
};