import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import user from '../../image/user.png';
import authOperations from 'redux/auth/authOperations';
import { Container, Typography, Button } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = user;

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: '1.5rem',
        alignContent: 'center',
      }}
    >
      <img src={avatar} alt="avatar" width="32" marginRight="6px" />
      <Typography variant="body1" marginRight="6px">
        З поверненням, {name}
      </Typography>
      <Button
        type="button"
        variant="outlined"
        size="medium"
        color="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </Button>
    </Container>
  );
}
