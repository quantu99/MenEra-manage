import axios from 'axios';
import {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerFailed,
    registerSuccess,
    logoutStart,
    logoutFailed,
    logoutSuccess,
    getMyOrderStart,
    getMyOrderFailed,
    getMyOrderSuccess,
} from './authSlice';
import {
    getAllUsersStart,
    getAllUsersSuccess,
    getAllUsersFailed,
    deleteUsersStart,
    deleteUsersFailed,
    deleteUsersSuccess,
    getUserDetailStart,
    getUserDetailFailed,
    getUserDetailSuccess,
} from './userSlice';
import {
    cartFailed,
    cartStart,
    cartSuccess,
    createFailed,
    createStart,
    createSuccess,
    destroyFailed,
    destroyStart,
    destroySuccess,
    getAllFailed,
    getAllStart,
    getAllSuccess,
    getDetailFailed,
    getDetailStart,
    getDetailSuccess,
    updateFailed,
    updateStart,
    updateSuccess,
} from './productsSlice';
import {
    editOrderProcessFailed,
    editOrderProcessStart,
    editOrderProcessSuccess,
    getAllOrderFailed,
    getAllOrderStart,
    getAllOrderSuccess,
    getOrderDetailFailed,
    getOrderDetailStart,
    getOrderDetailSuccess,
    getUserOrderFailed,
    getUserOrderStart,
    getUserOrderSuccess,
    pushToHistoryFailed,
    pushToHistoryStart,
    pushToHistorySuccess,
    verifyOrderFailed,
    verifyOrderStart,
    verifyOrderSuccess,
} from './orderSlice';
import {
    getAllOrderHistoryFailed,
    getAllOrderHistoryStart,
    getAllOrderHistorySuccess,
    getOrderHistoryDetailFailed,
    getOrderHistoryDetailStart,
    getOrderHistoryDetailSuccess,
} from './orderHistorySlice';
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('https://emc-api.onrender.com/v1/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post('https://emc-api.onrender.com/v1/auth/register', user);
        dispatch(registerSuccess(res.data));
        navigate('/login');
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const getAllUsers = async (dispatch) => {
    dispatch(getAllUsersStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/user');
        dispatch(getAllUsersSuccess(res.data));
    } catch (err) {
        dispatch(getAllUsersFailed());
    }
};

export const deleteUsers = async (accessToken, dispatch, id) => {
    dispatch(deleteUsersStart());
    try {
        const res = await axios.delete('https://emc-api.onrender.com/v1/user/' + id, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(deleteUsersSuccess(res.data));
    } catch (err) {
        dispatch(deleteUsersFailed(err.response.data));
    }
};

export const logoutUser = async (accessToken, dispatch, navigate, id, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post('https://emc-api.onrender.com/v1/auth/logout', id, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(logoutSuccess());
        navigate('/login');
    } catch (err) {
        dispatch(logoutFailed());
    }
};
export const getAllProducts = async (dispatch) => {
    dispatch(getAllStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/products');
        dispatch(getAllSuccess(res.data));
    } catch (err) {
        dispatch(getAllFailed());
    }
};
export const addToCart = async (id, userId, dispatch) => {
    dispatch(cartStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/products/add/' + id, {
            user: userId,
        });
        dispatch(cartSuccess(res.data));
    } catch (err) {
        dispatch(cartFailed());
    }
};
export const createNewProduct = async (product, dispatch, navigate) => {
    dispatch(createStart());
    try {
        const res = await axios.post('https://emc-api.onrender.com/v1/products/create', product);
        dispatch(createSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(createFailed());
    }
};
export const getProductDetail = async (dispatch, id) => {
    dispatch(getDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/products/' + id);
        dispatch(getDetailSuccess(res.data));
    } catch (err) {
        dispatch(getDetailFailed());
    }
};
export const updateProduct = async (dispatch, id, newProduct, navigate) => {
    dispatch(updateStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/products/' + id, {
            name: newProduct.name,
            type: newProduct.type,
            color: newProduct.color,
            price: newProduct.price,
            imageUrl: newProduct.imageUrl,
            imageUrl2: newProduct.imageUrl2,
            description: newProduct.description,
        });
        dispatch(updateSuccess(res.data));
        navigate('/all-products');
    } catch (err) {
        dispatch(updateFailed());
    }
};
export const destroyProduct = async (dispatch, id, navigate) => {
    dispatch(destroyStart());
    try {
        const res = await axios.delete('https://emc-api.onrender.com/v1/products/' + id);
        dispatch(destroySuccess(res.data));
        navigate('/all-products');
    } catch (err) {
        dispatch(destroyFailed());
    }
};
export const getAllOrder = async (dispatch) => {
    dispatch(getAllOrderStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/order');
        dispatch(getAllOrderSuccess(res.data));
    } catch (err) {
        dispatch(getAllOrderFailed());
    }
};
export const getOrderDetail = async (dispatch, id, navigate) => {
    dispatch(getOrderDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/order/' + id);
        dispatch(getOrderDetailSuccess(res.data));
        navigate(`/orderDetail/${id}`);
    } catch (err) {
        dispatch(getOrderDetailFailed());
    }
};
export const getUserOrder = async (dispatch, id) => {
    dispatch(getUserOrderStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/order/' + id);
        dispatch(getUserOrderSuccess(res.data));
    } catch (err) {
        dispatch(getUserOrderFailed());
    }
};
export const verifyOrder = async (dispatch, id) => {
    dispatch(verifyOrderStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/order/verify/' + id);
        dispatch(verifyOrderSuccess(res.data));
    } catch (err) {
        dispatch(verifyOrderFailed());
    }
};
export const editOrderProcess = async (dispatch, id, orderProcess, navigate) => {
    dispatch(editOrderProcessStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/order/process/' + id, {
            orderProcess: orderProcess,
        });
        dispatch(editOrderProcessSuccess(res.data));
        navigate(`/orderDetail/${id}`);
    } catch (err) {
        dispatch(editOrderProcessFailed());
    }
};
export const pushToHistory = async (dispatch, id, navigate) => {
    dispatch(pushToHistoryStart());
    try {
        const res = await axios.put('https://emc-api.onrender.com/v1/order/order-to-history/' + id);
        dispatch(pushToHistorySuccess(res.data));
        navigate('/order');
    } catch (err) {
        dispatch(pushToHistoryFailed());
    }
};
export const getAllOrderHistory = async (dispatch) => {
    dispatch(getAllOrderHistoryStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/order-history');
        dispatch(getAllOrderHistorySuccess(res.data));
    } catch (err) {
        dispatch(getAllOrderHistoryFailed());
    }
};
export const getOrderHistoryDetail = async (dispatch, id, navigate) => {
    dispatch(getOrderHistoryDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/order-history/' + id);
        dispatch(getOrderHistoryDetailSuccess(res.data));
        navigate(`/order-history/${id}`);
    } catch (err) {
        dispatch(getOrderHistoryDetailFailed());
    }
};
export const getUserDetail = async (dispatch, id, navigate) => {
    dispatch(getUserDetailStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/user/' + id);
        dispatch(getUserDetailSuccess(res.data));
        navigate(`/user-detail/${id}`);
    } catch (err) {
        dispatch(getUserDetailFailed());
    }
};
export const getMyOrder = async (dispatch, id) => {
    dispatch(getMyOrderStart());
    try {
        const res = await axios.get('https://emc-api.onrender.com/v1/auth/order/' + id);
        dispatch(getMyOrderSuccess(res.data));
    } catch (err) {
        dispatch(getMyOrderFailed());
    }
};
