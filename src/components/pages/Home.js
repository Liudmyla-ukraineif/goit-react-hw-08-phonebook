import React from 'react';
import { Container, Typography } from '@mui/material';
import phone from '../../image/phone.png';

const Home = () => {
  const bookPhoto = phone;
  return (
    <Container>
      <Typography variant="h2" component="h1" color="primary" align="center">
        Вітаємо, створи свою книгу контактів
      </Typography>
      <img src={bookPhoto} alt="phonebook" />
    </Container>
  );
};

export default Home;
