import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
  HEADER_HEIGHT,
  TITLE_HEADER_HEIGHT,
  HEADER_MOBILE_HEIGHT,
} from '../../util/constant/styles';
import media from '../../styles/media';

const ResponsivePageTemplate = ({ children, isFullInner }) => {
  return (
    <Template>
      <Inner isFullInner={isFullInner}>{children}</Inner>
    </Template>
  );
};

ResponsivePageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  isFullInner: PropTypes.bool,
};

ResponsivePageTemplate.defaultProps = {
  isFullInner: false,
};

const Template = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding-top: ${({ isShowPageTitle, isShowGNB }) => {
    if (!isShowGNB) return '0px';
    if (isShowPageTitle) return `${HEADER_HEIGHT + TITLE_HEADER_HEIGHT}px`;
    return `${HEADER_HEIGHT}px`;
  }};

  ${media.mobile} {
    padding-top: ${({ isShowPageTitle, isShowGNB }) => {
      if (!isShowGNB) return '0px';
      if (isShowPageTitle)
        return `${HEADER_MOBILE_HEIGHT + TITLE_HEADER_HEIGHT}px`;
      return `${HEADER_MOBILE_HEIGHT}px`;
    }};
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${props =>
    !props.isFullInner &&
    css`
      max-width: 1280px;
    `}
  height: 100%;
  flex: 1 1 auto;
  min-width: 360px;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default ResponsivePageTemplate;
