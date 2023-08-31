import { createSlice } from '@reduxjs/toolkit';
const orderHistorySlice = createSlice({
    name: 'order history',
    initialState: {
        getAllOrderHistory: {
            allOrderHistory: null,
            isFetching: false,
            error: false,
        },
        getOrderHistoryDetail: {
            orderHistoryDetail: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        getAllOrderHistoryStart: (state) => {
            state.getAllOrderHistory.isFetching = true;
        },
        getAllOrderHistorySuccess: (state, action) => {
            state.getAllOrderHistory.isFetching = false;
            state.getAllOrderHistory.allOrderHistory = action.payload;
        },
        getAllOrderHistoryFailed: (state) => {
            state.getAllOrderHistory.isFetching = false;
            state.getAllOrderHistory.error = true;
        },
        getOrderHistoryDetailStart: (state) => {
            state.getOrderHistoryDetail.isFetching = true;
        },
        getOrderHistoryDetailSuccess: (state, action) => {
            state.getOrderHistoryDetail.isFetching = false;
            state.getOrderHistoryDetail.orderHistoryDetail = action.payload;
        },
        getOrderHistoryDetailFailed: (state) => {
            state.getAllOrderHistory.isFetching = false;
            state.getAllOrderHistory.error = true;
        },
    },
});
export const {
    getAllOrderHistoryStart,
    getAllOrderHistorySuccess,
    getAllOrderHistoryFailed,
    getOrderHistoryDetailStart,
    getOrderHistoryDetailSuccess,
    getOrderHistoryDetailFailed,
} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
