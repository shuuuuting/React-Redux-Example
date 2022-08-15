import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { fetchUsers } from '../api/api';
import { User } from '../types/userType';

export interface UserState {
    userList: Array<User>
}

const initialState: UserState = {
    userList: []
};

export const userAsync = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetchUsers();
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUsers: (state, { payload }) => {
            state.userList = payload;
        },
        saveSingleUser: (state, { payload }) => {
            state.userList = [...state.userList, payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userAsync.fulfilled, (state, action) => {
            return {
                ...state,
                userList: [ ...state.userList, ...action.payload ]
            }
        })
    }
});

export const { saveUsers, saveSingleUser} = userSlice.actions;

export const selectUserList = (state: RootState) => state.user.userList;

export default userSlice.reducer;
