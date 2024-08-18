//import { Button } from "@mui/material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";


export default function App(){
  return(
    <Container maxWidth="md" sx={{boxshadow:3, pb: 2}}>
    <h1>App</h1>
    <Button variant="contained">un botoncito</Button>
    </Container>
  )
}