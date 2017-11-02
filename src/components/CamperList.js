import React from "react";

import { Table } from "react-bootstrap";

const CamperList = ({ campers }) => (
  <section className="camper-list container">
    <div className="camper-list-header text-center">
      <h1>Camper Leaderboard</h1>
    </div>
    <Table striped bordered hover className="camper-list-table">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Camper Name</th>
          <th>Points in past 30 days</th>
          <th>All time points</th>
        </tr>
      </thead>
      <tbody>
        {campers.map((camper, index) => (
          <tr key={camper.username}>
            <td>#{index + 1}</td>
            <td>
              <img src={camper.img} alt={camper.username} className="avatar" />
              {camper.username}
            </td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </section>
);

export default CamperList;
