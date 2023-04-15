import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";

/**
 * redux toolkit automatically applies immer utility
 *
 * automatically creates a draft and then saves that copy
 *
 * mutating the state objects is taken care of by immer when using createSlice
 *
 * https://redux-toolkit.js.org/usage/immer-reducers
 */

export const store = configureStore({
  reducer: { contact: contactReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
