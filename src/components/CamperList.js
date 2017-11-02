import React from "react";

import { Table } from "react-bootstrap";

const CamperList = ({ campers }) => (
  <section className="container">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Camper Name</th>
          <th>Points in past 30 days</th>
          <th>All time points</th>
        </tr>
      </thead>
      <tbody>
        {campers.map(camper => (
          <tr key={camper.username}>
            <td>{camper.username}</td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </section>
);

export default CamperList;
