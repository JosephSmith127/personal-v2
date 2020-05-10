import App from "next/app";
import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default CustomApp;
