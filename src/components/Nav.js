import React, { Component } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      clicked: false
    };
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm.length > 0) {
      this.props.getFilteredShowsFromServer(this.state.searchTerm);
    } else {
      this.props.getShowsFromServer();
    }
  };

  handleClick = () => {
    if (!this.state.clicked) {
      this.filterShows();
      this.setState({
        clicked: !this.state.clicked
      });
    } else {
      this.props.getShowsFromServer();
      this.setState({
        clicked: !this.state.clicked
      });
    }
  };

  filterShows = () => {
    let filteredShows = this.props.shows.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.props.updateShowState(filteredShows);
  };
  render() {
    return (
      <div className="nav">
        <img
          className="sort"
          alt="Sort Alphabetically"
          src="https://cdn.pixabay.com/photo/2012/04/11/11/17/sort-27489_960_720.png"
          onClick={this.handleClick}
        />
        <form onSubmit={this.handleSubmit} className="searchBar">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
          />
          <input className="button" type="submit" />
        </form>
        <button className="button" onClick={this.props.updateMyListState}>
          My Shows
        </button>
      </div>
    );
  }
}
export default Nav;
