import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.6;
    background-color: #F5F5F5; /* Light gray background for a clean look */
    font-family: 'Roboto', sans-serif; /* Modern and professional font */
    color: #333;
  }

  a {
    color: #007BFF; /* Primary link color */
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0056b3; /* Darker color on hover */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyle;
