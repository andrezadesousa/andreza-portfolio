"use client";

import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryTitle = styled.h3`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.surface};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      const categories = section.querySelectorAll(".skill-category");

      gsap.fromTo(
        categories,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "center center",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const skillsData = [
    {
      id: 1,
      category: "Linguagens",
      icon: "🔤",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "���" },
        { name: "JavaScript", icon: "📜" },
        { name: "TypeScript", icon: "📘" },
      ],
    },
    {
      id: 2,
      category: "Frameworks & Bibliotecas",
      icon: "📚",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Styled Components", icon: "💅" },
        { name: "Material UI", icon: "🧩" },
        { name: "Tailwind CSS", icon: "🌬️" },
        { name: "GSAP", icon: "🎭" },
        { name: "Framer Motion", icon: "🎬" },
      ],
    },
    {
      id: 3,
      category: "Ferramentas & Plataformas",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: "📊" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "📝" },
        { name: "Figma", icon: "🎨" },
        { name: "Vercel", icon: "▲" },
        { name: "Firebase", icon: "🔥" },
      ],
    },
    {
      id: 4,
      category: "Metodologias & Conceitos",
      icon: "📋",
      skills: [
        { name: "Responsive Design", icon: "📱" },
        { name: "Mobile First", icon: "📲" },
        { name: "Acessibilidade", icon: "♿" },
        { name: "SEO", icon: "🔍" },
        { name: "Clean Code", icon: "✨" },
        { name: "Agile/Scrum", icon: "🔄" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="skills" ref={sectionRef}>
      <Container>
        <Title>Minhas Habilidades</Title>

        <SkillsContainer>
          {skillsData.map((category) => (
            <SkillCategory
              key={category.id}
              className="skill-category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <CategoryTitle>
                <span>{category.icon}</span>
                {category.category}
              </CategoryTitle>

              <SkillsList>
                {category.skills.map((skill, index) => (
                  <SkillItem key={index} variants={itemVariants}>
                    <span>{skill.icon}</span>
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </Container>
    </Section>
  );
};

export default SkillsSection;
