import React, { Component } from "react";
import axios from "axios";

import TableFilter from "./components/TableFilter";
import CamperList from "./components/CamperList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: [],
      currentFilter: "top30Days"
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(newFilter) {
    this.setState({ currentFilter: newFilter });

    switch (this.state.currentFilter) {
      case "top30Days":
        this.fetchCampers("recent");
        break;

      case "topAllTime":
        this.fetchCampers("alltime");
        break;

      default:
        this.fetchCampers("recent");
    }
  }

  fetchCampers(path) {
    axios
      .get(`https://fcctop100.herokuapp.com/api/fccusers/top/${path}`)
      .then(response => {
        this.setState({ campers: response.data });
      });
  }

  componentDidMount() {
    this.fetchCampers("recent");
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <TableFilter handleFilterChange={this.handleFilterChange} />
        <CamperList campers={this.state.campers} />
      </div>
    );
  }
}

export default App;
