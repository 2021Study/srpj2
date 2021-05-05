import React from 'react';
import Head from 'next/head';

import LoginContainer from '../../containers/auth/LoginContainer';

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
        <title>MRGO 로그인</title>
      </Head>
      <LoginContainer />
    </>
  );
};

export default Login;
