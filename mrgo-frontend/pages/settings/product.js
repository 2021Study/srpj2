import React from 'react';
import Head from 'next/head';

import ProductContainer from '../../containers/settings/ProductContainer';

const Product = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content="" />
        <meta name="Description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="MRGO" />
        <meta property="og:description" content="MRGO" />
        <meta property="og:image" content="" />
        <title>제품 편집</title>
      </Head>
      <ProductContainer />
    </>
  );
};

export default Product;
