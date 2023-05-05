import { configureStore} from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import authReducer from "./auth/authSlice";
import { contactReducer } from "./contacts/contactSlice";
import { filterReducer } from "./contacts/filtersSlice";

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  }, 
}, enhancer
)