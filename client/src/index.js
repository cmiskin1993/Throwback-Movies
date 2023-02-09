import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  configureStore,
  createImmutableStateInvariantMiddleware,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import loggerMiddleware from './middleware/logger';
const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware();
const store = configureStore({ reducer: rootReducer, middleware: [thunk, createImmutableStateInvariantMiddleware(),...getDefaultMiddleware()] });
window.$store = store;

ReactDOM.render(
  <React.StrictMode>
  <Provider store={ store }>
      <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
