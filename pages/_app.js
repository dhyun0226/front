import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.prototype = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
