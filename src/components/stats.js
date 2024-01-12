import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import stats from '../data/datastats';

const STATS = stats;

function Stats(props) {
  const [state, setState] = useState({
    stats: STATS,
  })
  
  return (
    <div className="">
      <h2 className="color-transition mb-4 mt-4">SOBRE MÍ</h2>
      <div className="row gy-5">  
        <div className="col-lg-3 ms-4 me-3">
          <table class="table table-light table-striped table-hover border-rounded table-stats hover-zoom shadow-box">
            <thead class="table-dark">
              <tr>
                <th colspan="2">Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><i class='fas fa-female'></i> Pelo</th>
                <td>{stats[0].hair}</td> 
              </tr>
              <tr>
                <th scope="row"><i class='far fa-eye'></i> Ojos</th>
                <td>{stats[0].eyes}</td>
              </tr>
              <tr>
                <th scope="row"><i class='fas fa-sort-amount-up'></i> Altura</th>
                <td>{stats[0].height}</td>
              </tr>
              <tr>
                <th scope="row"><i class='fas fa-arrows-alt-h'></i> Pecho</th>
                <td>{stats[0].bust}</td>
              </tr>
              <tr>
                <th scope="row"><i class='fas fa-arrows-alt-h'></i> Cintura</th>
                <td>{stats[0].waist}</td>
              </tr>
              <tr>
                <th scope="row"><i class='fas fa-arrows-alt-h'></i> Caderas</th>
                <td>{stats[0].hips}</td>
              </tr>
              <tr>
                <th scope="row"><i class='fas fa-shoe-prints'></i> Calzado</th>
                <td>{stats[0].shoe}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-lg-3 me-3 hover-zoom shadow-box p-0 contact-custom position-relative">
          <img src="/images/Liana_Winter.JPG" alt="Liana" className="border-rounded img-fluid" style={{opacity: 0.5}} />
          <div className="text-center position-absolute top-50 start-50 translate-middle m-0">
            <h4 className="mb-3">IDIOMAS</h4>
            <div className="text-start">
              <h6>Ruso: <span class="badge bg-danger">bilingüe</span></h6>
              <h6>Español: <span class="badge bg-danger">bilingüe</span></h6>
              <h6>Inglés: <span class="badge bg-primary">C1</span></h6>
              <h6>Catalán: <span class="badge bg-primary">C1</span></h6>
            </div>
          </div>
        </div>

        <div className="col-lg-3 hover-zoom shadow-box p-0 contact-custom position-relative">
          <img src="/images/Liana_Winter2.JPG" alt="Liana" className="border-rounded img-fluid" style={{opacity: 0.5}} />
          <div className="text-center position-absolute top-50 start-50 translate-middle m-0">
            <h4 className="mb-3">FORMACIÓN</h4>
            <div className="text-start">
              <h6 class="">Grado de Derecho</h6>
              <p className="mb-1">Universidad Rovira I Virgili (URV)</p>
              <p><small>2017 – 2021</small></p>
              <h6 class="">Máster en Sistema de Justicia Penal</h6>
              <p className="mb-1">Universidad De Lleida (UdL)</p>
              <p><small>2021 – 2022</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;