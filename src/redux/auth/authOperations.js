import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//реєстрація нового користувача (передача імені, пошти та паролю, отримання token)
const register = createAsyncThunk('auth/register', async credenials => {
  try {
    const { data } = await axios.post('/users/signup', credenials);
    token.set(data.token);
    // console.log(data.user);
    return data;
  } catch (error) {
    console.log('error', error.message);
  }
});

//логування користувача (передача пошти та паролю), отримання token
const LogIn = createAsyncThunk('auth/login', async credenials => {
  try {
    const { data } = await axios.post('/users/login', credenials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('error', error.message);
  }
});

//розлогування, після успішного розлогування видаляємо token
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log('error', error.message);
  }
});

const authOperations = {
  register,
  LogIn,
  logOut,
};

export default authOperations;
