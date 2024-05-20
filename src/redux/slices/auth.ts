import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuth } from "@/interfaces/models/auth";

export const AuthSliceKey = "auth";

type InitialType = {
  user: IAuth | null;
};

const initialState = {
  user: null,
} as InitialType;

const userSlice = createSlice({
  name: AuthSliceKey,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
