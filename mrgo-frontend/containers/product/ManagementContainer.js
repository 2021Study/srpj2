import React from 'react';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';
import ManagementTabs from '../../components/product/ManagementTabs';

const ManagementContainer = () => {
  return (
    <ResponsivePageTemplate isFullInner>
      <ManagementTabs />
    </ResponsivePageTemplate>
  );
};

export default ManagementContainer;
