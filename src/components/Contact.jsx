import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Wrapper>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='common-heading'
      >
        Contact Us
      </motion.h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118255.27362048673!2d82.08283682180178!3d22.145896400652187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b117b9ab6a7%3A0xc6f3f89d9eac7caf!2sBilaspur%2C%20Chhattisgarh%20495001!5e0!3m2!1sen!2sin!4v1714929043868!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0", borderRadius: "10px", marginBottom: "2rem" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <motion.form
            action="https://formspree.io/f/xvoellpp"
            method="POST"
            className="contact-inputs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.input
              type="submit"
              value="Send"
              whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa", color: "#007bff" }}
            />
          </motion.form>
        </div>
      </div>
      <ContactInfo>
        <p>Phone: <a href="tel:+918986098572">+91 89860 98572</a></p>
        <p>Email: <a href="mailto:bharatkr.dev@gmail.com">bharatkr.dev@gmail.com</a></p>
        <p>
          LinkedIn: <a href="http://www.linkedin.com/in/bharat-kushwaha-58882a309" target="_blank" rel="noopener noreferrer">Profile</a> | 
          GitHub: <a href="https://github.com/bharat711kushwaha" target="_blank" rel="noopener noreferrer">Profile</a>
        </p>
      </ContactInfo>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  background: #f8f9fa;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input, textarea {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          transition: all 0.3s;
        }

        input[type="submit"] {
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          font-weight: bold;
          padding: 0.8rem;
          border-radius: 5px;
          transition: all 0.3s;

          &:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }
        }
      }
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  text-align: center;
  
  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Contact;
