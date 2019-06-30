import React, { Component } from "react";
import ShowTile from "./ShowTile";

class ShowCollection extends Component {
  renderShowTiles = () => {
    return this.props.shows.map(show => (
      <ShowTile
        show={show}
        updateMyShowState={this.props.updateMyShowState}
        addShowToMyList={this.props.addShowToMyList}
        myShows={this.props.myShows}
        key={show.id}
      />
    ));
  };
  render() {
    return <div className="Card">{this.renderShowTiles()}</div>;
  }
}
export default ShowCollection;
