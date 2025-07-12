import { createSlice } from "@reduxjs/toolkit";

import type { UserSchemaType } from "@/entities/user/schemas/user.schema";

import { loginUser, registerUser } from "./thunks";

export interface UsersState {
  users: UserSchemaType[];
  currentUser: UserSchemaType | null;
  error?: string;
  isLoading: boolean;
  isSuccess: boolean;
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
  isLoading: false,
  isSuccess: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetSuccessState: (state) => {
      state.isSuccess = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.error = undefined;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.currentUser = null;
        state.error = action.payload as string;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.error = undefined;
        state.users.push(action.payload);
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error as string;
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export default usersSlice.reducer;
export const { resetSuccessState } = usersSlice.actions;
