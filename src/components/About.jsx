import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // For animations
import ProfileImage from '/bharat.jpg'; // Update the path

const About = () => {
  return (
    <Container>
      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImageStyled src={ProfileImage} alt="Bharat Kushwaha" />
        </ProfileImageContainer>
        <TextSection>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am Bharat Kushwaha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A passionate MERN stack developer with a strong commitment to creating innovative and user-friendly web applications.
            Specializing in React, I develop seamless and visually appealing interfaces for e-commerce and blog platforms.
            With a 70-day streak on LeetCode, I demonstrate my problem-solving capabilities.
          </motion.p>
        </TextSection>
      </ProfileSection>

      <Section>
        <Subtitle>Highlighted Projects</Subtitle>
        <ProjectList>
          <ProjectItem>
            <h3>E-commerce Platform</h3>
            <p>Advanced Frontend Development: Leveraged React to design a highly intuitive user interface, ensuring smooth navigation and an engaging user experience.</p>
            <p>Key Features: Featured products, detailed product pages, reviews, grid/list views, robust search and filtration options, and Razorpay integration for secure payments.</p>
            <a href="https://tinyurl.com/2naa6c5u" target="_blank" rel="noopener noreferrer">View Project</a>
          </ProjectItem>
          <ProjectItem>
            <h3>Blog Platform</h3>
            <p>User-Centric Enhancements: Created a search bar for improved content discovery and a toggle button for dark/bright themes.</p>
            <p>Comprehensive Functionalities: User authentication, CRUD operations, review management, powerful search capabilities, and streamlined login/signup processes.</p>
            <a href="https://tinyurl.com/bdyp5nfz" target="_blank" rel="noopener noreferrer">View Project</a>
          </ProjectItem>
        </ProjectList>
      </Section>

      <Section>
        <Subtitle>Technical Skills</Subtitle>
        <SkillsList>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>ReactJS</Skill>
          <Skill>Node.js</Skill>
          <Skill>Express.js</Skill>
          <Skill>MongoDB</Skill>
          <Skill>Java</Skill>
        </SkillsList>
      </Section>

      <Section>
        <Subtitle>Career Goals</Subtitle>
        <p>
          I am eager to contribute my expertise in full-stack development to drive innovation and excellence at leading technology companies like Google and Microsoft.
          My technical proficiency, combined with a strong focus on user experience and problem-solving, positions me well to tackle complex challenges and deliver impactful solutions.
        </p>
      </Section>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 80px 20px; /* Adjusted padding to account for fixed header */
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProfileImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImageStyled = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TextSection = styled.div`
  flex: 2;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectItem = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Skill = styled.div`
  background: #e9ecef;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
`;

export default About;
