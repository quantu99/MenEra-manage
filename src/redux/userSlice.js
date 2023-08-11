import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            allUsers: null,
            isFetching: false,
            error: false,
        },
        delete: {
            isFetching: false,
            success: false,
            error: false,
        },
        msg: '',
    },
    reducers: {
        getAllUsersStart: (state) => {
            state.user.isFetching = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.user.allUsers = action.payload;
            state.user.isFetching = false;
        },
        getAllUsersFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        },
        deleteUsersStart: (state) => {
            state.delete.isFetching = true;
        },
        deleteUsersSuccess: (state, action) => {
            state.delete.isFetching = false;
            state.delete.success = true;
            state.msg = action.payload;
        },
        deleteUsersFailed: (state, action) => {
            state.delete.isFetching = false;
            state.delete.error = true;
            state.msg = action.payload;
        },
    },
});
export const {
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailed,
    deleteUsersStart,
    deleteUsersSuccess,
    deleteUsersFailed,
} = userSlice.actions;
export default userSlice.reducer;
