import { createAsyncThunk } from "@reduxjs/toolkit";

import type { RegisterSchemaType } from "@/entities/auth/schemas/register.schema";
import type { UserSchemaType } from "@/entities/user/schemas/user.schema";

import type { UsersState } from "../usersSlice";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (amount: RegisterSchemaType, { getState, rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const state = getState() as { users: UsersState };
      const isExisting = state.users.users.some((user) => user.email === amount.email);
      if (isExisting) {
        throw new Error("Такой пользователь уже существует");
      }
      const newUser: UserSchemaType = {
        name: amount.name,
        email: amount.email,
        password: amount.password,
        promo: amount.promo,
      };
      return newUser;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Ошибка регистрации");
    }
  }
);
