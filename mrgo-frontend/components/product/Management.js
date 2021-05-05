import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import palette from '../../styles/palette';
import { HEADER_HEIGHT } from '../../util/constant/styles';

import PrevImage from '../../static/assets/icon_prev.svg';

import { OrderList } from '../../util/constant/list';

const Management = () => {
  const nextRouter = useRouter();

  return (
    <Container>
      <ProductWrapper>
        <ProductHeader>
          <PrevIcon />
          <ProductContents>재고 관리</ProductContents>
        </ProductHeader>
      </ProductWrapper>

      <ProductListWrapper>
        <ProductBlock>
          <Title isGray>제품 내역</Title>
        </ProductBlock>
        {OrderList.map((item, i) => (
          <ProductListBlock key={`orderList${i.toString()}`}>
            <Image src={item.url} alt="order image" />
            <ProductViewBlock>
              <ProductName>{item.name}</ProductName>
              <ProductPriceWrapper>
                <ProductNumber>가격</ProductNumber>
                <ProductName>{item.price} 원</ProductName>
              </ProductPriceWrapper>
              <ModifyButton
                onClick={() => nextRouter.push('/settings/product')}
              >
                제품 편집
              </ModifyButton>
            </ProductViewBlock>
          </ProductListBlock>
        ))}
      </ProductListWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid ${palette.base.gray300};
`;

const ProductHeader = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;

  height: ${HEADER_HEIGHT}px;

  align-items: center;
  padding: 10px;
`;

const ProductContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 16px;
  text-align: center;
`;

const PrevIcon = styled.img.attrs({ src: PrevImage, alt: 'prev icon' })`
  width: 10px;
  height: 15px;

  margin-right: 10px;
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
  width: 100%;
  max-width: 150px;
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
  margin-top: 10px;
`;

const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

const ProductBlock = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 20px 0px 20px;
`;

const ProductListBlock = styled.div`
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

const ProductViewBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-color: ${palette.base.black};
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProductNumber = styled.div`
  font-size: 15px;
  color: ${palette.base.gray400};
  margin: 0px 10px 8px 0px;
`;

export default Management;
