import {Avatar, Button, ButtonGroup, Card, CardContent, CardActions, Typography} from '@mui/material';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

export default function UserProfile({firstName, lastName, username, birthDate, registerDate, lastUpdate}) {
  
  const navigate = useNavigate();
  
  return (
    <Card sx={{maxWidth: '100%', boxShadow: 'lg' }}>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar />

        <Typography level="title-lg">{username.toUpperCase()}</Typography>
        
        <Typography gutterBottom variant="h5" component="div">
          {firstName}, {lastName}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Birthdate: {birthDate}
        </Typography>

        <br />

        <Typography align='left'>
          Last Update: {lastUpdate}
        </Typography>
        
        <Typography align='left'>
          Register Date: {registerDate}
        </Typography>

      </CardContent>
      
      <CardActions buttonflex="1">
        <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }} >
          <Button onClick={() => navigate(-1)} >Go back</Button>
          <Button>See My Content</Button>
        </ButtonGroup>
      </CardActions>

    </Card>
  );
}

UserProfile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  birthDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  registerDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  lastUpdate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]).isRequired
};