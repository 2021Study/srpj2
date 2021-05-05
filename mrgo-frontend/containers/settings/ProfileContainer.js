import React, { useState, useMemo } from 'react';
import Profile from '../../components/settings/Profile';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';

const ProfileContainer = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeBirth = e => setBirth(e.target.value);

  const onChangeName = e => setName(e.target.value);
  const onChangePhone = e => setPhone(e.target.value);

  const isActiveModifyButton = useMemo(() => {
    if (birth.length > 0 && name.length > 0 && phone.length > 0) return true;
    return false;
  }, [birth, name, phone]);

  return (
    <ResponsivePageTemplate>
      <Profile
        name={name}
        birth={birth}
        phone={phone}
        onChangeBirth={onChangeBirth}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        isActiveModifyButton={isActiveModifyButton}
      />
    </ResponsivePageTemplate>
  );
};

export default ProfileContainer;
