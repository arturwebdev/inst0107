import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import { ignorEmptyComment } from "./middleware/posts";
import { postsReducer } from "./slices/posts/postsSlice";
import { searchTxtReducer } from "./slices/searchTxt/searchTxtSlice";
import { usersReducer } from "./slices/users/usersSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    searchTxt: searchTxtReducer
})

const persistConfig = {
    key: 'insta0107',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        [...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), ignorEmptyComment]
    )
})

export const persistor = persistStore(store)

export default store