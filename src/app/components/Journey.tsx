"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const JourneySection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-secondary)" : "var(--color-secondary)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-default)"};
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 200px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 200px);
  }
`;

const BentoCard = styled(motion.div)<{
  $gridArea: string;
  $isDark: boolean;
  $isLarge?: boolean;
}>`
  grid-area: ${(props) => props.$gridArea};
  background: ${(props) =>
    props.$isDark ? "rgba(218, 197, 167, 0.1)" : "rgba(218, 197, 167, 0.2)"};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(218, 197, 167, 0.2)" : "rgba(218, 197, 167, 0.3)"};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
    box-shadow: 0 10px 30px rgba(218, 197, 167, 0.2);
  }

  @media (max-width: 1024px) {
    grid-area: unset;
  }
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-default);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
`;

const CardCompany = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  font-weight: 500;
`;

const CardLocation = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
`;

const CardPeriod = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: var(--color-primary);
  color: var(--color-default);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const Journey: React.FC = () => {
  const { isDark } = useTheme();
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (journeyRef.current) {
      const cards = journeyRef.current.querySelectorAll(".bento-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  const journeyData = [
    {
      title: "Desenvolvedora Front-end Sênior",
      company: "Tech Solutions Inc.",
      period: "2023 - Presente",
      location: "São Paulo, SP",
      description:
        "Liderança técnica em projetos React complexos e mentoria de desenvolvedores juniores.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
      gridArea: "1 / 1 / 3 / 3",
      isLarge: true,
    },
    {
      title: "Desenvolvedora Front-end Pleno",
      company: "Digital Agency",
      period: "2021 - 2023",
      location: "São Paulo, SP",
      description:
        "Desenvolvimento de aplicações web responsivas e integração com APIs.",
      technologies: ["React", "JavaScript", "SASS", "Node.js"],
      gridArea: "1 / 3 / 2 / 5",
    },
    {
      title: "Desenvolvedora Front-end Júnior",
      company: "StartUp Innovation",
      period: "2020 - 2021",
      location: "São Paulo, SP",
      description:
        "Criação de interfaces modernas e aprendizado de novas tecnologias.",
      technologies: ["React", "CSS", "Git", "Figma"],
      gridArea: "2 / 3 / 3 / 4",
    },
    {
      title: "Estagiária em Desenvolvimento",
      company: "Web Solutions",
      period: "2019 - 2020",
      location: "São Paulo, SP",
      description: "Primeiros passos no desenvolvimento web.",
      technologies: ["HTML", "CSS", "JavaScript"],
      gridArea: "2 / 4 / 3 / 5",
    },
    {
      title: "Projetos Freelance",
      company: "Autônoma",
      period: "2018 - 2019",
      location: "São Paulo, SP",
      description:
        "Desenvolvimento de sites e landing pages para pequenas empresas.",
      technologies: ["WordPress", "PHP", "MySQL"],
      gridArea: "3 / 1 / 4 / 3",
    },
    {
      title: "Estudos & Certificações",
      company: "Diversos Cursos",
      period: "2016 - Presente",
      location: "Online",
      description: "Formação contínua em tecnologias front-end e design.",
      technologies: ["Cursos", "Bootcamps", "Certificações"],
      gridArea: "3 / 3 / 4 / 5",
    },
  ];

  return (
    <JourneySection id="journey" $isDark={isDark}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Minha Trajetória
        </motion.h2>

        <BentoGrid ref={journeyRef}>
          {journeyData.map((item, index) => (
            <BentoCard
              key={index}
              className="bento-card"
              $gridArea={item.gridArea}
              $isDark={isDark}
              $isLarge={item.isLarge}
            >
              <CardIcon>
                <Briefcase size={20} />
              </CardIcon>

              <CardTitle>{item.title}</CardTitle>
              <CardCompany>{item.company}</CardCompany>

              <CardLocation>
                <MapPin size={14} />
                {item.location}
              </CardLocation>

              <CardPeriod>
                <Calendar size={14} />
                {item.period}
              </CardPeriod>

              <CardDescription>{item.description}</CardDescription>

              <TechStack>
                {item.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </JourneySection>
  );
};

export default Journey;
