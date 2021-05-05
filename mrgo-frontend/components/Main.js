import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/palette';

import { MonthlyList, TempList } from '../util/constant/list';

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <PickWrapper>
          <PickLabel>MRGO'S PICK! 👍</PickLabel>
          <Title>#BHF 롬앤</Title>
          <Subtitle>Beauty Holic’s Favorite, 롬앤</Subtitle>
        </PickWrapper>
        <MonthlyWrapper>
          <MonthlyTitle>이달의 상품들만 모아 봤어요!</MonthlyTitle>
          {MonthlyList.map((item, i) => (
            <MonthlyListBlock key={`MonthlyList${i.toString()}`}>
              <MonthlyListView>
                <MonthlyName>{item.name}</MonthlyName>
                <TagsBlock key={`TagsList${i.toString()}`}>
                  {item.tags?.map((item, i) => (
                    <Tags>{item}</Tags>
                  ))}
                </TagsBlock>
              </MonthlyListView>
              <Image src={item.url} alt="Monthly image" />
            </MonthlyListBlock>
          ))}
        </MonthlyWrapper>
      </Wrapper>

      {TempList.map((item, i) => (
        <TempListBlock key={`MonthlyList${i.toString()}`}>
          <Image src={item.url} alt="Monthly image" isMargin />
          <MonthlyListView>
            <MonthlyName>{item.name}</MonthlyName>
            <TagsBlock key={`TagsList${i.toString()}`}>
              {item.tags?.map((item, i) => (
                <Tags>{item}</Tags>
              ))}
            </TagsBlock>
          </MonthlyListView>
        </TempListBlock>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1052px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  flex-direction: row;

  padding: 44px 10px;

  justify-content: space-between;

  border-bottom: 1px solid ${palette.base.gray300};
`;

const PickWrapper = styled.div`
  position: releative;

  width: calc(60% - 16px);
  max-width: 580px;
  height: 400px;

  display: block;
  box-sizing: bMonthly-box;

  background-image: url('http://m.romand.co.kr/web/product/extra/big/202010/c6041e1df86417f98e42f53bf16056a8.jpg');
  background-size: cover;
  border-radius: 6px;

  margin-right: 10px;
`;

const PickLabel = styled.div`
  position: absolute;
  display: inline-block;
  box-sizing: bMonthly-box;

  width: 140px;
  z-index: 1;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${palette.primary.blue};
  padding: 2px 10px;
  background-color: ${palette.base.white};
  border-radius: 14px;
  box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 10%), -2px -2px 4px 0 rgb(0 0 0 / 10%);

  margin: 15px;
`;

const Title = styled.div`
  position: absolute;
  display: inline-block;
  box-sizing: bMonthly-box;

  font-size: 22px;
  font-weight: bold;
  color: ${palette.base.white};

  top: 370px;
  margin-left: 15px;
`;

const Subtitle = styled.div`
  position: absolute;
  display: inline-block;
  box-sizing: bMonthly-box;

  font-size: 18px;
  color: ${palette.base.white};

  top: 400px;
  margin-left: 15px;
`;

const MonthlyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 30px;
`;

const MonthlyTitle = styled.div`
  font-size: 22px;
  color: ${palette.base.black};
  font-weight: bold;

  padding: 0px 20px 20px 20px;
`;

const MonthlyListBlock = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;

  justify-content: space-between;
`;

const MonthlyListView = styled.div`
  display: flex;
  flex-direction: column;
`;

const MonthlyName = styled.div`
  font-size: 18px;
  color: ${palette.base.black};
  font-weight: bold;
  line-height: 25px;
  max-width: 300px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;

  ${({ isMargin }) =>
    isMargin &&
    css`
      margin-right: 10px;
    `}
`;

const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Tags = styled.div`
  font-size: 12px;
  background-color: ${palette.base.gray200};
  color: ${palette.base.gray600};
  border-radius: 4px;
  padding: 3px 8px;
  line-height: 16px;

  margin-right: 8px;
`;

const TempListBlock = styled.div`
  width: 100%;
  max-width: 1052px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 20px;

  border-bottom: 1px solid ${palette.base.gray300};
`;

export default Main;
