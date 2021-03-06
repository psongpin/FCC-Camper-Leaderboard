import React, { Component } from "react";
import axios from "axios";

import TableFilter from "./components/TableFilter";
import CamperList from "./components/CamperList";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
    switch (newFilter) {
      case "top30Days":
        this.fetchCampers("recent", newFilter);
        break;

      case "topAllTime":
        this.fetchCampers("alltime", newFilter);
        break;

      default:
        this.fetchCampers("recent", newFilter);
    }
  }

  fetchCampers(path, newFilter) {
    axios
      .get(`https://fcctop100.herokuapp.com/api/fccusers/top/${path}`)
      .then(response => {
        this.setState({
          campers: response.data,
          currentFilter: newFilter
        });
      });
  }

  componentDidMount() {
    this.fetchCampers("recent", "top30Days");
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <TableFilter handleFilterChange={this.handleFilterChange} />
        <CamperList campers={this.state.campers} />

        <footer className="text-center">
          <p>
            Powered by <strong>React</strong>
          </p>

          <p>Author: P.S.Ongpin</p>
        </footer>
      </div>
    );
  }
}

export default App;
