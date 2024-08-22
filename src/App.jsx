import { Container } from "@mui/material";
import { Login } from "./pages/login/components/Login";


export default function App(){

  return(
    <Container maxWidth="md" sx={{boxshadow:3, pb: 2}}>
    
      <Login
        // nombreprops=valor
      />
    </Container>
  )
}