import PropTypes from "prop-types";
import { useNavigate} from 'react-router-dom';
import {Avatar, Button, ButtonGroup, Card, CardContent, CardActions, Typography} from '@mui/material';
import { useUserContext, useUserInfoContext } from "../../../hooks/useUserContext";

export default function UserProfile() {
  
  const navigate = useNavigate();

  const {user} = useUserContext();
  
  const {userInfo} = useUserInfoContext();
  
  const username = user.username
  
  return (
    <Card sx={{maxWidth: '100%', boxShadow: 'lg'}}>
      <CardContent sx={{ alignItems:'center', textAlign:'center' }}>
        <Avatar />

        <Typography level="title-lg">{username.toUpperCase()}</Typography>
        
        <Typography gutterBottom variant="h5" component="div">
          {userInfo.firstName}, {userInfo.lastName}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Birthdate: {userInfo.birthDate}
        </Typography>

        <br />

        <Typography align='left'>
          Last Update: {userInfo.lastUpdate}
        </Typography>
        
      </CardContent>
      
      <CardActions buttonflex="1">
        <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }} >
          <Button onClick={()=>navigate('/login')} >Go Back</Button>
          <Button onClick={()=>{console.log('test')}}>See My Content</Button>
        </ButtonGroup>
      </CardActions>

    </Card>
  );
}

UserProfile.propTypes = {
  userDTO: PropTypes.object
};