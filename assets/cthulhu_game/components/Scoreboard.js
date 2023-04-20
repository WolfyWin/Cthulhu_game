import React from 'react';
import {NavBar} from "./NavBar";
const Scoreboard = () => {
  return (
    <div>
      <NavBar />
      <div className="scoreboard">
        <h2>Tableau des scores</h2>
        <table>
          <thead>
          <tr>
            <th>Nom</th>
            <th>Parties jouées :</th>
            <th>Parties gagnées :</th>
            <th>Dernière activité : </th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Scoreboard };
