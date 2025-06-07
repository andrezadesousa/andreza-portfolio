"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ProjectsSection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-light-gray)" : "var(--color-cream)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-black)" : "var(--color-black)"};
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3rem;
`;

const ProjectItem = styled(motion.div)<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$reverse ? "1fr 400px" : "400px 1fr"};
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div<{ $reverse: boolean }>`
  order: ${(props) => (props.$reverse ? -1 : 0)};

  @media (max-width: 768px) {
    order: 0;
  }
`;

const ProjectNumber = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: var(--color-brown);
  opacity: 0.3;
  line-height: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-brown);
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--color-black);
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  background: var(--color-brown);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &.github {
    background: var(--color-black);
    color: var(--color-white);

    &:hover {
      background: var(--color-brown);
    }
  }

  &.demo {
    background: var(--color-brown);
    color: var(--color-white);

    &:hover {
      background: var(--color-black);
    }
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: var(--color-white);
  border-radius: 20px;
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Crypto Screener Application",
      description:
        "Aplicação completa para análise de criptomoedas com gráficos em tempo real, alertas personalizados e portfolio tracking. Interface moderna e responsiva desenvolvida com React e integração com APIs de mercado.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "TypeScript", "Chart.js", "WebSocket", "Redux"],
      github: "https://github.com/andreza/crypto-screener",
      demo: "https://crypto-screener-demo.com",
    },
    {
      title: "Euphoria - Ecommerce Website",
      description:
        "Plataforma de e-commerce completa para moda com carrinho de compras, sistema de pagamento, filtros avançados e painel administrativo. Desenvolvida com foco na experiência do usuário e performance.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind", "Vercel"],
      github: "https://github.com/andreza/euphoria-ecommerce",
      demo: "https://euphoria-demo.com",
    },
    {
      title: "Blog Website Template",
      description:
        "Template moderno para blog com sistema de CMS, comentários, categorias, busca avançada e otimização SEO. Interface clean e responsiva com modo escuro/claro e múltiplos layouts.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "Gatsby", "GraphQL", "Contentful", "SASS"],
      github: "https://github.com/andreza/blog-template",
      demo: null,
    },
  ];

  return (
    <ProjectsSection id="projects" $isDark={isDark}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              $reverse={index % 2 !== 0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectImageContainer onClick={() => setSelectedProject(index)}>
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectImageContainer>

              <ProjectContent $reverse={index % 2 !== 0}>
                <ProjectNumber>0{index + 1}</ProjectNumber>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectTech>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>

                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    className="github"
                  >
                    <Github size={18} />
                    GitHub
                  </ProjectLink>
                  {project.demo && (
                    <ProjectLink
                      href={project.demo}
                      target="_blank"
                      className="demo"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ProjectsContainer>

        <AnimatePresence>
          {selectedProject !== null && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <X size={20} />
                </CloseButton>
                <ModalImage
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                />
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
