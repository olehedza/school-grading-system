import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import authReducer from "./store/reducers/auth";
import assignmentReducer from "./store/reducers/assignments";
import gradedAssignmentReducer from "./store/reducers/gradedAssignments";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine all reducers together
const rootReducer = combineReducers({
  auth: authReducer,
  assignments: assignmentReducer,
  gradedAssignments: gradedAssignmentReducer
});

// Create global store
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

// Wrapping main App component by Provider with store
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
