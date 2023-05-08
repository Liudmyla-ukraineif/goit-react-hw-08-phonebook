import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../../redux/auth/authOperations';
import Box from '@mui/material/Box';
import { Container, Typography, TextField, Button } from '@mui/material';

const RegisterUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <Container sx={{ mt: '1rem' }}>
      <Typography variant="h2" component="h1" color="primary" align="center">
        Вітаємо, створіть свій обліковий запис.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            id="input-with-icon-textfield"
            label="Ім'я"
            variant="standard"
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            sx={{ mb: '1.5rem' }}
          />
        </Box>

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

        <Button type="submit" variant="outlined" color="primary" size="medium">
          Зареєструватися
        </Button>
      </form>
    </Container>
  );
};
export default RegisterUser;
