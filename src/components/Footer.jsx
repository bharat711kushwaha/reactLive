import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <div className="footer-content">
          <div className="footer-about">
            <h3>Bharat Kushwaha</h3>
            <p>Full Stack Developer with a passion for creating innovative solutions.</p>
          </div>
          <div className="footer-social">
            <h3>Connect with Me</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/bharat-kushwaha-9ab9a0281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
              <a href="https://github.com/bharat711kushwaha" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
             
              <a href="https://www.instagram.com/bharatkushwaha4934?igsh=djFtczA4Mm5seTlm" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Contact Information</h3>
            <p>Email: bharatkumar160418@gmail.com</p>
            <p>Phone: +918986098572</p>
          </div>
        </div>

        <FooterBottom>
          <div className="bottom-content">
            <p>&copy; {new Date().getFullYear()} Bharat Kushwaha. All Rights Reserved</p>
            <div className="footer-links">
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </div>
          </div>
        </FooterBottom>
      </FooterSection>
    </FooterWrapper>
  );
};

// Styled Components

const FooterWrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow: hidden;
`;

const FooterSection = styled.footer`
  background-color: #343a40;
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-about h3,
  .footer-social h3,
  .footer-contact h3 {
    margin-bottom: 1rem;
  }

  .footer-social {
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1rem;

      .icon {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 2px solid #fff;
        color: #fff;
        font-size: 1.8rem;
        transition: background-color 0.3s, color 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #fff;
          color: #343a40;
        }
      }
    }
  }

  .footer-contact {
    p {
      margin: 0.5rem 0;
    }
  }
`;

const FooterBottom = styled.div`
  background-color: #212529;
  color: #fff;
  padding: 1rem 0;
  text-align: center;

  .bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    p {
      margin: 0;
    }

    .footer-links {
      display: flex;
      gap: 1rem;

      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

export default Footer;
