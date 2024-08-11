import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaJava, FaEnvelope } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';

// Importing images
import ECommerceImage from '/screen2.png'; // Update the path if necessary
import BlogImage from '/screen.png'; // Update the path if necessary

// Styled Components
const Container = styled.div`
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f9;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #555;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
`;

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Skills = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

const Skill = styled.p`
  margin-bottom: 10px;
`;

const Experience = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.5rem;
  color: #333;
`;

const JobDescription = styled.p`
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  color: #333;

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .footer-links a {
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Flex layout for large screens, stack for smaller screens
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Resume Component
const Resume = () => {
  return (
    <Container>
      <Header>
        <Name>Bharat Kushwaha</Name>
        <Title>MERN Stack Developer</Title>
      </Header>
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CardsWrapper>
          <Card>
            <Subtitle>Contact Information</Subtitle>
            <Content>
              <p>Email: <a href="mailto:bharatkumar160418@gmail.com">bharatkumar160418@gmail.com</a></p>
              <p>Phone: +918986098572</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/bharatkushwaha</a></p>
              <p>GitHub: <a href="https://github.com/bharat711kushwaha" target="_blank" rel="noopener noreferrer">github.com/bharatkushwaha</a></p>
            </Content>
          </Card>
          <Card>
            <Subtitle>Professional Summary</Subtitle>
            <Content>
              Passionate MERN stack developer with a strong commitment to creating innovative and user-friendly web applications. Proven expertise in React for developing seamless and visually appealing interfaces. Demonstrated problem-solving skills with a 70-day streak on LeetCode.
            </Content>
          </Card>
        </CardsWrapper>
      </Section>
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <Subtitle>Skills</Subtitle>
          <Skills>
            <Skill>Frontend: <SiHtml5 /> HTML, <SiCss3 /> CSS, <SiJavascript /> JavaScript, <SiReact /> ReactJS</Skill>
            <Skill>Backend: <SiNodedotjs /> Node.js, <SiExpress /> Express.js, <SiMongodb /> MongoDB</Skill>
            <Skill>Programming Languages: <FaJava /> Java</Skill>
          </Skills>
        </Card>
      </Section>
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <Subtitle>Experience</Subtitle>
          <Experience>
            <ProjectCard>
              <img src={ECommerceImage} alt="E-Commerce Website" />
              <JobTitle>E-commerce Platform</JobTitle>
              <JobDescription>
                Developed an intuitive user interface with React, integrating features like product pages, reviews, and secure payments. Implemented robust search and filtration options.
              </JobDescription>
              <a href="https://tinyurl.com/2naa6c5u" target="_blank" rel="noopener noreferrer">View Project</a>
            </ProjectCard>
            <ProjectCard>
              <img src={BlogImage} alt="Blogging Website" />
              <JobTitle>Blog Platform</JobTitle>
              <JobDescription>
                Enhanced user experience with a search bar, dark/light mode toggle, and comprehensive authentication and CRUD functionalities.
              </JobDescription>
              <a href="https://tinyurl.com/bdyp5nfz" target="_blank" rel="noopener noreferrer">View Project</a>
            </ProjectCard>
          </Experience>
        </Card>
      </Section>
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <Subtitle>Education</Subtitle>
          <Content>
            <strong>Guru Ghasidas Vishwavidyalaya</strong><br />
            B. Tech in CSE (2023 - Present)
          </Content>
        </Card>
      </Section>
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <Subtitle>Accomplishments</Subtitle>
          <Content>
            <p>70-day streak on LeetCode</p>
            <p>Most Innovative Software Engineer Award Nominee</p>
          </Content>
        </Card>
      </Section>
      <Footer>
        <div>
          <FaPhoneAlt /> +91 89860 98572 <br />
          <FaEnvelope /> bharatkr.dev@gmail.com <br />
          <div className="footer-links">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <FaGithub />
            <a href="https://github.com/bharat711kushwaha" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Resume;
