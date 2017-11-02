import React from "react";

import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const TableFilter = ({ handleFilterChange }) => (
  <section className="table-filter">
    <div className="container">
      <Form inline>
        <FormGroup controlId="table-filter">
          <ControlLabel>Filter by:</ControlLabel>{" "}
          <FormControl
            componentClass="select"
            className="form-control"
            onChange={event => handleFilterChange(event.target.value)}
          >
            <option value="top30Days">Points in past 30 days</option>
            <option value="topAllTime">All time points</option>
          </FormControl>
        </FormGroup>
      </Form>
    </div>
  </section>
);

export default TableFilter;
