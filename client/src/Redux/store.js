import rootReducer from "./reducer";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;