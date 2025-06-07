"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ProjectsSection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) => "var(--color-secondary)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-default)"};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)<{ $isDark: boolean }>`
  background: ${(props) =>
    props.$isDark ? "rgba(218, 197, 167, 0.1)" : "rgba(218, 197, 167, 0.2)"};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid
    ${(props) =>
      props.$isDark ? "rgba(218, 197, 167, 0.2)" : "rgba(218, 197, 167, 0.3)"};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--color-primary);
    box-shadow: 0 20px 40px rgba(218, 197, 167, 0.2);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
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

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &.github {
    background: transparent;
    color: var(--color-white);
    border: 1px solid var(--color-primary);

    &:hover {
      background: var(--color-primary);
      color: var(--color-default);
    }
  }

  &.demo {
    background: var(--color-primary);
    color: var(--color-default);

    &:hover {
      background: transparent;
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
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

const ModalContent = styled(motion.div)<{ $isDark: boolean }>`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: ${(props) =>
    props.$isDark ? "var(--color-default)" : "var(--color-white)"};
  border-radius: 20px;
  overflow: hidden;
  padding: 2rem;
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
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ModalBentoGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  height: 400px;
`;

const ModalImage = styled.img<{ $area: string }>`
  grid-area: ${(props) => props.$area};
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ModalInfo = styled.div<{ $isDark: boolean }>`
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-default)"};
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-weight: 600;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ModalTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  background: var(--color-primary);
  color: var(--color-default);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Crypto Screener Application",
      description: "Aplicação completa para análise de criptomoedas...",
      image: "/placeholder.svg?height=250&width=400",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      technologies: ["React", "TypeScript", "Chart.js", "WebSocket", "Redux"],
      github: "https://github.com/andreza/crypto-screener",
      demo: "https://crypto-screener-demo.com",
    },
    {
      title: "Euphoria - Ecommerce Website",
      description: "Plataforma de e-commerce completa para moda...",
      image: "/placeholder.svg?height=250&width=400",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind", "Vercel"],
      github: "https://github.com/andreza/euphoria-ecommerce",
      demo: "https://euphoria-demo.com",
    },
    {
      title: "Blog Website Template",
      description: "Template moderno para blog com sistema de CMS...",
      image: "/placeholder.svg?height=250&width=400",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      technologies: ["React", "Gatsby", "GraphQL", "Contentful", "SASS"],
      github: "https://github.com/andreza/blog-template",
      demo: null,
    },
    {
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades avançadas...",
      image: "/placeholder.svg?height=250&width=400",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      technologies: ["React", "Redux", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/andreza/task-manager",
      demo: "https://taskmanager-demo.com",
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

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              $isDark={isDark}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImageContainer onClick={() => setSelectedProject(index)}>
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectImageContainer>

              <ProjectContent>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    className="github"
                  >
                    <Github size={16} />
                    GitHub
                  </ProjectLink>
                  {project.demo && (
                    <ProjectLink
                      href={project.demo ?? undefined}
                      target="_blank"
                      className="demo"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <AnimatePresence>
          {selectedProject !== null && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                $isDark={isDark}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <X size={20} />
                </CloseButton>

                <ModalBentoGrid>
                  {projects[selectedProject].images.map((src, i) => (
                    <ModalImage
                      key={i}
                      src={src}
                      alt={`Imagem ${i + 1}`}
                      $area={
                        i === 0
                          ? "1 / 1 / 3 / 2"
                          : i === 1
                          ? "1 / 2 / 2 / 3"
                          : "2 / 2 / 3 / 3"
                      }
                    />
                  ))}
                </ModalBentoGrid>

                <ModalInfo $isDark={isDark}>
                  <ModalTitle>{projects[selectedProject].title}</ModalTitle>
                  <ModalDescription>
                    {projects[selectedProject].description}
                  </ModalDescription>

                  <ModalTech>
                    {projects[selectedProject].technologies.map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </ModalTech>

                  <ProjectLinks>
                    <ProjectLink
                      href={projects[selectedProject].github}
                      target="_blank"
                      className="github"
                    >
                      <Github size={16} />
                      GitHub
                    </ProjectLink>
                    {projects[selectedProject].demo && (
                      <ProjectLink
                        href={projects[selectedProject].demo ?? undefined}
                        target="_blank"
                        className="demo"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ModalInfo>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
