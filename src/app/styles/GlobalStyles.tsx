import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Chillax:wght@200;300;400;500;600;700&display=swap');

  :root {
    --color-default: #0E0E0E;
    --color-primary: #DAC5A7;
    --color-secondary: #1A1A1A;
    --color-white: #FFFFFF;
    --color-gray: #808080;
    
    --font-primary: 'Chillax', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    font-family: var(--font-primary);
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }
`;

export default GlobalStyles;
