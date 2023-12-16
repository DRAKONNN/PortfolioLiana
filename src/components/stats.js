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
      <div className="row gy-5 pb-4" style={{height: 400}}>  
          <div className="col-lg-3">
            <img src="/images/Liana_Winter.JPG" alt="Liana" className="border-rounded img-fluid" />
          </div>
          <div className="col-lg-3">
            <img src="/images/Liana_Winter2.JPG" alt="Liana" className="border-rounded img-fluid" />
          </div>
          <div className="col-lg-6">
            <table class="table table-light table-striped table-hover border-rounded table-stats">
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
      </div>
    </div>
  );
}

export default Stats;