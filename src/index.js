import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";

import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import {OTPReducer} from './redux/reducer';

const store = createStore(OTPReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();