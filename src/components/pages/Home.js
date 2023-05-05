import React from "react";
import phone from '../../image/phone.png';

const Home =()=> {
  const bookPhoto = phone;
  return (
  <>
    <h1>Вітаємо, створи свою книгу контактів</h1>
    <img src={bookPhoto} alt="phonebook" />
  </>
  );
};

export default Home;