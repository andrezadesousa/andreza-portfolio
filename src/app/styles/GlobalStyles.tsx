import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Playwrite+DE+Grund:wght@100..400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-family: 'Playwrite DE Grund', cursive;
    font-weight: 400;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  section {
    padding: 5rem 1rem;
    
    @media (min-width: 768px) {
      padding: 8rem 2rem;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({
  theme,
}) => theme.secondary});
      border-radius: 2px;
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
`;
