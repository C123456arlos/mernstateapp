// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from './user/userSlice'
// import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const rootReducer = combineReducers({ user: userReducer })

// const persistConfig = {
//     key: 'root',
//     storage,
//     version: 1
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         serializableCheck: false
//     })
// })

// export const persistor = persistStore(store)




// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import userReducer from './user/userSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// const rootReducer = combineReducers({ user: userReducer });
// const storage = createWebStorage('local');
// const persistConfig = {
//     key: 'root',
//     storage,
//     version: 1,
// };


// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// });

// export const persistor = persistStore(store);



// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import userReducer from './user/userSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// const storage = createWebStorage('local');

// const rootReducer = combineReducers({
//     user: userReducer,
// });

// const persistConfig = {
//     key: 'root',
//     storage,
//     version: 1,
// };

// const persistedReducer = persistReducer(
//     persistConfig,
//     rootReducer
// );

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// });

// export const persistor = persistStore(store);




import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storageModule from 'redux-persist/lib/storage';

const storage = storageModule.default;

const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);