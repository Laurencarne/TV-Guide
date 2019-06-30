import React, { Component } from "react";
import "./App.css";
import ShowCollection from "./components/ShowCollection";
import Nav from "./components/Nav";
import MyCollection from "./components/MyCollection";
const BASEURL = "http://api.tvmaze.com/shows?";
const SEARCHURL = "http://api.tvmaze.com/search/shows?q=";
const MYURL = "http://localhost:3000/shows";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      myShows: [],
      myList: false
    };
  }

  componentDidMount() {
    this.getShowsFromServer();
    this.getMyShowsFromServer();
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

  getMyShowsFromServer = () => {
    return fetch(MYURL)
      .then(response => response.json())
      .then(data => this.setState({ myShows: data }));
  };

  updateShowState = shows => {
    this.setState({ shows: shows });
  };

  updateMyListState = () => {
    this.setState({
      myList: !this.state.myList
    });
  };

  addShowToMyList = show => {
    return fetch(MYURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(show)
    });
  };

  updateMyShowState = show => {
    this.setState({ myShows: [...this.state.myShows, show] });
  };

  toggleShowCollections = () => {
    if (!this.state.myList) {
      return (
        <ShowCollection
          shows={this.state.shows}
          myShows={this.state.myShows}
          addShowToMyList={this.addShowToMyList}
          updateMyShowState={this.updateMyShowState}
        />
      );
    } else if (this.state.myList) {
      return (
        <MyCollection
          shows={this.state.myShows}
          deleteFromServer={this.deleteFromServer}
          getMyShowsFromServer={this.getMyShowsFromServer}
        />
      );
    }
  };

  deleteFromServer = id => {
    return fetch(`${MYURL}/${id}`, {
      method: "DELETE"
    });
  };

  render() {
    return (
      <div>
        <Nav
          getFilteredShowsFromServer={this.getFilteredShowsFromServer}
          getShowsFromServer={this.getShowsFromServer}
          shows={this.state.shows}
          updateShowState={this.updateShowState}
          updateMyListState={this.updateMyListState}
        />
        {this.toggleShowCollections()}
      </div>
    );
  }
}
export default App;
