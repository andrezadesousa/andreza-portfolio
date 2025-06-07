"use client";

import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Github, ExternalLink, Code } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.surface};
  overflow: hidden;
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

const ProjectsContainer = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 3rem 1rem;

  .swiper-slide {
    transition: transform 0.3s ease;
  }

  .swiper-slide-active {
    transform: scale(1.05);
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.primary};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.primary};

    &::after {
      font-size: 1.5rem;
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &.primary {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text};

    &:hover {
      background-color: ${({ theme }) => theme.border};
    }
  }
`;

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        section.querySelector(".projects-title"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "E-commerce Responsivo",
      description:
        "Um site de e-commerce completo com carrinho de compras, filtros de produtos e sistema de pagamento integrado.",
      image: "/placeholder.svg?height=220&width=400",
      techStack: ["React", "TypeScript", "Styled Components", "Firebase"],
      demoLink: "#",
      githubLink: "#",
      hasDemo: true,
    },
    {
      id: 2,
      title: "Dashboard Analítico",
      description:
        "Dashboard interativo com gráficos e visualizações de dados para monitoramento de métricas de negócios.",
      image: "/placeholder.svg?height=220&width=400",
      techStack: ["React", "Material UI", "Chart.js", "Firebase"],
      demoLink: null, // Sem demo
      githubLink: "#",
      hasDemo: false,
    },
    {
      id: 3,
      title: "App de Gerenciamento de Tarefas",
      description:
        "Aplicativo para gerenciamento de tarefas com funcionalidades de arrastar e soltar, categorização e lembretes.",
      image: "/placeholder.svg?height=220&width=400",
      techStack: ["React", "TypeScript", "Framer Motion", "Firebase"],
      demoLink: "#",
      githubLink: "#",
      hasDemo: true,
    },
    {
      id: 4,
      title: "Portfólio Criativo",
      description:
        "Site de portfólio com animações interativas, efeitos parallax e transições suaves entre seções.",
      image: "/placeholder.svg?height=220&width=400",
      techStack: ["React", "GSAP", "Styled Components"],
      demoLink: null, // Sem demo
      githubLink: "#",
      hasDemo: false,
    },
    {
      id: 5,
      title: "Blog Pessoal",
      description:
        "Plataforma de blog com sistema de gerenciamento de conteúdo, comentários e compartilhamento em redes sociais.",
      image: "/placeholder.svg?height=220&width=400",
      techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      demoLink: "#",
      githubLink: "#",
      hasDemo: true,
    },
  ];

  return (
    <Section id="projects" ref={sectionRef}>
      <Container>
        <Title className="projects-title">Meus Projetos</Title>

        <ProjectsContainer>
          <StyledSwiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
          >
            {projectsData.map((project) => (
              <SwiperSlide
                key={project.id}
                style={{ width: "350px", height: "auto" }}
              >
                <ProjectCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ProjectImage>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                    />
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <TechStack>
                      {project.techStack.map((tech, index) => (
                        <TechTag key={index}>
                          <Code size={14} />
                          {tech}
                        </TechTag>
                      ))}
                    </TechStack>

                    <ProjectLinks>
                      {project.hasDemo && project.demoLink && (
                        <ProjectLink
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </ProjectLink>
                      )}
                      <ProjectLink
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary"
                      >
                        <Github size={16} />
                        GitHub
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
