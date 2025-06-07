"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 3px solid transparent;
    border-radius: 20px;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.primary},
        ${({ theme }) => theme.secondary}
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

const ContentContainer = styled.div`
  flex: 1.5;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    border-radius: 2px;
  }
`;

const Text = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        section.querySelector(".parallax-bg"),
        { y: 0 },
        {
          y: 100,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
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
    <Section id="about" ref={sectionRef}>
      <div
        className="parallax-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          background:
            "radial-gradient(circle, transparent 20%, #000 20%, #000 21%, transparent 21%, transparent 30%, #000 30%, #000 31%, transparent 31%) 0 0/80px 80px",
          zIndex: -1,
        }}
      />

      <Container>
        <ImageContainer>
          <ProfileImage
            ref={imageRef}
            animate={
              isInView
                ? {
                    scale: [0.9, 1],
                    opacity: [0, 1],
                    rotate: [-5, 0],
                  }
                : {}
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/placeholder.svg?height=320&width=320"
              alt="Foto de perfil"
            />
          </ProfileImage>
        </ImageContainer>

        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title>Sobre Mim</Title>
            <Text>
              Olá! Sou uma desenvolvedora front-end apaixonada por criar
              interfaces interativas e responsivas que proporcionam experiências
              excepcionais aos usuários.
            </Text>
            <Text>
              Com um olhar atento aos detalhes e uma mentalidade criativa,
              transformo conceitos em código limpo e eficiente. Minha abordagem
              combina princípios de design com as melhores práticas de
              desenvolvimento para criar produtos digitais que não apenas
              parecem ótimos, mas também funcionam perfeitamente.
            </Text>
            <Text>
              Estou sempre aprendendo e me adaptando às novas tecnologias e
              tendências do setor, buscando constantemente aprimorar minhas
              habilidades e expandir meu conhecimento.
            </Text>
          </motion.div>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default AboutSection;
