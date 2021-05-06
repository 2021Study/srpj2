import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

import { HEADER_HEIGHT } from '../../util/constant/styles';
import { PRODUCT_MANAGEMENT_ROUTES } from '../../util/constant/TabRoute';
import ManagementTabsContents from './ManagementTabsContents';

import PrevImage from '../../static/assets/icon_prev.svg';

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

const ManagementTabs = () => {
  const { contentItem, contentChange } = useTabs(0, PRODUCT_MANAGEMENT_ROUTES);

  return (
    <Container>
      <ProductWrapper>
        <ProductHeader>
          <PrevIcon />
          <ProductContents>재고 관리</ProductContents>
        </ProductHeader>
      </ProductWrapper>

      <ProductListWrapper>
        <TabsContainer>
          <TabsWrapper>
            {PRODUCT_MANAGEMENT_ROUTES.map((item, i) => (
              <Tabs
                key={`PRODUCT_MANAGEMENT_ROUTES${i.toString()}`}
                onClick={() => contentChange(i)}
                isActive={item.key === contentItem.key}
              >
                {item.title}
              </Tabs>
            ))}
          </TabsWrapper>

          <ManagementTabsContents isActive={contentItem.key} />
        </TabsContainer>
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

const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

const TabsContainer = styled.div`
  width: 100%;
  max-width: 1052px;
  padding: 20px;
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${palette.base.gray300};
`;

const Tabs = styled.button`
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  width: 100%;
  padding: 10px 20px;
  height: 62px;
  border-bottom: 3px solid
    ${props => (props.isActive ? palette.base.black : palette.base.white)};
  color: ${palette.base.black};
  cursor: pointer;
`;

export default ManagementTabs;
