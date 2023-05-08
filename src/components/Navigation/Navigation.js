import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav display="flex">
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          mr: '1.5rem',
          alignContent: 'center',
        }}
      >
        <NavLink to="/" exact="true" style={{ textDecoration: 'none' }}>
          <Typography
            variant="button"
            noWrap
            color="secondary"
            align="center"
            marginLeft="12px"
          >
            <HomeIcon
              color="secondary"
              sx={{ alignItems: 'center', mr: '6px', alignContent: 'center' }}
            />
            Home
          </Typography>
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
            <Typography
              variant="button"
              noWrap
              color="secondary"
              align="center"
              marginLeft="12px"
            >
              <ContactPhoneIcon
                color="secondary"
                sx={{ alignItems: 'center', mr: '6px', alignContent: 'center' }}
              />
              My phonebook
            </Typography>
          </NavLink>
        )}
      </Container>
    </nav>
  );
};
