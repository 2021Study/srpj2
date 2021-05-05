import SpoqaHanSansBoldTtf from '../static/fonts/Spoqa-Han-Sans-Bold.ttf';
import SpoqaHanSansBoldWoff2 from '../static/fonts/Spoqa-Han-Sans-Bold.woff2';
import SpoqaHanSansRegularTtf from '../static/fonts/Spoqa-Han-Sans-Regular.ttf';
import SpoqaHanSansRegularWoff2 from '../static/fonts/Spoqa-Han-Sans-Regular.woff2';

export default `
  html, body {
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 0;
    line-height: normal;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 16px;
  }
  p {
    font-size: 16px;
  }
  
  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: normal;
    src: url(${SpoqaHanSansRegularTtf}) format('ttf'),
         url(${SpoqaHanSansRegularWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: bold;
    src: url(${SpoqaHanSansBoldTtf}) format('ttf'),
         url(${SpoqaHanSansBoldWoff2}) format('woff2');
  }
  
`;
