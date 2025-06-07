"use client";

import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, Building } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(odd) {
    .timeline-content {
      margin-left: auto;

      @media (max-width: 768px) {
        margin-left: 60px;
        margin-right: 0;
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      margin-right: auto;
      text-align: right;

      @media (max-width: 768px) {
        margin-left: 60px;
        margin-right: 0;
        text-align: left;
      }

      .timeline-icon {
        left: auto;
        right: -60px;

        @media (max-width: 768px) {
          left: -60px;
          right: auto;
        }
      }

      .timeline-date {
        justify-content: flex-end;

        @media (max-width: 768px) {
          justify-content: flex-start;
        }
      }
    }
  }
`;

const TimelineContent = styled.div`
  position: relative;
  width: calc(50% - 40px);
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 768px) {
    width: calc(100% - 60px);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: -60px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.background};
  z-index: 1;

  @media (max-width: 768px) {
    left: -60px;
  }
`;

const TimelineDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const TimelineDescription = styled.p`
  margin-bottom: 0;
`;

// Background decorativo com ícones de código
const BackgroundIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.03;
  overflow: hidden;
`;

const CodeIcon = styled.div`
  position: absolute;
  font-size: 2rem;
  font-family: "Space Grotesk", monospace;
  color: ${({ theme }) => theme.primary};
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  &:nth-child(even) {
    animation-delay: -3s;
  }
`;

const CareerSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null); // Section pode continuar como HTMLElement
  const timelineRef = useRef<HTMLDivElement | null>(null); // Timeline precisa ser HTMLDivElement

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (section && timeline) {
      const timelineItems = timeline.querySelectorAll(".timeline-item");

      timelineItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "bottom bottom-=200",
              toggleActions: "play none none none",
            },
            duration: 0.8,
          }
        );
      });

      // Animar ícones de fundo
      const codeIcons = section.querySelectorAll(".code-icon");
      gsap.fromTo(
        codeIcons,
        { y: 0 },
        {
          y: (i) => (i % 2 === 0 ? 50 : -50),
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

  const careerData = [
    {
      id: 1,
      title: "Desenvolvedora Front-end Sênior",
      company: "Tech Solutions",
      date: "Jan 2022 - Presente",
      description:
        "Liderança no desenvolvimento de interfaces de usuário para aplicações web de grande escala, utilizando React, TypeScript e styled-components.",
    },
    {
      id: 2,
      title: "Desenvolvedora Front-end Pleno",
      company: "Digital Innovations",
      date: "Mar 2020 - Dez 2021",
      description:
        "Desenvolvimento de componentes reutilizáveis e implementação de designs responsivos para diversos clientes.",
    },
    {
      id: 3,
      title: "Desenvolvedora Front-end Júnior",
      company: "WebCreative Studio",
      date: "Jun 2018 - Fev 2020",
      description:
        "Criação de interfaces de usuário e implementação de funcionalidades interativas para websites e aplicações web.",
    },
    {
      id: 4,
      title: "Estagiária de Desenvolvimento Web",
      company: "StartUp Hub",
      date: "Jan 2018 - Mai 2018",
      description:
        "Suporte no desenvolvimento de websites e aprendizado prático das tecnologias front-end mais utilizadas no mercado.",
    },
  ];

  // Ícones de código para o background
  const codeIcons = [
    { icon: "</>", x: "10%", y: "20%" },
    { icon: "{}", x: "85%", y: "15%" },
    { icon: "[]", x: "70%", y: "70%" },
    { icon: "()", x: "20%", y: "80%" },
    { icon: "#", x: "30%", y: "30%" },
    { icon: "/*", x: "80%", y: "40%" },
    { icon: "===", x: "40%", y: "60%" },
    { icon: "->", x: "60%", y: "20%" },
    { icon: "||", x: "15%", y: "50%" },
    { icon: "&&", x: "50%", y: "85%" },
    { icon: "!=", x: "25%", y: "60%" },
    { icon: "++", x: "75%", y: "25%" },
  ];

  return (
    <Section id="career" ref={sectionRef}>
      <BackgroundIcons>
        {codeIcons.map((item, index) => (
          <CodeIcon
            key={index}
            className="code-icon"
            style={{
              left: item.x,
              top: item.y,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {item.icon}
          </CodeIcon>
        ))}
      </BackgroundIcons>

      <Container>
        <Title>Minha Trajetória</Title>

        <Timeline ref={timelineRef}>
          {careerData.map((item) => (
            <TimelineItem key={item.id} className="timeline-item">
              <TimelineContent className="timeline-content">
                <TimelineIcon className="timeline-icon">
                  <Briefcase size={18} />
                </TimelineIcon>
                <TimelineDate className="timeline-date">
                  <Calendar size={16} />
                  {item.date}
                </TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineCompany>
                  <Building size={16} />
                  {item.company}
                </TimelineCompany>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default CareerSection;
