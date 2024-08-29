import { Container } from "@mui/material";
import { Login } from "./pages/login/components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from './pages/userProfile/components/UserProfile';

const RoutesList = () => (
  <Routes>
    <Route path='/' exact element={<h1>Home Page Component</h1>} />
    <Route path='/login' exact element={
      <Container maxWidth="md" sx={{boxshadow:3, pb: 2}} >
        <Login />
        {/* <button onClick={handleGoBack}>Go Back</button> */}
      </Container>
    } />
    {/* <Route path="/private" element={user.isAuthenticated ? <PrivatePage /> : <Navigate to="/login" replace />} /> */}
    {/*<Route path='*' component={<Navigate to='/' />} />*/}
    <Route path='/me' exact element={
      <UserProfile 
          firstName= 'firstname'
          lastName= 'lastname'
          username= 'username' 
          birthDate=  {Date("1995-12-17T03:24:00")}
          registerDate=  {Date("1995-12-17T03:24:00")}
          lastUpdate=  {Date("1995-12-17T03:24:00")}
      />
    } />
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