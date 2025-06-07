"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Instagram, Github, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HeroSection = styled.section<{ $isDark: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$isDark ? "var(--color-black)" : "var(--color-white)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 450px;
  border-radius: 20px;
  object-fit: cover;
  border: 3px solid var(--color-brown);

  @media (max-width: 768px) {
    width: 280px;
    height: 360px;
  }
`;

const TextContent = styled.div`
  z-index: 2;
`;

const AboutTitle = styled(motion.h3)`
  font-size: 1.2rem;
  color: var(--color-brown);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--color-brown);
  margin-bottom: 2rem;
  font-weight: 300;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 500px;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-black)" : "var(--color-white)"};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-brown);
    color: var(--color-white);
    transform: translateY(-3px);
  }
`;

const FloatingElement = styled(motion.div)<{ $isDark: boolean }>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isDark ? "var(--color-cream)" : "var(--color-light-gray)"};
  opacity: 0.3;
`;

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingRef.current) {
      gsap.to(floatingRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <HeroSection id="home" $isDark={isDark}>
      <div className="container">
        <HeroContent>
          <ImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <ProfileImage src="/images/andreza.jpeg" alt="Andreza" />
            <FloatingElement
              ref={floatingRef}
              $isDark={isDark}
              style={{ top: "10%", right: "10%" }}
            />
            <FloatingElement
              $isDark={isDark}
              style={{ bottom: "20%", left: "5%" }}
              animate={{
                x: [0, 15, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </ImageContainer>

          <TextContent>
            <AboutTitle
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </AboutTitle>

            <Title
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Olá, eu sou a Andreza
            </Title>

            <Subtitle
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Desenvolvedora Front-end
            </Subtitle>

            <Description
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Apaixonada por criar experiências digitais incríveis e interfaces
              que conectam pessoas. Especializada em React, TypeScript e design
              responsivo, sempre buscando inovação e excelência em cada projeto.
            </Description>

            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <SocialLink
                href="https://instagram.com"
                target="_blank"
                $isDark={isDark}
              >
                <Instagram size={24} />
              </SocialLink>
              <SocialLink
                href="https://github.com"
                target="_blank"
                $isDark={isDark}
              >
                <Github size={24} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                $isDark={isDark}
              >
                <Linkedin size={24} />
              </SocialLink>
            </SocialLinks>
          </TextContent>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;
