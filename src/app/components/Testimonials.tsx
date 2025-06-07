"use client";

import type React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Star, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const TestimonialsSection = styled.section<{ $isDark: boolean }>`
  padding: 100px 0;
  background: ${(props) =>
    props.$isDark ? "var(--color-brown)" : "var(--color-white)"};
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-black)"};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)<{ $isDark: boolean }>`
  background: ${(props) =>
    props.$isDark ? "rgba(255, 255, 255, 0.1)" : "var(--color-light-gray)"};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: var(--color-brown);
`;

const ProfileRole = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
`;

const TestimonialText = styled.p`
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const LinkedinLink = styled.a<{ $isDark: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) =>
    props.$isDark ? "var(--color-white)" : "var(--color-brown)"};
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Testimonials: React.FC = () => {
  const { isDark } = useTheme();

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Tech Lead",
      company: "Tech Solutions Inc.",
      image: "/placeholder.svg?height=70&width=70",
      rating: 5,
      text: "Andreza é uma desenvolvedora excepcional. Sua capacidade de resolver problemas complexos e entregar código limpo é impressionante. Trabalhar com ela foi uma experiência transformadora para toda a equipe. Recomendo fortemente!",
      linkedin: "https://linkedin.com/in/carlos-silva",
    },
    {
      name: "Maria Santos",
      role: "Product Manager",
      company: "Digital Agency",
      image: "/placeholder.svg?height=70&width=70",
      rating: 5,
      text: "Trabalhar com a Andreza foi uma experiência incrível. Ela sempre entrega projetos no prazo e com qualidade excepcional. Sua dedicação e talento são evidentes em cada linha de código. Uma profissional exemplar!",
      linkedin: "https://linkedin.com/in/maria-santos",
    },
  ];

  return (
    <TestimonialsSection id="testimonials" $isDark={isDark}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O que dizem sobre mim
        </motion.h2>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              $isDark={isDark}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialHeader>
                <ProfileImage src={testimonial.image} alt={testimonial.name} />
                <ProfileInfo>
                  <ProfileName>{testimonial.name}</ProfileName>
                  <ProfileRole>
                    {testimonial.role} • {testimonial.company}
                  </ProfileRole>
                </ProfileInfo>
              </TestimonialHeader>

              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="var(--color-brown)"
                    color="var(--color-brown)"
                  />
                ))}
              </Rating>

              <TestimonialText>"{testimonial.text}"</TestimonialText>

              <LinkedinLink
                href={testimonial.linkedin}
                target="_blank"
                $isDark={isDark}
              >
                <Linkedin size={18} />
                Ver no LinkedIn
              </LinkedinLink>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
