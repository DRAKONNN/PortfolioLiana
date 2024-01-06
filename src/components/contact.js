import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Toast } from 'react-bootstrap';

import emailjs from '@emailjs/browser';

function Contact(props) {
  
  const form = useRef();
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [showToastEmpty, setShowToastEmpty] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formError, setFormError] = useState({
    nameError: '',
    emailError: '',
    messageError: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      nameError: '',
      emailError: '',
      messageError: ''
    };

    if (!formData.user_name.trim()) {
      errors.nameError = 'Por favor, ingrese su nombre.';
      isValid = false;
    }

    if (!formData.user_email.trim()) {
      errors.emailError = 'Por favor, ingrese su correo electrónico.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.messageError = 'Por favor, ingrese un mensaje.';
      isValid = false;
    }

    setFormError(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    setShowToastEmpty(true);
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_7hz1xkd', 'template_i8i8mt4', form.current, 'FdoqHujR1iZdgJZpM')
      .then((result) => {
          console.log(result.text);
          console.log("Enviado correctamente");
          setShowToastSuccess(true);
      }, (error) => {
          console.log(error.text);
          console.log("Error al enviar");
          setShowToastError(true);
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
              <input type="text" className="form-control" placeholder="Nombre" name="user_name" value={formData.user_name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email del remitente
              </label>
              <input type="email" className="form-control" placeholder="name@example.com" name="user_email" value={formData.user_email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Mensaje de texto
              </label>
              <textarea className="form-control" placeholder="Texto" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" value="Send" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
      
      <div className={`toast align-items-center text-white bg-success border-0 ${showToastSuccess ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            ¡Email Enviado correctamente! Se le contestará lo antes posible.
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => showToastSuccess(false)}></button>
        </div>
      </div>
      <div className={`toast align-items-center text-white bg-danger border-0 ${showToastError ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            ¡Error al enviar el correo! Intente enviar otra vez en un rato después de haber refrescado la página.
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToastError(false)}></button>
        </div>
      </div>
      <div className={`toast align-items-center text-white bg-danger border-0 ${showToastEmpty ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            Complete todos los campos, por favor.
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToastEmpty(false)}></button>
        </div>
      </div>
    </div>
  );
}

export default Contact;