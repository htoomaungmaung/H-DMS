import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import authReducer from "./store/reducers/authReducer";
import generalReducer from "./store/reducers/generalReducer";
import App from "./App";
import "./styles.css";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
const rootElement = document.getElementById("root");

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, rootElement);
