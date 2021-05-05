import React, { useState, useMemo } from 'react';
import SignUp from '../../components/auth/SignUp';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';

const SignUpContainer = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const onChangeId = e => setId(e.target.value);
  const onChangeBirth = e => setBirth(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);
  const onChangeRepeatPassword = e => {
    setRepeatPassword(e.target.value);
  };
  const onChangeName = e => setName(e.target.value);
  const onChangePhone = e => setPhone(e.target.value);

  const useOnBlurInputPassword = () => {
    if (password !== repeatPassword)
      setError('비밀번호가 같지 않습니다. 다시 한 번 입력해 주세요.');
    if (error && password === repeatPassword) setError(false);
  };

  const requestDuplicateEmailActive = useMemo(() => {
    if (id.length > 0) return true;
    else return false;
  }, [id]);

  const isActiveSignUpButton = useMemo(() => {
    if (
      id.length > 0 &&
      birth.length > 0 &&
      password.length > 0 &&
      name.length > 0 &&
      phone.length > 0 &&
      repeatPassword.length > 0 &&
      !error
    )
      return true;
    return false;
  }, [id, birth, password, name, phone, repeatPassword, error]);

  console.log(birth);
  return (
    <ResponsivePageTemplate>
      <SignUp
        error={error}
        id={id}
        password={password}
        repeatPassword={repeatPassword}
        name={name}
        birth={birth}
        phone={phone}
        onChangeId={onChangeId}
        onChangePassword={onChangePassword}
        onChangeBirth={onChangeBirth}
        onChangeRepeatPassword={onChangeRepeatPassword}
        onChangeName={onChangeName}
        onChangePhone={onChangePhone}
        useOnBlurInputPassword={useOnBlurInputPassword}
        isActiveSignUpButton={isActiveSignUpButton}
        requestDuplicateEmailActive={requestDuplicateEmailActive}
      />
    </ResponsivePageTemplate>
  );
};

export default SignUpContainer;
