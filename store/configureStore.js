import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const configureStore = () => {
  const middleware = [];
  const enhancer =
    process.env.Node_ENV === 'production'
      ? compose(applyMiddleware(...middleware))
      : composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  // debug: false,
  debug: process.env.Node_ENV === 'development',
});

export default wrapper;
