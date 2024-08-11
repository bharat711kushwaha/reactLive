import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = styled.nav`
  background-color: none; 
  padding: 1rem 1.5rem; /* Reduced padding */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Slightly darker shadow */
  transition: background-color 0.3s ease; /* Smooth background color transition */

  .navbar-lists {
    display: flex;
    gap: 1.5rem; /* Reduced gap */
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    .navbar-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      text-decoration: none;
      font-size: 1.4rem; /* Reduced font size */
      font-weight: 300;
      text-transform: uppercase;
      color: #e0e0e0; /* Lighter link color */
      border-radius: 5px; /* Rounded buttons */
      transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease; /* Smooth transitions */

      &:hover,
      &:active {
        color: #ff6347; /* Hover color */
        background-color: rgba(255, 99, 71, 0.2); /* Hover background color */
        transform: scale(1.05); /* Slight scale effect on hover */
      }

      &:hover,
      &:active {
        color: #ff6347; /* Hover color */
        transform: scale(1.05); /* Slight scale effect on hover */
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
    z-index: 10;
  }

  .mobile-nav-icon {
    font-size: 2.4rem; /* Adjusted size */
    color: #e0e0e0; /* Mobile icon color */
  }

  @media (max-width: 768px) {
    .mobile-navbar-btn {
      display: inline-block;
    }

    .active .mobile-nav-icon[name="menu-outline"] {
      display: none;
    }

    .active .mobile-nav-icon[name="close-outline"] {
      display: inline-block;
    }

    .navbar-lists {
      width: 80vw; /* Adjusted width */
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(28, 28, 28, 0.95); /* Modern mobile menu background color */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-10%) translateX(100%);
      transition: transform 0.3s ease, visibility 0.3s ease, opacity 0.3s ease;
      z-index: 9;
      box-shadow: -10px 0 20px rgba(0, 0, 0, 0.4); /* Darker shadow */
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }

    .navbar-link {
      font-size: 2rem; /* Adjusted font size for mobile */
      margin: 1rem 0; /* Margin for spacing on mobile */
    }
  }`
;

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Resume
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
            aria-label="Open menu"
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(false)}
            aria-label="Close menu"
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;