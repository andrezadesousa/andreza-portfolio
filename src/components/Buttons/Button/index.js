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