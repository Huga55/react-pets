import { applyMiddleware, combineReducers, createStore } from "redux";
import { AsyncStorage } from "react-native";
import petsReducer from "./reducers/petsReducer";
import appReducer from "./reducers/appReducer";
import createSagaMiddleware from "redux-saga";
import { petsWatcher } from "./saga";
import { persistStore, persistReducer } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    app: appReducer,
    pets: petsReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(petsWatcher);

export default store;

export const persistore = persistStore(store);