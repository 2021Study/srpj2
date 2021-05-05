import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import styled, { css } from 'styled-components';
import { INNER_SIZE } from '../../styles/media';
import palette from '../../styles/palette';

import Input from '../modules/Input';

const Login = ({
  id,
  password,
  error,
  onChangeId,
  onChangePassword,
  onClickLogin,
}) => {
  const nextRouter = useRouter();

  return (
    <Block>
      <Title>로그인</Title>
      <Wrapper>
        <SubTitle isGray>계정이 없으세요?</SubTitle>
        <SubTitle onClick={() => nextRouter.push('/auth/signup')}>
          회원가입
        </SubTitle>
      </Wrapper>
      <InputBlock>
        <Input
          value={id}
          onChange={onChangeId}
          placeholder="아이디 입력"
          type="text"
        />
        <Input
          value={password}
          onChange={onChangePassword}
          error={error}
          placeholder="비밀번호 입력"
          type="password"
        />
      </InputBlock>
      <LoginButton
        tabIndex={0}
        isActive={id.length > 0 && password.length > 0}
        onClick={onClickLogin}
      >
        로그인
      </LoginButton>
      <SubTitle
        isGray
        onClick={() => nextRouter.push('/auth/reset-password')}
        style={{
          textAlign: 'center',
          marginTop: 10,
          cursor: 'pointer',
        }}
      >
        비밀번호 초기화
      </SubTitle>
    </Block>
  );
};

Login.propTypes = {
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  max-width: ${INNER_SIZE}px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -1.2px;
  margin: 30px 0px 16px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubTitle = styled.div`
  font-size: 14px;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;

  ${({ isGray }) =>
    isGray &&
    css`
      color: ${palette.base.gray400};
      text-decoration: none;
      font-weight: normal;
      margin-right: 10px;
      cursor: auto;
    `}
`;

const InputBlock = styled.div`
  margin: 24px 0px 5px 0px;
`;

const LoginButton = styled.div`
  width: 100%;
  min-height: 48px;
  margin-bottom: 15px;
  background-color: ${({ isActive }) => {
    if (isActive) return palette.primary.blue;
    return palette.base.gray400;
  }};
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5.666666667px;
  pointer-events: none;

  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: all;
    `}
`;

export default Login;
