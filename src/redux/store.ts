import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// //service
import { apiAuth } from "./services/auth";

// // slices
import userReducer, { UserSliceKey } from "./slices/user";

const persistConfig = {
  key: "root",
  storage: storage,
};

const combinedReducer = combineReducers({
  [apiAuth.reducerPath]: apiAuth.reducer,

  [UserSliceKey]: userReducer,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([apiAuth.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store);
