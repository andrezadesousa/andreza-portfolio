import styled from "styled-components";

export const Button = styled.a`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);

  &:hover {
    background-color: var(--first-color-alt);
  }

  @media screen and (min-width: 1024px) {
    margin: 1.5rem 2.5rem;
  }
`;

export const ScrollButton = styled.a`
  color: var(--first-color);
  transition: 0.3s;

  &:hover {
    transform: translateY(0.25rem);
  }

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`;

export const ButtonAbout = styled.a`
  display: none;
  @media screen and (min-width: 1200px) {
    /* display: inline-flex; */
    align-items: center;
    column-gap: 0.5rem;
    color: #3e6553;
    font-weight: 500;
    margin-top: 0rem;
    display: inline-block;
    background-color: #fff;
    border-radius: 3rem;
    padding: 0.8rem 1.5rem;
    transition: 0.4s;
    border: 1px solid #3e6553;
    box-shadow: 0 4px 12px #3e6553;
    cursor: pointer;

    &:hover {
      color: #fff;
      font-weight: 500;
      background-color: #3e6553;
      box-shadow: 0 4px 12px #3e6553;
      transition: 0.4s;
    }
  }
`;
