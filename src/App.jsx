//import { Button } from "@mui/material";
import { useState } from 'react';
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { Login } from "./pages/login/components/Login";


export default function App(){

  const [count, setCount] = useState(0);

  const logUseState = (fn) => (value) => {
    console.log('wrapUseState value', value);
    fn(value);
  }

  const setCountLog = (value) => {
    console.log('wrapUseState value', value);
    setCount(value);
  }


  const edadPorFechaFn = (fafafa) => {
    const hoy = new Date()
    const nacimiento = new Date(Date.parse(fafafa))
    return hoy.getFullYear() - nacimiento.getFullYear();
  };

  return(
    <Container maxWidth="md" sx={{boxshadow:3, pb: 2}}>
    <h1>App</h1>
    <Button variant="contained">un botoncito que no hace nada</Button>
    <Login
      countValue={count}
      handleSetCount={setCount}
      name="fulano" 
      fechaNac="1993-11-30T13:51:50.417-07:00" 
      edadPorFecha={edadPorFechaFn}
      jrjrjr= "jajajaj"
    />
    </Container>
  )
}