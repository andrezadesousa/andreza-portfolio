"use client";
import React, { useState } from "react";
import { Modal, Box, IconButton, Button, Typography } from "@mui/material";
import {
  DoorClosedIcon as Close,
  GitlabIcon as GitHub,
  ExternalLink,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";
import "./ProjectsSection.css";

// Interface para o projeto
interface Project {
  id: number;
  name: string;
  images: string[];
  github: string;
  demo: string | null;
  description: string;
}

// Styled Components
const ProjectsContainer = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &.github {
    background: #24292e;
    color: white;

    &:hover {
      background: #1a1e22;
    }
  }

  &.demo {
    background: #007bff;
    color: white;

    &:hover {
      background: #0056b3;
    }
  }
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  outline: none;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ModalBody = styled.div`
  padding: 0;
  max-height: 70vh;
  overflow-y: auto;
`;

const ProjectDetails = styled.div`
  padding: 2rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

// Dados de exemplo dos projetos
const projectsData: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    github: "https://github.com/usuario/ecommerce",
    demo: "https://ecommerce-demo.com",
    description:
      "Uma plataforma completa de e-commerce desenvolvida com React e Node.js. Inclui sistema de pagamento, carrinho de compras, autenticação de usuários e painel administrativo.",
  },
  {
    id: 2,
    name: "Task Management App",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    github: "https://github.com/usuario/task-app",
    demo: null,
    description:
      "Aplicativo de gerenciamento de tarefas com interface intuitiva, drag & drop, categorização de tarefas e sincronização em tempo real.",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    github: "https://github.com/usuario/weather-app",
    demo: "https://weather-dashboard-demo.com",
    description:
      "Dashboard meteorológico com previsões detalhadas, mapas interativos, alertas climáticos e histórico de dados meteorológicos.",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer>
      <SectionTitle>Meus Projetos</SectionTitle>

      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectImage src={project.images[0]} alt={project.name} />
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectActions>
                <ActionButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHub size={16} />
                  GitHub
                </ActionButton>
                {project.demo && (
                  <ActionButton
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </ActionButton>
                )}
              </ProjectActions>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="project-modal-title"
      >
        <ModalContent>
          {selectedProject && (
            <>
              <ModalHeader>
                <Typography
                  variant="h5"
                  component="h2"
                  id="project-modal-title"
                >
                  {selectedProject.name}
                </Typography>
                <IconButton onClick={handleCloseModal}>
                  <Close />
                </IconButton>
              </ModalHeader>

              <ModalBody>
                {/* Swiper para imagens */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="project-swiper"
                >
                  {selectedProject.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProject.name} - ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <ProjectDetails>
                  <ProjectDescription>
                    {selectedProject.description}
                  </ProjectDescription>

                  <ModalActions>
                    <Button
                      variant="contained"
                      startIcon={<GitHub />}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: "#24292e",
                        "&:hover": { backgroundColor: "#1a1e22" },
                      }}
                    >
                      Ver no GitHub
                    </Button>
                    {selectedProject.demo && (
                      <Button
                        variant="contained"
                        startIcon={<ExternalLink />}
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        Ver Demo
                      </Button>
                    )}
                  </ModalActions>
                </ProjectDetails>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
