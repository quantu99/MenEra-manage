import { createSlice } from '@reduxjs/toolkit';
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        getAllProducts: {
            allProducts: null,
            isFetching: false,
            error: false,
        },
        addToCart: {
            isFetching: false,
            success: false,
            error: false,
        },
        createProduct: {
            isFetching: false,
            success: false,
            error: false,
        },
        getDetail: {
            productDetail: null,
            isFetching: false,
            error: false,
        },
        updateProduct: {
            isFetching: false,
            success: false,
            error: false,
        },
        destroyProduct: {
            isFetching: false,
            success: false,
            error: false,
        },
    },
    reducers: {
        getAllStart: (state) => {
            state.getAllProducts.isFetching = true;
        },
        getAllSuccess: (state, action) => {
            state.getAllProducts.isFetching = false;
            state.getAllProducts.allProducts = action.payload;
        },
        getAllFailed: (state) => {
            state.getAllProducts.isFetching = false;
            state.getAllProducts.error = true;
        },
        cartStart: (state) => {
            state.getAllProducts.isFetching = true;
        },
        cartSuccess: (state) => {
            state.getAllProducts.isFetching = false;
            state.getAllProducts.success = true;
        },
        cartFailed: (state) => {
            state.getAllProducts.isFetching = false;
            state.getAllProducts.error = true;
        },
        createStart: (state) => {
            state.createProduct.isFetching = true;
            state.createProduct.success = false;
        },
        createSuccess: (state) => {
            state.createProduct.isFetching = false;
            state.createProduct.success = true;
        },
        createFailed: (state) => {
            state.createProduct.isFetching = false;
            state.createProduct.error = true;
        },
        getDetailStart: (state) => {
            state.getDetail.isFetching = true;
        },
        getDetailSuccess: (state, action) => {
            state.getDetail.isFetching = false;
            state.getDetail.productDetail = action.payload;
        },
        getDetailFailed: (state) => {
            state.getDetail.isFetching = false;
            state.getDetail.error = true;
        },
        updateStart: (state) => {
            state.updateProduct.isFetching = true;
        },
        updateSuccess: (state) => {
            state.updateProduct.isFetching = false;
            state.updateProduct.success = true;
        },
        updateFailed: (state) => {
            state.updateProduct.isFetching = false;
            state.updateProduct.error = true;
        },
        destroyStart: (state) => {
            state.destroyProduct.isFetching = true;
        },
        destroySuccess: (state) => {
            state.destroyProduct.isFetching = false;
            state.destroyProduct.success = true;
        },
        destroyFailed: (state) => {
            state.destroyProduct.isFetching = false;
            state.destroyProduct.error = true;
        },
    },
});
export const {
    getAllStart,
    getAllSuccess,
    getAllFailed,
    cartStart,
    cartSuccess,
    cartFailed,
    createStart,
    createSuccess,
    createFailed,
    getDetailStart,
    getDetailSuccess,
    getDetailFailed,
    updateStart,
    updateSuccess,
    updateFailed,
    destroyStart,
    destroySuccess,
    destroyFailed,
} = productsSlice.actions;
export default productsSlice.reducer;
