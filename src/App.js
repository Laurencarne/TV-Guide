import React, { Component } from "react";
import "./App.css";
import ShowCollection from "./components/ShowCollection";
import Nav from "./components/Nav";
import MyCollection from "./components/MyCollection";
import Calender from "./components/Calender";
const BASEURL = "http://api.tvmaze.com/shows?";
const SEARCHURL = "http://api.tvmaze.com/search/shows?q=";
const MYURL = "http://localhost:3000/shows";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      myShows: [],
      myList: false,
      calender: false
    };
  }

  componentDidMount() {
    this.getShowsFromServer();
    this.getMyShowsFromServer();
  }

  getShowsFromServer = () => {
    return fetch(BASEURL + "page=1")
      .then(response => response.json())
      .then(data => this.setState({ shows: data.slice(0, 50) }));
  };

  getFilteredShowsFromServer = searchTerm => {
    return fetch(SEARCHURL + searchTerm)
      .then(response => response.json())
      .then(data =>
        this.setState({ shows: data.map(show => show.show).slice(0, 50) })
      );
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
    if (!this.state.myList && !this.state.calender) {
      return (
        <ShowCollection
          shows={this.state.shows}
          myShows={this.state.myShows}
          addShowToMyList={this.addShowToMyList}
          updateMyShowState={this.updateMyShowState}
        />
      );
    } else if (this.state.myList && !this.state.calender) {
      return (
        <MyCollection
          shows={this.state.myShows}
          deleteFromServer={this.deleteFromServer}
          getMyShowsFromServer={this.getMyShowsFromServer}
        />
      );
    } else if (this.state.calender) {
      return <Calender myShows={this.state.myShows} />;
    }
  };

  deleteFromServer = id => {
    return fetch(`${MYURL}/${id}`, {
      method: "DELETE"
    });
  };

  toggleCalender = () => {
    this.setState({
      calender: !this.state.calender
    });
  };

  render() {
    return (
      <div>
        <Nav
          calender={this.state.calender}
          toggleCalender={this.toggleCalender}
          myList={this.state.myList}
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
