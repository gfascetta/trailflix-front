import PropTypes from "prop-types";
import { Container } from "@mui/material";
import { Login } from "./pages/login/components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from './pages/userProfile/components/UserProfile';
import {UserProvider} from "./contexts/UserProvider";
import { useUserContext} from './hooks/useUserContext';


const RoutesList = () => (

  <Routes>

    <Route
      path='/' 
      exact element={<h1>Home Page Component</h1>} />

    <Route
      path='/login' 
      exact element={
        <Container maxWidth="md" sx={{boxshadow:3, pb: 2}} >
          <Login />
        </Container>
    } />
    {/* <Route path="/private" element={user.isAuthenticated ? <PrivatePage /> : <Navigate to="/login" replace />} /> */}
    {/*<Route path='*' component={<Navigate to='/' />} />*/}
    
    <Route 
      path='/me' 
      exact element={
        <UserProfile />
    } />
    
    <Route path='*' element={<h1>NOT FOUND</h1>} />
  
  </Routes>
);



export default function App(){

  const user = useUserContext();

  return(
    <Router>
     <UserProvider>
       <RoutesList usuario={user} />
     </UserProvider>
    </Router>
  )
}

RoutesList.propTypes = {
  usuario: PropTypes.any,
}