"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { StyledButton } from "./StyledButton";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.surface};
  padding: 4rem 0 2rem;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    border-radius: 2px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    color: white;
    transform: translateY(-5px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.border};
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ScrollToTop = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  color: white;
  position: absolute;
  right: 2rem;
  top: -20px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer id="contact">
      <ScrollToTop
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </ScrollToTop>

      <FooterContent>
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <Mail size={20} />
              <a href="mailto:andreza@example.com">andreza@example.com</a>
            </ContactItem>
          </ContactInfo>

          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <SocialLinks>
              <SocialLink
                href="https://github.com/andreza"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/andreza"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/andreza"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </SocialLink>
            </SocialLinks>
          </div>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Vamos Trabalhar Juntos</FooterTitle>
          <p>
            Estou sempre aberta a novas oportunidades e colaborações. Se você
            tem um projeto em mente ou está procurando uma desenvolvedora
            front-end para sua equipe, entre em contato!
          </p>

          <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Entre em Contato
          </StyledButton>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          &copy; {new Date().getFullYear()} Andreza. Todos os direitos
          reservados.
        </Copyright>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="www.google.com"
            style={{ color: "inherit", fontSize: "0.9rem" }}
          >
            Termos de Uso
          </a>
          <a
            href="www.google.com"
            style={{ color: "inherit", fontSize: "0.9rem" }}
          >
            Política de Privacidade
          </a>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
