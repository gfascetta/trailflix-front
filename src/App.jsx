import React from 'react';
import { Container } from "@mui/material";
import { Login } from "./pages/login/components/Login";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

const RoutesList = () => (
  <Routes>
    <Route path='/' exact element={<h1>Home Page Component</h1>} />
    <Route path='/login' exact element={
      <Container maxWidth="md" sx={{boxshadow:3, pb: 2}} centered >
        <Login centered />
        {/* <button onClick={handleGoBack}>Go Back</button> */}
      </Container>
    } />
    {/* <Route path="/private" element={user.isAuthenticated ? <PrivatePage /> : <Navigate to="/login" replace />} /> */}
    {/*<Route path='*' component={<Navigate to='/' />} />*/}
     <Route path='*' element={<h1>NOT FOUND</h1>} />
  </Routes>
);

export default function App(){

  // const history = useHistory();
 
  // const handleGoBack = () => {
  //   history.goBack();
  // };
  
  return(
    <Router>
      <RoutesList />
    </Router>
  )
}