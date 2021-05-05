import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { HEADER_HEIGHT } from '../util/constant/styles';
import palette from '../styles/palette';

const Header = () => {
  const nextRouter = useRouter();

  return (
    <Wrapper>
      <Inner>
        <Link href="/">
          <LogoBlock>MRGO</LogoBlock>
        </Link>

        <NavBlock>
          <Link href="/auth/login">
            <NavChip isActive={nextRouter.pathname === '/auth/login'}>
              로그인
            </NavChip>
          </Link>
          <Link href="/auth/signup">
            <NavChip isActive={nextRouter.pathname === '/auth/signup'}>
              회원가입
            </NavChip>
          </Link>
          <Link href="/auth/cart">
            <NavChip isActive={nextRouter.pathname === '/auth/cart'}>
              장바구니
            </NavChip>
          </Link>
        </NavBlock>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: white;

  border-bottom: 1px solid ${palette.base.gray300};
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1052px;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80px;
  cursor: pointer;

  font-size: 20px;
  font-weight: bold;

  margin-right: 26px;

  flex: 1;
`;

const NavBlock = styled.div``;

const NavChip = styled.div`
  margin-right: 30px;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.45px;

  transition: opacity 200ms cubic-bezier(0.65, 0, 0.35, 1);

  opacity: ${({ isActive }) => {
    if (isActive) return 1.0;
    return 0.2;
  }};
`;

export default Header;
