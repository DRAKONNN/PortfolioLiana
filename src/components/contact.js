import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import axios from 'axios';


function Contact(props) {
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', { email, message });
      alert('Correo enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el correo:', error.message);
      alert('Error al enviar el correo');
    }
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
      </div>

      
    </div>
  );
}

export default Contact;