import React from 'react';
import Profile from '../../components/auth/Profile';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';

const ProfileContainer = () => {
  return (
    <ResponsivePageTemplate isFullInner>
      <Profile />
    </ResponsivePageTemplate>
  );
};

export default ProfileContainer;
