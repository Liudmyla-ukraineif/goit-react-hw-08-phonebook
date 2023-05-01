import { configureStore} from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filtersSlice";

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  }, 
}, enhancer
)