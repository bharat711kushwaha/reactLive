import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar"; // Make sure the import path is correct

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vn2VwD9GT1UsshkHSfjMjMGTCrjIWts-mQ&s"
          alt="my logo"
          className="logo"
        />
      </NavLink>
      <Navbar /> {/* Make sure Navbar is correctly used here */}
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 2rem; /* Adjusted padding */
  height: 5rem; /* Adjusted height */
  background-color: #2e2e2e; /* Modern background color */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed position */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly darker shadow */

  .logo {
    height: 3rem; /* Adjusted logo size */
    width: auto;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease; /* Added transition for box-shadow */
    display: block; /* Ensure logo is displayed correctly */
  }

  .logo:hover {
    transform: scale(1.1); /* Slightly larger scale on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow on hover */
  }
`;

export default Header;
