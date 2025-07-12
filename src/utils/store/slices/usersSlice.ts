import { createSlice } from "@reduxjs/toolkit";

import type { UserSchemaType } from "@/entities/user/schemas/user.schema";

import { loginUser } from "./thunks";

export interface UsersState {
  users: UserSchemaType[];
  currentUser: UserSchemaType | null;
  error?: string;
}

const initialState: UsersState = {
  users: [
    {
      name: "Игорь",
      email: "example@example.com",
      password: "password2021",
      promo: undefined,
    },
  ],
  currentUser: null,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.currentUser = null;
        state.error = action.payload as string;
      });
  },
});

export default usersSlice.reducer;
