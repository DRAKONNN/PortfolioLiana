import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Tooltip from '@mui/material/Tooltip';

import html2canvas from 'html2canvas';

import JSZip from 'jszip';

const Gallery = () => {

  const descargarImagenes1 = (imagenesUrls, nombreCatalogo) => {
    // Itera sobre las URLs y descarga cada imagen
    imagenesUrls.forEach((url, index) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = `${nombreCatalogo}_${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const descargarImagenes = (imagenesUrls, nombreCatalogo) => {
    const zip = new JSZip();
    const descargas = [];
  
    // Itera sobre las URLs y agrega cada imagen al archivo ZIP
    imagenesUrls.forEach((url, index) => {
      const filename = `${nombreCatalogo}_${index + 1}.jpg`;
  
      // Crea una promesa para descargar cada imagen
      const descarga = fetch(url)
        .then((response) => response.blob())
        .then((blob) => zip.file(filename, blob));
  
      // Agrega la promesa al array de descargas
      descargas.push(descarga);
    });
  
    // Espera a que todas las descargas se completen antes de generar el archivo ZIP
    Promise.all(descargas)
      .then(() => {
        // Crea el archivo ZIP y descarga
        zip.generateAsync({ type: 'blob' }).then((content) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(content);
          link.download = `${nombreCatalogo}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      });
  };

  return (
    <div>
      <h2 className="color-transition mb-4">GALERÍA</h2>
      <div className="row gy-5">
        <div id="gallery2023" className="carousel slide col-lg-3" data-bs-ride="carousel">
          <div className="carousel-inner border-rounded shadow-box">
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
          <div class="d-flex justify-content-center">
            <Tooltip title="Descargar catálogo 2023" placement="bottom" arrow>
              <span>
                <button
                  type="button"
                  class="btn btn-danger btn-sm mt-3 hover-zoom"
                  onClick={() =>
                    descargarImagenes(
                      [
                        '/images/Liana_Main_2023.JPG',
                        '/images/Liana_Main_2023_2.JPG',
                        '/images/Liana_Main_2023_3.JPG',
                        '/images/Liana_Main2.JPG',
                      ],
                      'Liana_2023'
                    )
                  }
                >
                  <i class='fas fa-download'></i>
                </button>
              </span>
            </Tooltip>
          </div>
        </div>

        <div id="gallery2022" className="carousel slide col-lg-3" data-bs-ride="carousel">
          <div className="carousel-inner border-rounded shadow-box">
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
          <div class="d-flex justify-content-center">
            <Tooltip title="Descargar catálogo 2022" placement="bottom" arrow>
              <span>
                <button
                  type="button"
                  class="btn btn-danger btn-sm mt-3 hover-zoom"
                  onClick={() =>
                    descargarImagenes(
                      [
                        '/images/Liana_2022.png',
                        '/images/Liana_2022_2.png',
                        '/images/Liana_2022_3.png',
                        '/images/Liana_2022_4.png',
                      ],
                      'Liana_2022'
                    )
                  }
                >
                  <i class='fas fa-download'></i>
                </button>
              </span>
            </Tooltip>
          </div>
        </div>

        <div id="gallery2021" className="carousel slide col-lg-3" data-bs-ride="carousel">
          <div className="carousel-inner border-rounded shadow-box">
            <div className="carousel-item active">
              <img src="/images/Liana_Cliff_2021.JPG" className="d-block w-100" alt="Liana 2021" />
            </div>
            <div className="carousel-item">
              <img src="/images/Liana_Cliff_2021_1.JPG" className="d-block w-100" alt="Liana 2021" />
            </div>
            <div className="carousel-item">
              <img src="/images/Liana_Cliff_2021_2.JPG" className="d-block w-100" alt="Liana 2021" />
            </div>
            <div className="carousel-item">
              <img src="/images/Liana_Cliff_2021_3.JPG" className="d-block w-100" alt="Liana 2021" />
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
          <div class="d-flex justify-content-center">
            <Tooltip title="Descargar catálogo 2021" placement="bottom" arrow>
              <span>
                <button
                  type="button"
                  class="btn btn-danger btn-sm mt-3 hover-zoom"
                  onClick={() =>
                    descargarImagenes(
                      [
                        '/images/Liana_Cliff_2021.JPG',
                        '/images/Liana_Cliff_2021_1.JPG',
                        '/images/Liana_Cliff_2021_2.JPG',
                        '/images/Liana_Cliff_2021_3.JPG',
                      ],
                      'Liana_2021'
                    )
                  }
                >
                  <i class='fas fa-download'></i>
                </button>
              </span>
            </Tooltip>
          </div>
        </div>

        <div id="gallery2021_beach" className="carousel slide col-lg-3" data-bs-ride="carousel">
          <div className="carousel-inner border-rounded shadow-box">
            <div className="carousel-item active">
              <img src="/images/Liana_Beach_2021.JPG" className="d-block w-100" alt="Liana 2021" />
            </div>
            <div className="carousel-item">
              <img src="/images/Liana_Beach_2021_2.JPG" className="d-block w-100" alt="Liana 2021" />
            </div>
            <div className="carousel-item">
              <img src="/images/Liana_Beach_2021_3.JPG" className="d-block w-100" alt="Liana 2021" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#gallery2021_beach" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#gallery2021_beach" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div class="d-flex justify-content-center">
            <Tooltip title="Descargar catálogo 2021" placement="bottom" arrow>
              <span>
                <button
                  type="button"
                  class="btn btn-danger btn-sm mt-3 hover-zoom"
                  onClick={() =>
                    descargarImagenes(
                      [
                        '/images/Liana_Beach_2021.JPG',
                        '/images/Liana_Beach_2021_2.JPG',
                        '/images/Liana_Beach_2021_3.JPG',
                      ],
                      'Liana_2021_1'
                    )
                  }
                >
                  <i class='fas fa-download'></i>
                </button>
              </span>
            </Tooltip>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;