import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Contact />
    <Services />
    <FeaturedProjects />
    <Testimonials />
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;