import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import emailjs from '@emailjs/browser';

function Contact(props) {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7hz1xkd', 'template_i8i8mt4', form.current, 'FdoqHujR1iZdgJZpM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="">
      <h2 className="color-transition mb-4 mt-4">CONTACTO</h2>
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

            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">
                  Nombre del remitente
                </label>
                <input type="text" className="form-control" name="user_name" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email del remitente
                </label>
                <input type="email" className="form-control" placeholder="name@example.com" name="user_email" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Mensaje de texto
                </label>
                <textarea className="form-control" name="message"></textarea>
              </div>
              <button type="submit" value="Send" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
      </div>

      
    </div>
  );
}

export default Contact;