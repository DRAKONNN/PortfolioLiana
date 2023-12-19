import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Gallery = () => {
  return (
    <div>
    <h2>GALERÍA</h2>
    <div className="row gy-5">
      <div id="gallery2023" className="carousel slide col-lg-4" data-bs-ride="carousel">
        <div className="carousel-inner border-rounded">
          <div className="carousel-item active">
            <img src="/images/Liana_Main_2023.JPG" className="d-block w-100" alt="Liana 2023" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_Main_2023_2.JPG" className="d-block w-100" alt="Liana 2023" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_Main_2023_3.JPG" className="d-block w-100" alt="Liana 2023" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_Main2.JPG" className="d-block w-100" alt="Liana 2023" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#gallery2023" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#gallery2023" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="gallery2022" className="carousel slide col-lg-4" data-bs-ride="carousel">
        <div className="carousel-inner border-rounded">
          <div className="carousel-item active">
            <img src="/images/Liana_2022.png" className="d-block w-100" alt="Liana 2022" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_2022_2.png" className="d-block w-100" alt="Liana 2022" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_2022_3.png" className="d-block w-100" alt="Liana 2022" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_2022_4.png" className="d-block w-100" alt="Liana 2022" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#gallery2022" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#gallery2022" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="gallery2021" className="carousel slide col-lg-4" data-bs-ride="carousel">
        <div className="carousel-inner border-rounded">
          <div className="carousel-item active">
            <img src="/images/Liana_Cliff_2021.JPG" className="d-block w-100" alt="Liana 2022" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_Cliff_2021_1.JPG" className="d-block w-100" alt="Liana 2022" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_Cliff_2021_2.JPG" className="d-block w-100" alt="Liana 2022" />
          </div>
          <div className="carousel-item">
            <img src="/images/Liana_Cliff_2021_3.JPG" className="d-block w-100" alt="Liana 2022" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#gallery2021" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#gallery2021" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Gallery;