import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Container, Row, Col } from 'react-bootstrap';


const Banner = () => {
  return (
    <header className="banner">
      <div className="bg-image">
        
        <div className="container-fluid">
          <div className="row gy-5">
              <h1 className="animated-text-right">LIANA</h1>
              <h1 className="animated-text-left">UNANYAN</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;