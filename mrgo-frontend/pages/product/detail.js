import React from 'react';
import Head from 'next/head';

import DetailContainer from '../../containers/product/DetailContainer';

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
        <title>MRGO 제품 상세</title>
      </Head>
      <DetailContainer />
    </>
  );
};

export default Detail;
