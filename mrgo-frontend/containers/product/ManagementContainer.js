import React from 'react';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';
import Management from '../../components/product/Management';

const ManagementContainer = () => {
  return (
    <ResponsivePageTemplate isFullInner>
      <Management />
    </ResponsivePageTemplate>
  );
};

export default ManagementContainer;
