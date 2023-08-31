// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import authSlice from './authSlice';
// import userSlice from './userSlice';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import productsReducer from './productsSlice'; // Import as productsReducer

// const rootReducer = combineReducers({
//     auth: authSlice,
//     user: userSlice,
//     products: productsReducer, // Use productsReducer instead of productsSlice
// });

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export let persistor = persistStore(store);
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import userSlice from './userSlice';
import productsSlice from './productsSlice';
import orderSlice from './orderSlice';
import orderHistorySlice from './orderHistorySlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        products: productsSlice,
        order: orderSlice,
        orderHistory: orderHistorySlice,
    },
});
export default store;
