// import { configureStore } from "@reduxjs/toolkit";
// import currencyReducer from "./slices/currencySlice";
// import cartReducer from './slices/cartSlice'

// const appStore = configureStore({
//   reducer: {
//     // data: reducer
//     currency: currencyReducer,
//     cart: cartReducer
//   },
// });

// export default appStore;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
 
import currencyReducer from "./slices/currencySlice";
import cartReducer from "../store/slices/cartSlice";
import userReducer from "./slices/userSlice";
 
const persistConfig = {
  key: "@my-app",
  storage,
  backlist: ['currency']
};
 
const rootReducer = combineReducers({
  // data: reducer
  currency: currencyReducer,
  cart: cartReducer,
  user: userReducer,
});
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const appStore = configureStore({
  reducer: persistedReducer,
});
 
export const persistor = persistStore(appStore);
 
// export default appStore;