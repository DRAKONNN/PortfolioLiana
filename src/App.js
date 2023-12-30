import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Tooltip from '@mui/material/Tooltip';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useInView, motion, useTransform, useScroll } from 'framer-motion';

import Banner from './components/banner';
import Gallery from './components/gallery';
import Stats from './components/stats';
import Contact from './components/contact';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-custom">
        <Container>
          <Navbar.Brand href="#home">LIANA UNANYAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#gallery">Galería</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#stats">Sobre mí</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contacto</a></li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="mb-5" id="banner">
        <Section>
          <Banner />
        </Section>
      </section>
      
      <div className="container-fluid">
        <section className="resume-section mb-5" id="gallery">
          <Section>
            <Gallery />
          </Section>
        </section>

        <section className="resume-section mb-5" id="stats">
          <Section>
            <Stats />
          </Section>
        </section>
        
        <section className="resume-section mb-2" id="contact">
          <Section>
            <Contact />
          </Section>
        </section>
      </div>
    </div>
  );
}

export default App;
