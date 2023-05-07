import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { authReducer } from './auth/authSlice';
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './contacts/filtersSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const enhancer = devToolsEnhancer();

export const store = configureStore(
  {
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactReducer,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  enhancer
);

export const persistor = persistStore(store);
