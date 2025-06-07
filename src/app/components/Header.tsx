"use client";

import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.navBg};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

const NavLinks = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    display: none;
  }
`;

const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  margin-left: 1rem;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 500;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <NavContainer>
          <Logo>
            Dev<span>Andreza</span>
          </Logo>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#career">Trajetória</NavLink>
            <NavLink href="#skills">Habilidades</NavLink>
            <NavLink href="#projects">Projetos</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </NavLinks>
          <div style={{ display: "flex" }}>
            <ThemeToggleButton onClick={toggleTheme}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </ThemeToggleButton>
            <MobileMenuButton onClick={toggleMobileMenu}>
              <Menu size={24} />
            </MobileMenuButton>
          </div>
        </NavContainer>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuButton
              onClick={toggleMobileMenu}
              style={{ position: "absolute", top: "1rem", right: "1rem" }}
            >
              <X size={24} />
            </MobileMenuButton>
            <MobileNavLinks>
              <MobileNavLink href="#home" onClick={toggleMobileMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={toggleMobileMenu}>
                Sobre
              </MobileNavLink>
              <MobileNavLink href="#career" onClick={toggleMobileMenu}>
                Trajetória
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={toggleMobileMenu}>
                Habilidades
              </MobileNavLink>
              <MobileNavLink href="#projects" onClick={toggleMobileMenu}>
                Projetos
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMobileMenu}>
                Contato
              </MobileNavLink>
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
