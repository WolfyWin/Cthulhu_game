import React from 'react';
const Scoreboard = () => {

  return (
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
  );
};

export { Scoreboard };
