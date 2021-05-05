import { MOBILE_SIZE } from '../util/constant/styles';

export const mediaQuery = maxWidth => `
  @media (max-width: ${maxWidth}px)
`;

export const INNER_SIZE = 406 + 16 * 2;

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1024),
  medium: mediaQuery(900),
  small: mediaQuery(720),
  xsmall: mediaQuery(375),
  pcWebMedium: mediaQuery(1279),
  mobile: mediaQuery(MOBILE_SIZE),
};

export default media;
