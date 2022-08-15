import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import messageReducer from '../models/message'
import userReducer from '../models/user'

// combine 所有 reducer，形成一個 root store
export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
