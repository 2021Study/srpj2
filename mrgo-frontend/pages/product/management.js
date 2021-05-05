import React from 'react';
import Head from 'next/head';

import ManagementContainer from '../../containers/product/ManagementContainer';

const Detail = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content="" />
        <meta name="Description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="MRGO" />
        <meta property="og:description" content="MRGO" />
        <meta property="og:image" content="" />
        <title>재고 관리</title>
      </Head>
      <ManagementContainer />
    </>
  );
};

export default Detail;
