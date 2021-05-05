import React from 'react';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import '../styles/globals.css';
import Header from '../components/Header';
import LayoutContainer from '../containers/layout/LayoutContainer';

const Head = dynamic(() => import('next/head'));

const App = ({ Component, pageProps }) => {
  const nextRouter = useRouter();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
        />
      </Head>
      <Header />
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
