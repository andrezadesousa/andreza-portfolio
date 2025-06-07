import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  :root {
    --color-black: #000000;
    --color-brown: #6F3D24;
    --color-white: #FFFFFF;
    --color-cream: #E1CDA6;
    --color-light-gray: #F3F3F3;
    
    --font-primary: 'Playwrite DE Grund', cursive;
    --font-secondary: 'Merriweather Sans', sans-serif;
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
    font-family: var(--font-secondary);
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
  }

  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }
`;

export default GlobalStyles;
