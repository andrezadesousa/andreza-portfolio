"use client";

import type React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HeaderContainer = styled(motion.header)<{
  $isDark: boolean;
  $isScrolled: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: ${(props) =>
    props.$isScrolled
      ? props.$isDark
        ? "rgba(0, 0, 0, 0.95)"
        : "rgba(255, 255, 255, 0.95)"
      : "transparent"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1<{ $isDark: boolean }>`
  font-family: var(--font-primary);
  font-size: 1.5rem;
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
`;

const NavLinks = styled.ul<{ $isOpen: boolean; $isDark: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.$isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background: ${(props) =>
      props.$isDark ? "var(--color-black)" : "var(--color-white)"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
  }
`;

const NavLink = styled.a<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-brown);
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button<{ $isDark: boolean }>`
  background: none;
  border: none;
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  }
`;

const MenuButton = styled.button<{ $isDark: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#journey", label: "Trajetória" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Educação" },
    { href: "#testimonials", label: "Testemunhos" },
    { href: "#projects", label: "Projetos" },
  ];

  return (
    <HeaderContainer
      $isDark={isDark}
      $isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo $isDark={isDark}>Andreza</Logo>

        <NavLinks $isOpen={isMenuOpen} $isDark={isDark}>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                $isDark={isDark}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>

        <Controls>
          <ThemeToggle onClick={toggleTheme} $isDark={isDark}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeToggle>

          <MenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            $isDark={isDark}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuButton>
        </Controls>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
