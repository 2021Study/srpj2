import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

// import { HOT_CONTENT, NO_FOOTER_URL_LIST } from '../../util/constant';

// import SideBar from '../../components/layout/sideBar/SideBar';
// import Footer from '../../components/layout/footer/Footer';
// import media from '../../style/media';

const LayoutContainer = ({ children }) => {
  return (
    <>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const MainWrapper = styled.section`
  display: flex;
  height: 100%;
  min-height: calc(100% - 261px);
  margin: 0 auto;
  padding-top: 60px;

  & > main,
  & > div {
    width: 100%;
  }
`;

export default LayoutContainer;
