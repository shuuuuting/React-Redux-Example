import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface CounterState {
  msg: string
}

const initialState: CounterState = {
    msg: '',
};

// Reducer
export const counterSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    saveMessage: (state, {payload}) => {
      state.msg = payload;
    },
  }
});

// export actions
export const { saveMessage } = counterSlice.actions;

// export store state
export const selectMessage = (state: RootState) => state.message.msg;

// export reducer
export default counterSlice.reducer;
