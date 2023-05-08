import { NavLink } from "react-router-dom";
import { Container, Typography } from '@mui/material';

const AuthNav = () => (
  <Container sx={{ display: 'flex', alignItems: 'center', mr: '1.5rem', alignContent: 'center' }}>
    <NavLink to="/register" style={{ textDecoration: 'none' }}>
    <Typography variant="button" color="secondary" align="center" >Register</Typography>
      
    </NavLink>

    <NavLink to="/login" style={{ textDecoration: 'none' }}>
    <Typography variant="button" color="secondary" align="center" marginLeft='12px'>Login</Typography>
    </NavLink>
  </Container>
);

export default AuthNav;
