import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useInView, motion, useTransform, useScroll } from 'framer-motion';

import Stats from './components/stats';

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
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">LIANA UNANYAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#gallery">Galería</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#info">Características</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contacto</a></li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid">
        <section className="resume-section d-flex" id="gallery">
          <Section>
            <div className={`resume-section-content`}>
              <h1>LIANA <span className="text-primary">UNANYAN</span></h1>
            </div>
          </Section>
        </section>

        <section className="resume-section" id="info">
          <Section>
            <Stats />
          </Section>
        </section>
        
        <section className="resume-section" id="contact">
          <Section>
            
          </Section>
        </section>    
      </div>
    </div>
  );
}

export default App;
