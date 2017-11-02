import React from "react";
import FontAwesome from "react-fontawesome";

import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const TableFilter = ({ handleFilterChange }) => (
  <header className="table-filter">
    <div className="container">
      <div className="nav-links">
        <a href="https://psongpin.github.io/">
          <FontAwesome name="home" size="3x" />
        </a>
        <a href="https://freecodecamp.org/">
          <FontAwesome name="free-code-camp" size="3x" />
        </a>
      </div>

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
  </header>
);

export default TableFilter;
