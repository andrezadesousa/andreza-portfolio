"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Instagram, Github, Linkedin, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HeroSection = styled.section<{ $isDark: boolean }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.$isDark ? "var(--color-default)" : "var(--color-white)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-default)"};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div``;

const WelcomeText = styled(motion.p)`
  color: var(--color-primary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 700;

  .highlight {
    color: var(--color-primary);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
  color: var(--color-gray);
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.a<{
  $variant: "primary" | "secondary";
  $isDark: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid;

  ${(props) =>
    props.$variant === "primary"
      ? `
    background: var(--color-primary);
    color: var(--color-default);
    border-color: var(--color-primary);
    
    &:hover {
      background: transparent;
      color: var(--color-primary);
    }
  `
      : `
    background: transparent;
    color: ${props.$isDark ? "var(--color-white)" : "var(--color-default)"};
    border-color: ${
      props.$isDark ? "var(--color-white)" : "var(--color-default)"
    };
    
    &:hover {
      background: var(--color-primary);
      color: var(--color-default);
      border-color: var(--color-primary);
    }
  `}
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageFrame = styled.div<{ $isDark: boolean }>`
  position: relative;
  width: 350px;
  height: 400px;
  border: 4px solid
    ${(props) =>
      props.$isDark ? "var(--color-white)" : "var(--color-default)"};
  border-radius: 12px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: var(--color-primary);
    border-radius: 12px;
    z-index: -1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SocialLinks = styled.div`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    justify-content: center;
    transform: none;
    margin-top: 2rem;
  }
`;

const SocialLink = styled.a<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: ${(props) =>
    props.$isDark ? "var(--color-secondary)" : "var(--color-secondary)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-white)"};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    color: var(--color-default);
    transform: translateX(-5px);
  }
`;

const FloatingDots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Dot = styled(motion.div)<{
  $color: string;
  $size: number;
  $top: string;
  $left: string;
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: ${(props) => props.$color};
  border-radius: 50%;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
`;

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dotsRef.current) {
      const dots = dotsRef.current.querySelectorAll(".floating-dot");

      dots.forEach((dot, index) => {
        gsap.to(dot, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2,
        });
      });
    }
  }, []);

  const dots = [
    { color: "#FF6B6B", size: 8, top: "10%", left: "5%" },
    { color: "#4ECDC4", size: 12, top: "20%", left: "15%" },
    { color: "#45B7D1", size: 6, top: "15%", left: "85%" },
    { color: "#96CEB4", size: 10, top: "70%", left: "10%" },
    { color: "#FFEAA7", size: 14, top: "80%", left: "90%" },
    { color: "#DDA0DD", size: 8, top: "60%", left: "95%" },
  ];

  return (
    <HeroSection id="home" $isDark={isDark}>
      <FloatingDots ref={dotsRef}>
        {dots.map((dot, index) => (
          <Dot
            key={index}
            className="floating-dot"
            $color={dot.color}
            $size={dot.size}
            $top={dot.top}
            $left={dot.left}
          />
        ))}
      </FloatingDots>

      <div className="container">
        <HeroContent>
          <TextContent>
            <WelcomeText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome
            </WelcomeText>

            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I have <span className="highlight">Creative</span>
              <br />
              <span className="highlight">Development</span> Experience
            </Title>

            <Description
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sou Andreza, uma desenvolvedora Front-end criativa. Tenho ajudado
              empresas a resolver seus problemas com meu design por mais de 3
              anos.
            </Description>

            <ButtonGroup
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button href="#contact" $variant="primary" $isDark={isDark}>
                Contact Me
              </Button>
              <Button href="#projects" $variant="secondary" $isDark={isDark}>
                View Portfolio <ArrowRight size={18} />
              </Button>
            </ButtonGroup>
          </TextContent>

          <ImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <ImageFrame $isDark={isDark}>
              <ProfileImage src="/images/andreza.jpeg" alt="Andreza" />
            </ImageFrame>

            <SocialLinks>
              <SocialLink
                href="https://instagram.com"
                target="_blank"
                $isDark={isDark}
              >
                <Instagram size={20} />
              </SocialLink>
              <SocialLink
                href="https://github.com"
                target="_blank"
                $isDark={isDark}
              >
                <Github size={20} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                $isDark={isDark}
              >
                <Linkedin size={20} />
              </SocialLink>
            </SocialLinks>
          </ImageContainer>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;
