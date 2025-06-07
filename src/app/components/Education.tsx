"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import {
  GraduationCap,
  Award,
  Code,
  Palette,
  Database,
  Settings,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(Draggable);

const EducationSkillsSection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-default)" : "var(--color-white)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-default)"};
`;

const TimelineContainer = styled.div`
  margin-bottom: 4rem;
`;

const TimelineTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
  font-weight: 600;
`;

const TimelineWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
`;

const TimelineTrack = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const TimelineItem = styled(motion.div)<{ $isDark: boolean }>`
  min-width: 300px;
  background: ${(props) =>
    props.$isDark ? "var(--color-secondary)" : "var(--color-secondary)"};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(218, 197, 167, 0.2)" : "rgba(218, 197, 167, 0.3)"};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
    box-shadow: 0 10px 30px rgba(218, 197, 167, 0.2);
  }
`;

const ItemIcon = styled.div`
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

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
`;

const ItemSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  color: var(--color-white);
`;

const ItemDate = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 1rem;
  color: var(--color-white);
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-white);
`;

const SkillLevel = styled.div<{ $level: number }>`
  width: 100%;
  height: 6px;
  background: rgba(218, 197, 167, 0.2);
  border-radius: 3px;
  margin-top: 1rem;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.$level}%;
    height: 100%;
    background: var(--color-primary);
    border-radius: 3px;
    transition: width 1s ease;
  }
`;

const EducationSkills: React.FC = () => {
  const { isDark } = useTheme();
  const educationTrackRef = useRef<HTMLDivElement>(null);
  const skillsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (educationTrackRef.current) {
      Draggable.create(educationTrackRef.current, {
        type: "x",
        bounds: { minX: -800, maxX: 0 },
        inertia: true,
      });
    }

    if (skillsTrackRef.current) {
      Draggable.create(skillsTrackRef.current, {
        type: "x",
        bounds: { minX: -1000, maxX: 0 },
        inertia: true,
      });
    }
  }, []);

  const educationData = [
    {
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade de São Paulo",
      date: "2016 - 2020",
      description:
        "Formação sólida em algoritmos, estruturas de dados e engenharia de software.",
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Especialização em React",
      institution: "Rocketseat",
      date: "2021",
      description:
        "Curso intensivo focado em React e boas práticas de desenvolvimento.",
      icon: <Award size={24} />,
    },
    {
      title: "Certificação TypeScript",
      institution: "Microsoft Learn",
      date: "2022",
      description: "Certificação oficial em TypeScript e tipagem avançada.",
      icon: <Award size={24} />,
    },
    {
      title: "UX/UI Design",
      institution: "Google UX Design",
      date: "2023",
      description: "Design de experiência do usuário e prototipagem.",
      icon: <Palette size={24} />,
    },
    {
      title: "Certificação AWS",
      institution: "Amazon Web Services",
      date: "2024",
      description: "Cloud computing e deploy de aplicações.",
      icon: <Award size={24} />,
    },
  ];

  const skillsData = [
    {
      title: "React",
      category: "Frontend",
      level: 95,
      description:
        "Desenvolvimento de aplicações complexas com hooks e context.",
      icon: <Code size={24} />,
    },
    {
      title: "TypeScript",
      category: "Frontend",
      level: 90,
      description: "Tipagem estática para código mais seguro e maintível.",
      icon: <Code size={24} />,
    },
    {
      title: "Next.js",
      category: "Frontend",
      level: 85,
      description: "SSR, SSG e otimização de performance.",
      icon: <Code size={24} />,
    },
    {
      title: "Node.js",
      category: "Backend",
      level: 75,
      description: "APIs REST e integração com bancos de dados.",
      icon: <Database size={24} />,
    },
    {
      title: "Figma",
      category: "Design",
      level: 80,
      description: "Prototipagem e design de interfaces.",
      icon: <Palette size={24} />,
    },
    {
      title: "Git",
      category: "Tools",
      level: 90,
      description: "Controle de versão e colaboração em equipe.",
      icon: <Settings size={24} />,
    },
  ];

  return (
    <EducationSkillsSection id="education-skills" $isDark={isDark}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Educação & Skills
        </motion.h2>

        <TimelineContainer>
          <TimelineTitle>Educação</TimelineTitle>
          <TimelineWrapper>
            <TimelineTrack ref={educationTrackRef}>
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  $isDark={isDark}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ItemIcon>{item.icon}</ItemIcon>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemSubtitle>{item.institution}</ItemSubtitle>
                  <ItemDate>{item.date}</ItemDate>
                  <ItemDescription>{item.description}</ItemDescription>
                </TimelineItem>
              ))}
            </TimelineTrack>
          </TimelineWrapper>
        </TimelineContainer>

        <TimelineContainer>
          <TimelineTitle>Skills</TimelineTitle>
          <TimelineWrapper>
            <TimelineTrack ref={skillsTrackRef}>
              {skillsData.map((item, index) => (
                <TimelineItem
                  key={index}
                  $isDark={isDark}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ItemIcon>{item.icon}</ItemIcon>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemSubtitle>{item.category}</ItemSubtitle>
                  <ItemDescription>{item.description}</ItemDescription>
                  <SkillLevel $level={item.level} />
                </TimelineItem>
              ))}
            </TimelineTrack>
          </TimelineWrapper>
        </TimelineContainer>
      </div>
    </EducationSkillsSection>
  );
};

export default EducationSkills;
