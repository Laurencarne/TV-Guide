import React, { Component } from "react";

class ShowTile extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      showAdded: false
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

  handleAddShowClick = event => {
    this.setState({
      showAdded: !this.state.showAdded
    });
    event.preventDefault();
    const show = {
      id: this.props.show.id,
      name: this.props.show.name,
      officialSite: this.props.show.officialSite,
      genres: this.props.show.genres,
      image: {
        medium: this.props.show.image.medium
      },
      summary: this.props.show.summary,
      schedule: {
        time: this.props.show.schedule.time,
        days: this.props.show.schedule.days
      }
    };
    this.props.addShowToMyList(show).then(this.props.updateMyShowState(show));
  };

  showButton = () => {
    if (this.props.myShows.find(show => show.id === this.props.show.id)) {
      return (
        <button className="button" disabled>
          In Your List
        </button>
      );
    } else if (!this.state.showAdded) {
      return (
        <button className="button" onClick={this.handleAddShowClick}>
          Add Show
        </button>
      );
    }
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
          {this.showButton()}
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
export default ShowTile;
