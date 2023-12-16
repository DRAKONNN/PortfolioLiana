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
    <div className="resume-section-content">
      <div className="row pb-5">
        <div className="container">
          <table class="table table-light table-striped table-hover border-rounded table-stats">
            <thead class="table-dark">
              <tr>
                <th colspan="2">Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Pelo</th>
                <td>{stats[0].hair}</td> 
              </tr>
              <tr>
                <th scope="row">Ojos</th>
                <td>{stats[0].eyes}</td>
              </tr>
              <tr>
                <th scope="row">Altura</th>
                <td>{stats[0].height}</td>
              </tr>
              <tr>
                <th scope="row">Pecho</th>
                <td>{stats[0].bust}</td>
              </tr>
              <tr>
                <th scope="row">Cintura</th>
                <td>{stats[0].waist}</td>
              </tr>
              <tr>
                <th scope="row">Caderas</th>
                <td>{stats[0].hips}</td>
              </tr>
              <tr>
                <th scope="row">Calzado</th>
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