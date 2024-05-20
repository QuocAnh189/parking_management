import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// //service
import { apiAuth } from "./services/auth";
import { apiCard } from "./services/card";
import { apiInOut } from "./services/in_out";

// // slices
import userReducer, { UserSliceKey } from "./slices/user";

const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiCard.reducerPath]: apiCard.reducer,
    [apiInOut.reducerPath]: apiInOut.reducer,

    [UserSliceKey]: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([apiAuth.middleware, apiCard.middleware, apiInOut.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
