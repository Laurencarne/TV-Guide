import React, { Component } from "react";
import "./App.css";
import ShowCollection from "./components/ShowCollection";
import Nav from "./components/Nav";
const BASEURL = "http://api.tvmaze.com/shows?";
const SEARCHURL = "http://api.tvmaze.com/search/shows?q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    this.getShowsFromServer();
  }

  getShowsFromServer = () => {
    return fetch(BASEURL + "page=1")
      .then(response => response.json())
      .then(data => this.setState({ shows: data }));
  };

  getFilteredShowsFromServer = searchTerm => {
    console.log(searchTerm);
    return fetch(SEARCHURL + searchTerm)
      .then(response => response.json())
      .then(data => this.setState({ shows: data.map(show => show.show) }));
  };

  updateShowState = shows => {
    this.setState({ shows: shows });
  };
  render() {
    return (
      <div>
        <Nav
          getFilteredShowsFromServer={this.getFilteredShowsFromServer}
          getShowsFromServer={this.getShowsFromServer}
          shows={this.state.shows}
          updateShowState={this.updateShowState}
        />
        <ShowCollection shows={this.state.shows} />
      </div>
    );
  }
}
export default App;
