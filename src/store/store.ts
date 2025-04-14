import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slice/basketSlice";
import { productsApi } from "../services/getApi";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import limitedSlice from "./slice/limitedSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  basket: basketReducer,
  limited: limitedSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
