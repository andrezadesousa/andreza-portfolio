"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
export const StyledButton = styled(motion.button)`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  align-self: flex-start; /* <- adicionar aqui */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// export const StyledButton = styled(motion.button)`
//   background: linear-gradient(
//     90deg,
//     ${({ theme }) => theme.primary},
//     ${({ theme }) => theme.secondary}
//   );
//   color: white;
//   padding: 0.75rem 2rem;
//   border-radius: 50px;
//   font-weight: 600;
//   font-size: 1rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;
