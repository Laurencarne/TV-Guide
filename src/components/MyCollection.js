import React, { Component } from "react";
import MyShowTile from "./MyShowTile";

class MyCollection extends Component {
  renderShowTiles = () => {
    return this.props.shows.map(show => (
      <MyShowTile
        show={show}
        key={show.id}
        deleteFromServer={this.props.deleteFromServer}
        getMyShowsFromServer={this.props.getMyShowsFromServer}
      />
    ));
  };
  render() {
    return <div className="Card">{this.renderShowTiles()}</div>;
  }
}
export default MyCollection;
