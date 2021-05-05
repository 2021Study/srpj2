import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import Input from '../../components/modules/Input';

import palette from '../../styles/palette';
import { HEADER_HEIGHT } from '../../util/constant/styles';

import PrevImage from '../../static/assets/icon_prev.svg';

const Product = ({
  name,
  code,
  price,
  quantity,
  category,
  onChangeName,
  onChangeCode,
  onChangePrice,
  onChangeQuantity,
  onChangeCateGory,
  isActiveModifyButton,
}) => {
  return (
    <Container>
      <ProductWrapper>
        <ProductHeader>
          <PrevIcon />
          <ProductContents>제품 편집</ProductContents>
        </ProductHeader>
      </ProductWrapper>

      <ProductSettingsWrapper>
        <ProductListBlock>
          <Image
            src="http://m.romand.co.kr/web/product/extra/big/202010/25844c64cb748a9885d310edd7e30157.jpg"
            alt="settings product image"
          />
          <ProductViewBlock>
            <InputBlock>
              <ProductName>제품명</ProductName>
              <Input value={name} onChange={onChangeName} />
            </InputBlock>
            <InputBlock>
              <ProductName>제품 코드</ProductName>
              <Input value={code} onChange={onChangeCode} />
            </InputBlock>
            <InputBlock>
              <ProductName>제품 단가</ProductName>
              <Input value={price} onChange={onChangePrice} />
            </InputBlock>
            <InputBlock>
              <ProductName>재고 수량</ProductName>
              <Input value={quantity} onChange={onChangeQuantity} />
            </InputBlock>
            <InputBlock>
              <ProductName>카테고리</ProductName>
              <Input value={category} onChange={onChangeCateGory} />
            </InputBlock>
          </ProductViewBlock>
        </ProductListBlock>
        <ModifyButton isActive={isActiveModifyButton}>수정하기</ModifyButton>
      </ProductSettingsWrapper>
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
  cursor: pointer;

  font-size: 16px;
`;

const PrevIcon = styled.img.attrs({ src: PrevImage, alt: 'prev icon' })`
  width: 10px;
  height: 15px;

  margin-right: 10px;
`;

const ProductSettingsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

const InputBlock = styled.div`
  margin-bottom: 24px;
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
  width: 450px;
  height: 450px;
`;

const ProductViewBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  width: 100%;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-color: ${palette.base.black};
  font-weight: bold;
  margin-bottom: 8px;
`;

const ModifyButton = styled.div`
  width: 100%;
  max-width: 1052px;

  min-height: 48px;
  margin: 50px;
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

export default Product;
