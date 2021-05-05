import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import palette from '../../styles/palette';
import Input from '../../components/modules/Input';
import { INNER_SIZE } from '../../styles/media';

const Profile = ({
  name,
  birth,
  phone,
  onChangeBirth,
  onChangeName,
  onChangePhone,
  isActiveModifyButton,
}) => {
  const nextRouter = useRouter();

  return (
    <Block>
      <Title>프로필 수정</Title>

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

      <LoginButton
        tabIndex={0}
        isActive={isActiveModifyButton}
        onClick={() => alert('수정하기를 눌렀습니다!')}
      >
        수정하기
      </LoginButton>
      <Divider />
      <BackButton onClick={() => nextRouter.back()}>{`< 뒤로`}</BackButton>
    </Block>
  );
};

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -1.2px;
  margin: 30px 0px 24px 0px;
`;

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

const InputBlock = styled.div`
  margin-bottom: 24px;
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

export default Profile;
