import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from 'redux/auth/authSelectors';
import { AppBar, Box, Toolbar, Grid } from '@mui/material';

export const NavigationBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid container spacing={1} >
            <Grid item xs={6} md={8}>
              <Navigation />
            </Grid>
            {isLoggedIn ? (
              <Grid item xs={6} md={4}>
                <UserMenu />
              </Grid>
            ) : (
              <Grid item >
                <AuthNav />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
