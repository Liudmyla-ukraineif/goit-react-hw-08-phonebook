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
const register = createAsyncThunk(
  'auth/register',
  async (credenials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credenials);
      token.set(data.token);
      // console.log(data.user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//логування користувача (передача пошти та паролю), отримання token
const LogIn = createAsyncThunk('auth/login', async (credenials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credenials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//розлогування, після успішного розлогування видаляємо token
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//оновлення/перевірка діючого user по tolken
const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const authOperations = {
  register,
  LogIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
