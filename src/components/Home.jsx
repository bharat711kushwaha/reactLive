import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaJava } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';

// Styled Components
const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  background: #f8f9fa;
  min-height: 100vh;
  position: relative;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background: #007bff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const Section = styled.section`
  padding: 60px 20px;
  background: #f1f1f1;
  
`;

const SummaryCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    font-size: 2rem;
    color: #007bff;
    margin-bottom: 10px;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
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

// Home Component

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <ProfileImage src="/bharat.jpg" alt="Bharat Kumar" />
        <HeroTitle>Bharat Kumar</HeroTitle>
        <HeroSubtitle>Software Engineer</HeroSubtitle>
        <ContactButton href="/contact">Contact Me</ContactButton>
      </HeroSection>
      
      <Section>
       
        <SummaryCard>
        <h2>Summary</h2>
          <p>
            Organized and self-motivated computer science sophomore fluent in C, C++, Java, JavaScript, MERN Stack, and CSS programming languages. 
            Possess practical working knowledge of relational databases using MongoDB and SQL Server. Constantly updating technical skills through courses and bootcamps. 
            Reliable and responsible team player.
          </p>
        </SummaryCard>
      </Section>
      
      <Section>
        <h2 className='dispay'>Skills</h2>
        <SkillList>
          <SkillItem>
            <SiHtml5 />
            HTML
          </SkillItem>
          <SkillItem>
            <SiCss3 />
            CSS
          </SkillItem>
          <SkillItem>
            <SiJavascript />
            JavaScript
          </SkillItem>
          <SkillItem>
            <SiReact />
            React
          </SkillItem>
          <SkillItem>
            <SiNodedotjs />
            Node.js
          </SkillItem>
          <SkillItem>
            <SiExpress />
            Express.js
          </SkillItem>
          <SkillItem>
            <SiMongodb />
            MongoDB
          </SkillItem>
          <SkillItem>
            <FaJava />
            Java
          </SkillItem>
        </SkillList>
      </Section>
      
      <Section>
        <h2>Featured Projects</h2>
        <ProjectList>
          <ProjectCard>
            <h3>E-Commerce Website</h3>
            <p>Implemented software developments and changes, developed new support and feedback systems, and generated back-end programming.</p>
            <a href="https://tinyurl.com/2naa6c5u" target="_blank" rel="noopener noreferrer">View Project</a>
          </ProjectCard>
          <ProjectCard>
            <h3>Blogging Website</h3>
            <p>Implemented system to upload images, developed new support and feedback systems.</p>
            <a href="https://tinyurl.com/bdyp5nfz" target="_blank" rel="noopener noreferrer">View Project</a>
          </ProjectCard>
        </ProjectList>
      </Section>
      
      <Footer>
        <div>
          <FaPhoneAlt /> +91 89860 98572 <br />
          <FaEnvelope /> bharatkr.dev@gmail.com <br />
          <div className="footer-links">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <FaGithub />
            <a href="https://github.com/bharat711kushwaha" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
