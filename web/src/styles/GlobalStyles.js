import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: rgba(207, 0, 15);
    --secondary: rgba(150, 40, 27);
    --darkBlue: #292C6D; 
    --darkPurple: #161853;
    --black-1: #0D121F;
    --black-2: #121826;
    --white-1: #F6F1F1;
    --white-2: #f2f2f2;
    --white-3: #F8F8F8;
    --white-4: #F9F9F9;
    --white-5: #FDFDFD;
    --gray: #EEEEEE;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: Inter, sans-serif;
    background: var(--white);
    color: var(--black-2);
  }
  a{
    text-decoration: none;
    color: var(--black-2);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;
