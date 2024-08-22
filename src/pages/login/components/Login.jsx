import { useState } from 'react';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { FormControl, TextField} from '@mui/material';

export const Login = ({name, edadPorFecha, fechaNac, countValue, handleSetCount,  }) => {


    const [value, setValue] = useState(""); 
    //const [result, setResult] = useState(""); 

    function handleSubmit(e) { 
        e.preventDefault();
        console.log("evento: ", e);
        console.log("target :", e.target);
        console.log("primer input: ", e.target[0]); // no me parece piola. si cambio el form va a apuntar a otro componente.
        console.log("value primer input: ", e.target[0].value); 


        //setResult("Form has been submitted with with Input: " + value ); 
        console.log("SUBMITEADO");
        // validar los campos. que no esten empty y que la password cumpla requisitos
        // sino que los marque rojos
    } 
  
    function handleChange(e) { 
        setValue(e.target.value); 
        //setResult(""); 
    } 

    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h1>Sign in</h1>
            <FormControl component="form" onSubmit={handleSubmit}>
                {/* textfield puede abstraerse como componente que reciba como props id, label y una fn para el oninput */}
                <TextField 
                    id="username"
                    label="Username"
                    variant="outlined"
                    required="true"
                    //onChange={(e) => console.log("username: ", e.target.value)}
                    onInput={handleChange}
                />
                <br />
                <TextField 
                    id="password"
                    label="Password"
                    variant="outlined"
                    required="true"
                    //onChange={(e) => console.log("password: ", e.target.value)}
                    onInput={handleChange}
                    // error="true"
                />
                <br />
                <Button type="submit" variant="contained">Sign in</Button>
            </FormControl>
            {/* <div> 
                <h4>{result}</h4> 
            </div>  */}
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