import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import MainHeader  from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <GlobalStyle />
    
 <MainHeader/>

 <Routes>
   <Route path="/" element={<Home />} />

   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/Resume" element={<Resume />} />

 </Routes>
 <Footer />
</Router>
);
}

export default App;
