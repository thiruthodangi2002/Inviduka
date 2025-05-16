import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import AboutPage from "./pages/Aboutpage";
import ServicesPage from "./pages/Servicepage"; // create if not exists
import ContactPage from "./pages/Contactpage"; // create if not exists
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
