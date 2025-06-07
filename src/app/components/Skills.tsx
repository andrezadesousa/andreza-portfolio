"use client";

import React from "react";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-light-gray)" : "var(--color-white)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-black)" : "var(--color-black)"};
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryTab = styled.button<{ $active: boolean; $isDark: boolean }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  background: ${(props) =>
    props.$active ? "var(--color-brown)" : "transparent"};
  color: ${(props) =>
    props.$active ? "var(--color-white)" : "var(--color-brown)"};
  border: 2px solid var(--color-brown);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-primary);
  font-weight: 500;

  &:hover {
    background: var(--color-brown);
    color: var(--color-white);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)<{
  $size: "small" | "medium" | "large";
  $isDark: boolean;
}>`
  background: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-light-gray)"};
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  grid-row: span
    ${(props) => {
      switch (props.$size) {
        case "large":
          return 2;
        case "medium":
          return 1;
        case "small":
          return 1;
        default:
          return 1;
      }
    }};

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(111, 61, 36, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(111, 61, 36, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SkillIcon = styled.div<{ $size: "small" | "medium" | "large" }>`
  font-size: ${(props) => {
    switch (props.$size) {
      case "large":
        return "4rem";
      case "medium":
        return "3rem";
      case "small":
        return "2.5rem";
      default:
        return "3rem";
    }
  }};
  margin-bottom: 1rem;
`;

const SkillName = styled.h3<{ $size: "small" | "medium" | "large" }>`
  font-size: ${(props) => {
    switch (props.$size) {
      case "large":
        return "1.8rem";
      case "medium":
        return "1.4rem";
      case "small":
        return "1.2rem";
      default:
        return "1.4rem";
    }
  }};
  margin-bottom: 1rem;
  color: var(--color-brown);
`;

const SkillLevel = styled.div<{ $level: number }>`
  width: 100%;
  height: 8px;
  background: rgba(111, 61, 36, 0.2);
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.$level}%;
    height: 100%;
    background: var(--color-brown);
    border-radius: 4px;
    transition: width 1s ease;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.8;
`;

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = React.useState("Frontend");

  useEffect(() => {
    if (skillsRef.current) {
      const cards = skillsRef.current.querySelectorAll(".skill-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
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
  }, [activeCategory]);

  const skillCategories = {
    Frontend: [
      {
        name: "React",
        icon: "⚛️",
        level: 95,
        size: "large" as const,
        description:
          "Desenvolvimento de aplicações complexas com hooks, context e performance otimizada",
      },
      {
        name: "TypeScript",
        icon: "📘",
        level: 90,
        size: "medium" as const,
        description: "Tipagem estática para código mais seguro e maintível",
      },
      {
        name: "JavaScript",
        icon: "🟨",
        level: 95,
        size: "large" as const,
        description: "ES6+, programação funcional e orientada a objetos",
      },
      {
        name: "CSS/SASS",
        icon: "🎨",
        level: 90,
        size: "medium" as const,
        description: "Layouts responsivos, animações e metodologias CSS",
      },
      {
        name: "Next.js",
        icon: "▲",
        level: 85,
        size: "medium" as const,
        description: "SSR, SSG e otimização de performance",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: "🟢",
        level: 75,
        size: "large" as const,
        description: "APIs REST e integração com bancos de dados",
      },
      {
        name: "Express",
        icon: "🚀",
        level: 80,
        size: "medium" as const,
        description: "Framework web rápido e minimalista",
      },
      {
        name: "MongoDB",
        icon: "🍃",
        level: 70,
        size: "medium" as const,
        description: "Banco de dados NoSQL flexível",
      },
    ],
    Tools: [
      {
        name: "Git",
        icon: "🔧",
        level: 90,
        size: "medium" as const,
        description: "Controle de versão e colaboração em equipe",
      },
      {
        name: "Figma",
        icon: "🎯",
        level: 80,
        size: "medium" as const,
        description: "Prototipagem e design de interfaces",
      },
      {
        name: "VS Code",
        icon: "💻",
        level: 95,
        size: "small" as const,
        description: "Editor de código preferido",
      },
      {
        name: "Docker",
        icon: "🐳",
        level: 65,
        size: "small" as const,
        description: "Containerização de aplicações",
      },
    ],
  };

  return (
    <SkillsSection id="skills" $isDark={isDark}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Minhas Skills
        </motion.h2>

        <SkillsContainer>
          <CategoryTabs>
            {Object.keys(skillCategories).map((category) => (
              <CategoryTab
                key={category}
                $active={activeCategory === category}
                $isDark={isDark}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryTab>
            ))}
          </CategoryTabs>

          <SkillsGrid ref={skillsRef}>
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].map((skill, index) => (
              <SkillCard
                key={index}
                className="skill-card"
                $size={skill.size}
                $isDark={isDark}
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <SkillIcon $size={skill.size}>{skill.icon}</SkillIcon>
                <SkillName $size={skill.size}>{skill.name}</SkillName>
                <SkillLevel $level={skill.level} />
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </div>
    </SkillsSection>
  );
};

export default Skills;
