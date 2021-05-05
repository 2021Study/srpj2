import React from 'react';
import Head from 'next/head';
import SignUpContainer from '../../containers/auth/SignUpContainer';

const Login = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content="" />
        <meta name="Description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="MRGO" />
        <meta property="og:description" content="MRGO" />
        <meta property="og:image" content="" />
        <title>MRGO 회원가입</title>
      </Head>
      <SignUpContainer />
    </>
  );
};

export default Login;
