import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        register: {
            isFetching: false,
            success: false,
            error: false,
        },
        logout: {
            isFetching: false,
            success: false,
            error: true,
        },
        getMyOrder: {
            myOrder: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state, action) => {
            state.logout.isFetching = false;
            state.logout.success = true;
            state.login.currentUser = null;
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
        getMyOrderStart: (state) => {
            state.getMyOrder.isFetching = true;
        },
        getMyOrderSuccess: (state, action) => {
            state.getMyOrder.isFetching = false;
            state.getMyOrder.myOrder = action.payload;
        },
        getMyOrderFailed: (state) => {
            state.getMyOrder.isFetching = false;
            state.getMyOrder.error = true;
        },
    },
});
export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    getMyOrderStart,
    getMyOrderSuccess,
    getMyOrderFailed,
} = authSlice.actions;
export default authSlice.reducer;
