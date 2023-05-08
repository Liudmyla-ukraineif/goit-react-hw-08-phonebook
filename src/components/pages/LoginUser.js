import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../../redux/auth/authOperations';
import { Typography, Box, TextField, Button } from '@mui/material';


const LoginUser = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.LogIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <>
      <Typography variant="h2" component="h1" color="primary" align="center">
        Вітаємо, зайдіть в свій обліковий запис.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            id="input-with-icon-textfield"
            label="Ел.пошта"
            variant="standard"
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            sx={{ mb: '1.5rem' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            id="input-with-icon-textfield"
            label="Пароль"
            variant="standard"
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            sx={{ mb: '1.5rem' }}
          />
        </Box>
        <Button type="submit" variant="outlined" size="medium">
          Вхід
        </Button>
      </form>
    </>
  );
};
export default LoginUser;
