import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd";

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
  Component: PropTypes.elementType.isRequired,
};

export default App;