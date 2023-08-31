import { createSlice } from '@reduxjs/toolkit';
const orderSlice = createSlice({
    name: 'order',
    initialState: {
        getAllOrder: {
            allOrder: null,
            isFetching: false,
            error: false,
        },
        getOrderDetail: {
            orderDetail: null,
            isFetching: false,
            error: false,
        },
        getUserOrder: {
            userOrder: null,
            isFetching: false,
            error: false,
        },
        verifyOrder: {
            isFetching: false,
            success: false,
            error: false,
        },
        editOrderProcess: {
            isFetching: false,
            success: false,
            error: false,
        },
        pushToHistory: {
            isFetching: false,
            success: false,
            error: false,
        },
    },
    reducers: {
        getAllOrderStart: (state) => {
            state.getAllOrder.isFetching = true;
        },
        getAllOrderSuccess: (state, action) => {
            state.getAllOrder.isFetching = false;
            state.getAllOrder.allOrder = action.payload;
        },
        getAllOrderFailed: (state) => {
            state.getAllOrder.isFetching = false;
            state.getAllOrder.error = true;
        },
        getOrderDetailStart: (state) => {
            state.getOrderDetail.isFetching = true;
        },
        getOrderDetailSuccess: (state, action) => {
            state.getOrderDetail.isFetching = false;
            state.getOrderDetail.orderDetail = action.payload;
        },
        getOrderDetailFailed: (state) => {
            state.getOrderDetail.isFetching = false;
            state.getOrderDetail.error = true;
        },
        getUserOrderStart: (state) => {
            state.getUserOrder.isFetching = true;
        },
        getUserOrderSuccess: (state, action) => {
            state.getUserOrder.isFetching = false;
            state.getUserOrder.userOrder = action.payload;
        },
        getUserOrderFailed: (state) => {
            state.getUserOrder.isFetching = false;
            state.getUserOrder.error = true;
        },
        verifyOrderStart: (state) => {
            state.verifyOrder.isFetching = true;
        },
        verifyOrderSuccess: (state) => {
            state.verifyOrder.isFetching = false;
            state.verifyOrder.success = true;
        },
        verifyOrderFailed: (state) => {
            state.verifyOrder.isFetching = false;
            state.verifyOrder.error = true;
        },
        editOrderProcessStart: (state) => {
            state.editOrderProcess.isFetching = true;
        },
        editOrderProcessSuccess: (state) => {
            state.editOrderProcess.isFetching = false;
            state.editOrderProcess.success = true;
        },
        editOrderProcessFailed: (state) => {
            state.editOrderProcess.isFetching = false;
            state.editOrderProcess.error = true;
        },
        pushToHistoryStart: (state) => {
            state.pushToHistory.isFetching = true;
        },
        pushToHistorySuccess: (state) => {
            state.pushToHistory.isFetching = false;
            state.pushToHistory.success = true;
        },
        pushToHistoryFailed: (state) => {
            state.pushToHistory.isFetching = false;
            state.pushToHistory.error = true;
        },
    },
});
export const {
    getAllOrderStart,
    getAllOrderSuccess,
    getAllOrderFailed,
    getOrderDetailStart,
    getOrderDetailSuccess,
    getOrderDetailFailed,
    getUserOrderStart,
    getUserOrderSuccess,
    getUserOrderFailed,
    verifyOrderStart,
    verifyOrderSuccess,
    verifyOrderFailed,
    editOrderProcessStart,
    editOrderProcessSuccess,
    editOrderProcessFailed,
    pushToHistoryStart,
    pushToHistorySuccess,
    pushToHistoryFailed,
} = orderSlice.actions;
export default orderSlice.reducer;
