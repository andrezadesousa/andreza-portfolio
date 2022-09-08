import styled from "styled-components";

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
