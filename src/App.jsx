import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollButton from "./Components/ScrollToTopButton.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
           <Route path='/Contactme' element={<Contact />} />
           <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </Router>
  );
}

export default App;
