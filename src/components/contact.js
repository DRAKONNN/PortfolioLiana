import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Contact(props) {
  
  return (
    <div className="">
      <h2 className="color-transition">CONTACTO</h2>
      <div className="row gy-5">  
          <div className="col-lg-3">
            <img src="/images/Liana_2021.JPG" alt="Liana" className="border-rounded img-fluid hover-zoom shadow-box" />
          </div>
          <div className="col-lg-3">
            <img src="/images/Liana_2020_3.JPG" alt="Liana" className="border-rounded img-fluid hover-zoom shadow-box" />
          </div>
          <div className="col-lg-6">
            <h2 className="mt-4"><i class='fas fa-map-marker-alt'></i> Madrid, 28006, España</h2>
            <h1 className="mt-4"><a href="tel:+34646155309"><i class='fas fa-phone-square'></i> 646 155 309</a></h1>
            <h2 className="mt-4"><a href="mailto:lianchik.9968@gmail.com"><i class='fas fa-envelope-square'></i>lianchik.9968@gmail.com</a></h2>
            <h1 className="mt-4"><a href="https://www.instagram.com/liaanaa8/"><i class='fab fa-instagram'></i> @liaanaa8</a></h1>
          </div>
      </div>

      
    </div>
  );
}

export default Contact;