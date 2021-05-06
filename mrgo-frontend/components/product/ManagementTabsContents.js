import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import palette from '../../styles/palette';

import { ManagementList } from '../../util/constant/list';
import ManagementTabsSearch from './ManagementTabsSearch';

const ManagementTabsContents = ({ isActive }) => {
  const nextRouter = useRouter();
  const newManagementList =
    isActive !== 0
      ? ManagementList?.filter(item => item.key === isActive)
      : ManagementList;
  const listNumber = newManagementList.length;

  return (
    <>
      <CheckBoxWrapper>
        <CheckBoxNumber>
          <p>{listNumber}</p> 개의 제품
        </CheckBoxNumber>
        <p onClick={() => alert('제품 추가 press!')}>제품 추가</p>
      </CheckBoxWrapper>
      <ManagementTabsSearch />
      {newManagementList.map((item, i) => (
        <ProductListBlock key={`orderList${i.toString()}`}>
          <ProductListWrapper>
            <Image src={item.image} alt="order image" />
            <ProductViewBlock>
              <ProductPriceWrapper>
                <ProductType>제품명</ProductType>
                <ProductDes>{item.name} </ProductDes>
              </ProductPriceWrapper>
              <ProductPriceWrapper>
                <ProductType>제품 가격</ProductType>
                <ProductDes>{item.price} 원</ProductDes>
              </ProductPriceWrapper>
              <ProductPriceWrapper>
                <ProductType>제품 코드</ProductType>
                <ProductDes>{item.code} </ProductDes>
              </ProductPriceWrapper>
              <ProductPriceWrapper>
                <ProductType>제품 수량</ProductType>
                {item.quantity < 6 ? (
                  <ProductDes>
                    {item.quantity} 개<p>재고 관리가 필요한 상품입니다.</p>
                  </ProductDes>
                ) : (
                  <ProductDes>{item.quantity} 개</ProductDes>
                )}
              </ProductPriceWrapper>
            </ProductViewBlock>
          </ProductListWrapper>
          <ProductViewBlock>
            <ModifyButton onClick={() => nextRouter.push('/settings/product')}>
              제품 편집
            </ModifyButton>
            <ModifyButton onClick={() => alert('제품 삭제 press!')}>
              제품 삭제
            </ModifyButton>
          </ProductViewBlock>
        </ProductListBlock>
      ))}
    </>
  );
};

const CheckBoxWrapper = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0px;
  & > p {
    display: inline-block;
    color: ${palette.base.black};
    font-weight: bold;
    padding-right: 4px;
    cursor: pointer;
  }
`;

const CheckBoxNumber = styled.div`
  font-size: 18px;
  color: ${palette.base.gray400};
  & > p {
    display: inline-block;
    color: ${palette.base.black};
    font-weight: bold;
    padding-right: 4px;
  }
`;

const ProductListBlock = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  border-bottom: 1px solid ${palette.base.gray300};
`;

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
`;

const ProductViewBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductType = styled.div`
  font-size: 15px;
  width: 60px;
  color: ${palette.base.gray400};
  margin-right: 20px;
`;

const ProductDes = styled.div`
  font-size: 18px;
  color: ${palette.base.black};
  font-weight: bold;

  & > p {
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    color: ${palette.primary.blue};
    padding-left: 10px;
  }
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

export default ManagementTabsContents;
