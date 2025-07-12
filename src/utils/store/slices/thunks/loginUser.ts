import { createAsyncThunk } from "@reduxjs/toolkit";

import type { LoginSchemaType } from "@/entities/auth/schemas/login.schema";

import type { UsersState } from "../usersSlice";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (amount: LoginSchemaType, { getState, rejectWithValue }) => {
    // Имитация запроса
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const state = getState() as { users: UsersState };
      const user = state.users.users.find((user) => user.email === amount.email);
      if (!user) {
        throw new Error("Пользователь не найден");
      }
      if (user?.password !== amount.password) {
        throw new Error("Пароль не верный");
      }
      return user;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Ошибка при входе");
    }
  }
);
