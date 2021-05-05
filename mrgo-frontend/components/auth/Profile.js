import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import palette from '../../styles/palette';
import { HEADER_HEIGHT } from '../../util/constant/styles';

import ProfileImg from '../../static/assets/icon_profile.svg';

import { OrderList } from '../../util/constant/list';

const Profile = () => {
  /* 닉네임을 못 불러 온다면, 텍스트는 프로필 설정으로! */
  const nextRouter = useRouter();

  return (
    <Container>
      <ProfileWrapper>
        <ProfileHeader>
          <ProfileContents>유저 닉네임</ProfileContents>
        </ProfileHeader>
      </ProfileWrapper>
      <ProfileBlock>
        <ProfileIcon />
        <Title>유저 닉네임</Title>
        <ModifyButton onClick={() => nextRouter.push('/settings/profile')}>
          프로필 편집
        </ModifyButton>
      </ProfileBlock>
      <OrderWrapper>
        <OrderBlock>
          <Title isGray>주문 내역</Title>
        </OrderBlock>
        {OrderList.map((item, i) => (
          <OrderListBlock key={`orderList${i.toString()}`}>
            <Image src={item.url} alt="order image" />
            <OrderViewBlock>
              <OrderName>{item.name}</OrderName>
              <OrderNumber>주문 수량 {item.value} 개</OrderNumber>
            </OrderViewBlock>
          </OrderListBlock>
        ))}
      </OrderWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid ${palette.base.gray300};
`;

const ProfileHeader = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;

  height: ${HEADER_HEIGHT}px;

  align-items: center;
  justify-content: center;
`;

const ProfileContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 16px;
  text-align: center;
`;

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 48px 100px;

  border-bottom: 1px solid ${palette.base.gray300};
`;

const ProfileIcon = styled.img.attrs({ src: ProfileImg, alt: 'profile icon' })`
  width: 96px;
  height: 96px;
  margin-bottom: 28px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -1px;
  margin-bottom: 26px;
  color: ${palette.base.black};

  ${({ isGray }) =>
    isGray &&
    css`
      font-size: 17px;
      letter-spacing: 0px;
      padding-bottom: 5px;
      border-bottom: 3px solid ${palette.base.black};
    `}
`;

const ModifyButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  padding: 7px 15px;
  border-radius: 4px;
  border: 1px solid ${palette.base.gray400};
  font-size: 15px;
  color: ${palette.base.black};
  line-height: 22px;
  cursor: pointer;
`;

const OrderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

const OrderBlock = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 20px 0px 20px;
`;

const OrderListBlock = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 20px;

  border-bottom: 1px solid ${palette.base.gray300};
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const OrderViewBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

const OrderName = styled.div`
  font-size: 18px;
  font-color: ${palette.base.black};
  font-weight: bold;
  margin-bottom: 8px;
`;

const OrderNumber = styled.div`
  font-size: 15px;
  color: ${palette.base.gray400};
`;

export default Profile;
