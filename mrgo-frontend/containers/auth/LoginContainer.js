import React, { useState } from 'react';
import Login from '../../components/auth/Login';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';

const LoginContainer = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onChangeId = e => setId(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);

  const onClickLogin = () => {
    /* 여기에서 Login API 호출해 주시면 돼용. */
    alert(`ID 값 : ${id}`);
    /* 요건 이제 에러 메시지 띄우는 방법! 나중에 제거하세용~ 
    로그인 성공 후, setError(false) 로 해 주어야 합니당~ */
    setError('아이디 혹은 비밀번호가 틀렸습니다.');
  };

  return (
    <ResponsivePageTemplate>
      <Login
        id={id}
        password={password}
        error={error}
        onChangeId={onChangeId}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </ResponsivePageTemplate>
  );
};

export default LoginContainer;
