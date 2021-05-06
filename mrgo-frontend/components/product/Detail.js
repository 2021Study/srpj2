import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import palette from '../../styles/palette';

import MinusImage from '../../static/assets/icon_minus.svg';
import PlusImage from '../../static/assets/icon_plus.svg';
import NotFoundImage from '../../static/assets/icon_not_found.svg';

import { ProductDetailList } from '../../util/constant/list';

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

const Detail = () => {
  const nextRouter = useRouter();
  const [number, setNumber] = useState(0);
  const { contentItem, contentChange } = useTabs(0, ProductDetailList);

  return (
    <Container>
      <ProductWrapper>
        <ProductBlock isBorderBottom>
          <Brand>디어달리아 DEAR DAHLIA</Brand>
          <Title>파라다이스 드림 벨벳 립 무스 - 테디</Title>
        </ProductBlock>
        <ProductListBlock>
          <Image
            src="https://static.lottedfs.com/prod/prd-img/33/22/63/00/00/02/20000632233_3.jpg/dims/resize/520x520"
            alt="product image"
          />
          <ProductBlock>
            <ProductViewBlock>
              <ViewTitle>정상가</ViewTitle>
              <ViewSub>21,154 원</ViewSub>
            </ProductViewBlock>
            <ProductViewBlock>
              <ViewTitle>수량</ViewTitle>

              <MinusIcon onClick={() => number > 0 && setNumber(number - 1)} />
              <ViewSub>{number} 개</ViewSub>
              <PlusIcon onClick={() => setNumber(number + 1)} />
            </ProductViewBlock>
            <ProductViewBlock>
              <ViewTitle>상품 설명</ViewTitle>
            </ProductViewBlock>
            <ViewSub>
              상품 요약 정보 <br />
              상품 코드 300932855 <br />
              소재 상세 페이지 참조 <br />
              제조사/원산지(주)한국콜마 / KOREA <br />
              배송비 50,000원 미만 구매시 배송비 3,000원(제주/도서산간 추가
              배송비가 발생할 수 있습니다) <br />
              배송 정보 결제완료 후 평균 2일 이내 출고 (공휴일 제외)
            </ViewSub>
            <ButtonWrapper>
              <CartButton onClick={() => nextRouter.push('/auth/cart')}>
                장바구니
              </CartButton>
              <BuyButton onClick={() => nextRouter.push('/auth/buy')}>
                바로 구매
              </BuyButton>
            </ButtonWrapper>
          </ProductBlock>
        </ProductListBlock>
        <TabsContainer>
          <TabsWrapper>
            {ProductDetailList.map((item, i) => (
              <Tabs
                key={`productDetailList${i.toString()}`}
                onClick={() => contentChange(i)}
                isActive={item.tab === contentItem.tab}
              >
                {item.tab}
              </Tabs>
            ))}
          </TabsWrapper>
          <TabsContents>
            {contentItem?.url ? (
              contentItem?.url.map((item, i) => (
                <>
                  <ProductDetailImage
                    key={`contentItemUrl${i.toString()}`}
                    src={item}
                    alt="product detail image"
                  />
                </>
              ))
            ) : (
              <NotFoundIcon />
            )}
            {contentItem.content && contentItem.content}
          </TabsContents>
        </TabsContainer>
      </ProductWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ProductBlock = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px 20px 20px 10px;
  ${({ isBorderBottom }) =>
    isBorderBottom &&
    css`
      border-bottom: 1px solid ${palette.base.gray300};
    `}
`;

const Brand = styled.div`
  font-size: 16px;
  color: ${palette.base.black};
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -1px;
  color: ${palette.base.black};
`;

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
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

const Image = styled.img`
  width: 460px;
  height: 460px;
`;

const ProductViewBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

const ViewTitle = styled.div`
  font-size: 18px;
  font-color: ${palette.base.black};
  font-weight: bold;
  margin-right: 10px;
`;

const ViewSub = styled.div`
  font-size: 18px;
  color: ${palette.base.gray800};
  line-height: 25px;
`;

const MinusIcon = styled.img.attrs({ src: MinusImage, alt: 'minus icon' })`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const PlusIcon = styled.img.attrs({ src: PlusImage, alt: 'plus icon' })`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 20px;
`;

const CartButton = styled.button`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 62px;
  background-color: ${palette.base.gray200};
  color: ${palette.base.black};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:active {
    background-color: none;
  }

  margin-right: 10px;
`;

const BuyButton = styled.button`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 62px;
  background-color: ${palette.base.black};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:active {
    background-color: none;
  }
`;

const TabsContainer = styled.div`
  width: 100%;
  max-width: 1092px;
  padding: 20px;
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Tabs = styled.button`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  border: 1px solid ${palette.base.gray300};
  padding: 10px 20px;
  height: 62px;

  background-color: ${props =>
    props.isActive ? palette.base.black : palette.base.white};
  color: ${props => (props.isActive ? palette.base.white : palette.base.black)};
`;

const TabsContents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 22px;
  color: ${palette.base.base};

  padding: 40px 0px;
  align-items: center;
  justify-content: center;
`;

const ProductDetailImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NotFoundIcon = styled.img.attrs({
  src: NotFoundImage,
  alt: 'not found icon',
})`
  width: 58px;
  height: 58px;
  margin-bottom: 20px;
`;

export default Detail;
