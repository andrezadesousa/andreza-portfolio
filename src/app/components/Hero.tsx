"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { StyledButton } from "./StyledButton";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.background} 0%,
    #f0f9ff 100%
  );
`;

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: 1;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &.layer-1 {
    background-image: url("/images/mountain-1.png");
    z-index: 1;
  }

  &.layer-2 {
    background-image: url("/images/mountain-2.png");
    z-index: 2;
    opacity: 0.8;
  }

  &.layer-3 {
    background-image: url("/images/mountain-3.png");
    z-index: 3;
    opacity: 0.6;
  }

  &.layer-4 {
    background-image: url("/images/mountain-4.png");
    z-index: 4;
    opacity: 0.4;
  }

  &.layer-5 {
    background-image: url("/images/mountain-5.png");
    z-index: 5;
    opacity: 0.2;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  margin-bottom: 1.5rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  max-width: 600px;
  font-weight: 300;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ScrollDownButton = styled(motion.a)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  z-index: 10;

  svg {
    margin-top: 0.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Hero = () => {
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const parallaxLayers = document.querySelectorAll(".parallax-layer");

    if (section && parallaxLayers.length) {
      // Criar efeito parallax para cada camada
      parallaxLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2; // Velocidades diferentes para cada camada

        gsap.fromTo(
          layer,
          { y: 0 },
          {
            y: () => -100 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Efeito de fade para o conteúdo
      gsap.fromTo(
        ".hero-content",
        { opacity: 1, y: 0 },
        {
          opacity: 0.3,
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <HeroSection id="home" ref={sectionRef}>
      <ParallaxContainer ref={parallaxRef}>
        <ParallaxLayer className="parallax-layer layer-1" />
        <ParallaxLayer className="parallax-layer layer-2" />
        <ParallaxLayer className="parallax-layer layer-3" />
        <ParallaxLayer className="parallax-layer layer-4" />
        <ParallaxLayer className="parallax-layer layer-5" />
      </ParallaxContainer>

      <HeroContent className="hero-content">
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou Andreza
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desenvolvedora Front-end apaixonada por criar experiências web
          incríveis e interfaces intuitivas
        </HeroSubtitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StyledButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Ver Projetos
          </StyledButton>
        </motion.div>
      </HeroContent>

      <ScrollDownButton
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Rolar para baixo
        <ArrowDown size={20} />
      </ScrollDownButton>
    </HeroSection>
  );
};

export default Hero;
