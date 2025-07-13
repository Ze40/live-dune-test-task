import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    "reduxState",
    JSON.stringify({
      users: state.users.users,
      currentUser: state.users.currentUser,
    })
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
