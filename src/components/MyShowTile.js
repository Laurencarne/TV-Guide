import React, { Component } from "react";

class MyShowTile extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  shortenSummary = () => {
    const string = this.props.show.summary;
    if (string.length > 200) {
      let firstHalf = string.slice(0, 200);
      return firstHalf.concat("...");
    } else {
      return string;
    }
  };

  deleteButton = () => {
    this.props
      .deleteFromServer(this.props.show.id)
      .then(this.props.getMyShowsFromServer);
  };

  changeData = () => {
    if (!this.state.clicked) {
      return (
        <img
          src={
            this.props.show.image
              ? this.props.show.image.medium
              : "https://moon-game.github.io/images/coming_soon.png"
          }
          alt={this.props.show.name}
          onClick={this.handleClick}
        />
      );
    } else {
      return (
        <div>
          <button className="button" onClick={this.deleteButton}>
            Remove
          </button>
          <div onClick={this.handleClick}>
            {this.props.show.name ? (
              <h2 className="title">{this.props.show.name}</h2>
            ) : (
              <h2> What a Great Show </h2>
            )}

            {this.props.show.network ? (
              <h3> {this.props.show.network.name} </h3>
            ) : null}
            <p dangerouslySetInnerHTML={{ __html: this.shortenSummary() }} />
          </div>
          {this.props.show.officialSite ? (
            <a
              href={this.props.show.officialSite}
              target="_blank"
              alt="Link to the shows website"
            >
              Visit The Site
            </a>
          ) : null}
        </div>
      );
    }
  };

  render() {
    return <div className="innerCard">{this.changeData()}</div>;
  }
}
export default MyShowTile;
