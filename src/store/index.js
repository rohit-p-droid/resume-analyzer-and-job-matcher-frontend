import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, themeReducer } from "../reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducers = combineReducers({
    auth: authReducer,
    theme: themeReducer,
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth', 'theme'],
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducers
});

export default store;

export const persistor = persistStore(store);
