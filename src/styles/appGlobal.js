import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  ;
  * {
    text-decoration: none;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Tenor sans', sans-serif;
    color: black;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  .styled-list li {
    margin: 12px 0;
    line-height: 180%;
  }
  

  ul {
    li {
      line-height: 180%;
      margin: .8rem 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;