import React from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';

import { INNER_SIZE } from '../../styles/media';

import Input from '../../components/modules/Input';
import InputWithButton from '../../components/modules/InputWithButton';

import {
  generatedYear,
  generatedMonth,
  generatedDate,
} from '../../services/auth/auth';

const SignUp = ({
  error,
  id,
  password,
  repeatPassword,
  name,
  birth,
  phone,
  onChangeId,
  onChangeBirth,
  onChangePassword,
  onChangeRepeatPassword,
  onChangeName,
  onChangePhone,
  useOnBlurInputPassword,
  isActiveSignUpButton,
  requestDuplicateEmailActive,
}) => {
  const nextRouter = useRouter();

  return (
    <Block>
      <Title>회원가입</Title>
      <InputBlock>
        <Input
          label="이름"
          value={name}
          onChange={onChangeName}
          placeholder="이름을 입력해 주세요."
          type="text"
        />
      </InputBlock>
      <InputBlock>
        <Input
          label="생년월일"
          value={birth}
          onChange={onChangeBirth}
          placeholder="생년월일을 입력해 주세요. (예 - 20021016)"
          type="number"
        />
      </InputBlock>
      <InputBlock>
        <Input
          label="전화번호"
          value={phone}
          onChange={onChangePhone}
          placeholder="- 없이 숫자만 입력해 주세요."
          type="number"
        />
      </InputBlock>
      <InputBlock>
        <InputWithButton
          buttonColor={palette.primary.blue}
          buttonText="중복 확인"
          isButtonActive={requestDuplicateEmailActive}
          label="아이디"
          type="text"
          value={id}
          placeholder="아이디를 입력해 주세요."
          onChange={onChangeId}
          onClickButton={() => alert('중복 확인 버튼 눌렀어여!')}
        />
      </InputBlock>
      <InputBlock>
        <Input
          label="비밀번호"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해 주세요."
          type="password"
        />
      </InputBlock>
      <InputBlock>
        <Input
          label="비밀번호 재확인"
          value={repeatPassword}
          onChange={onChangeRepeatPassword}
          placeholder="입력한 비밀번호와 동일한 비밀번호를 입력해 주세요."
          type="password"
          error={error}
          onBlur={useOnBlurInputPassword}
        />
      </InputBlock>
      <LoginButton
        tabIndex={0}
        isActive={isActiveSignUpButton}
        onClick={() => alert('회원가입을 눌렀습니다!')}
      >
        회원가입
      </LoginButton>
      <Divider />
      <BackButton onClick={() => nextRouter.back()}>{`< 뒤로`}</BackButton>
    </Block>
  );
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
  margin: 30px 0px 24px 0px;
`;

const InputBlock = styled.div`
  margin-bottom: 24px;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-background-clip: padding;
  -moz-background-clip: padding;
  background-clip: padding-box;

  -webkit-border-radius: 5.666666667px;
  -moz-border-radius: 5.666666667px;
  -ms-border-radius: 5.666666667px;
  -o-border-radius: 5.666666667px;
  border-radius: 5.666666667px;

  -webkit-appearance: none;
  background-color: #fff;
  padding: 11.428px 13.714px;

  outline: 0;
  margin: 0;

  width: 33.333333333%;
  height: 48px;

  border: none;
  box-shadow: none;
  border: solid 1.142px ${palette.base.gray400};

  color: ${({ isDefault }) => {
    if (isDefault) return palette.base.gray400;
    return palette.base.black;
  }};

  transform: scale(0.875);
  transform-origin: left top;

  option {
    font-size: 12px;
  }

  &::-ms-expand {
    display: none;
  }

  &:focus {
    border: solid 1.142px ${palette.primary.blue};
  }
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

const Divider = styled.div`
  margin-top: 14px;
  width: 100%;
  height: 1px;
  background-color: ${palette.base.gray300};
`;

const BackButton = styled.button`
  margin-top: 14px;
  color: ${palette.base.gray400};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  text-align: left;
`;

export default SignUp;
