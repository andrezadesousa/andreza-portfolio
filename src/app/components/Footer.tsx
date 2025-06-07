"use client";

import type React from "react";
import styled from "styled-components";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const FooterSection = styled.footer<{ $isDark: boolean }>`
  padding: 60px 0 30px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-black)" : "var(--color-brown)"};
  color: var(--color-white);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
`;

const FooterSection1 = styled.div``;

const FooterTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-white);
    color: var(--color-brown);
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.div``;

const QuickLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const QuickLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: var(--color-cream);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Copyright = styled.p`
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <FooterSection $isDark={isDark}>
      <div className="container">
        <FooterContent>
          <FooterSection1>
            <FooterTitle>Andreza</FooterTitle>
            <FooterDescription>
              Desenvolvedora Front-end apaixonada por criar experiências
              digitais incríveis. Sempre em busca de novos desafios e
              oportunidades para crescer profissionalmente.
            </FooterDescription>

            <ContactInfo>
              <ContactItem>
                <Mail size={18} />
                <span>andreza@email.com</span>
              </ContactItem>
              <ContactItem>
                <Phone size={18} />
                <span>+55 (11) 99999-9999</span>
              </ContactItem>
              <ContactItem>
                <MapPin size={18} />
                <span>São Paulo, SP - Brasil</span>
              </ContactItem>
            </ContactInfo>

            <SocialLinks>
              <SocialLink href="https://instagram.com" target="_blank">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank">
                <Github size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank">
                <Linkedin size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterSection1>

          <QuickLinks>
            <FooterTitle>Links Rápidos</FooterTitle>
            <QuickLinksList>
              <li>
                <QuickLink href="#home">Home</QuickLink>
              </li>
              <li>
                <QuickLink href="#journey">Trajetória</QuickLink>
              </li>
              <li>
                <QuickLink href="#skills">Skills</QuickLink>
              </li>
              <li>
                <QuickLink href="#education">Educação</QuickLink>
              </li>
              <li>
                <QuickLink href="#testimonials">Testemunhos</QuickLink>
              </li>
              <li>
                <QuickLink href="#projects">Projetos</QuickLink>
              </li>
            </QuickLinksList>
          </QuickLinks>

          <QuickLinks>
            <FooterTitle>Serviços</FooterTitle>
            <QuickLinksList>
              <li>
                <QuickLink href="#">Desenvolvimento Web</QuickLink>
              </li>
              <li>
                <QuickLink href="#">Consultoria React</QuickLink>
              </li>
              <li>
                <QuickLink href="#">UI/UX Design</QuickLink>
              </li>
              <li>
                <QuickLink href="#">Mentoria</QuickLink>
              </li>
              <li>
                <QuickLink href="#">Code Review</QuickLink>
              </li>
            </QuickLinksList>
          </QuickLinks>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2024 Andreza. Feito com <Heart size={16} fill="red" color="red" />{" "}
            e muito código
          </Copyright>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
            Todos os direitos reservados. Este portfólio foi desenvolvido com
            React, TypeScript e muito carinho.
          </p>
        </FooterBottom>
      </div>
    </FooterSection>
  );
};

export default Footer;
