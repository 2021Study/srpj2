import React from 'react';
import Main from '../components/Main';

import ResponsivePageTemplate from './layout/ResponsivePageTemplate';

const MainContainer = () => {
  return (
    <ResponsivePageTemplate isFullInner>
      <Main />
    </ResponsivePageTemplate>
  );
};

export default MainContainer;
