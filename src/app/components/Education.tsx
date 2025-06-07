"use client";

import type React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const EducationSection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-black)" : "var(--color-cream)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
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
    grid-template-rows: repeat(8, 200px);
  }
`;

const BentoCard = styled(motion.div)<{
  $gridArea: string;
  $isDark: boolean;
  $isLarge?: boolean;
}>`
  grid-area: ${(props) => props.$gridArea};
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.1)" : "var(--color-white)"};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    grid-area: unset;
  }
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-brown);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-brown);
`;

const CardSubtitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
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
`;

const Education: React.FC = () => {
  const { isDark } = useTheme();

  const educationData = [
    {
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade de São Paulo",
      period: "2016 - 2020",
      description:
        "Formação sólida em algoritmos, estruturas de dados e engenharia de software.",
      icon: <GraduationCap size={24} />,
      gridArea: "1 / 1 / 3 / 3",
      isLarge: true,
    },
    {
      title: "Especialização em React",
      institution: "Rocketseat",
      period: "2021",
      description: "Curso intensivo focado em React e boas práticas.",
      icon: <Award size={24} />,
      gridArea: "1 / 3 / 2 / 5",
    },
    {
      title: "Certificação TypeScript",
      institution: "Microsoft Learn",
      period: "2022",
      description: "Certificação oficial em TypeScript.",
      icon: <Award size={24} />,
      gridArea: "2 / 3 / 3 / 4",
    },
    {
      title: "UX/UI Design",
      institution: "Google UX Design",
      period: "2023",
      description: "Design de experiência do usuário.",
      icon: <Award size={24} />,
      gridArea: "2 / 4 / 3 / 5",
    },
    {
      title: "Curso de JavaScript Avançado",
      institution: "Alura",
      period: "2020",
      description: "Aprofundamento em JavaScript moderno e ES6+.",
      icon: <BookOpen size={24} />,
      gridArea: "3 / 1 / 4 / 2",
    },
    {
      title: "Bootcamp Full Stack",
      institution: "Digital Innovation One",
      period: "2021",
      description: "Desenvolvimento full stack com foco em React e Node.js.",
      icon: <BookOpen size={24} />,
      gridArea: "3 / 2 / 4 / 4",
    },
    {
      title: "Certificação AWS",
      institution: "Amazon Web Services",
      period: "2024",
      description: "Cloud computing e deploy de aplicações.",
      icon: <Award size={24} />,
      gridArea: "3 / 4 / 4 / 5",
    },
  ];

  return (
    <EducationSection id="education" $isDark={isDark}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Educação & Certificações
        </motion.h2>

        <BentoGrid>
          {educationData.map((item, index) => (
            <BentoCard
              key={index}
              $gridArea={item.gridArea}
              $isDark={isDark}
              $isLarge={item.isLarge}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>{item.icon}</CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{item.institution}</CardSubtitle>
              <CardPeriod>
                <Calendar size={14} />
                {item.period}
              </CardPeriod>
              <CardDescription>{item.description}</CardDescription>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </EducationSection>
  );
};

export default Education;
