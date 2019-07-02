import React, { Component } from "react";

class CalenderPage extends Component {
  renderShows = () => {};
  render() {
    return (
      <div className="Card">
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Monday</h1>
          <h4>You have {this.props.Days.Monday.length} shows.</h4>
          {this.props.Days.Monday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Tuesday</h1>
          <h4>You have {this.props.Days.Tuesday.length} shows.</h4>
          {this.props.Days.Tuesday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Wednesday</h1>
          <h4>You have {this.props.Days.Wednesday.length} shows.</h4>
          {this.props.Days.Wednesday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Thursday</h1>
          <h4>You have {this.props.Days.Thursday.length} shows.</h4>
          {this.props.Days.Thursday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Friday</h1>
          <h4>You have {this.props.Days.Friday.length} shows.</h4>
          {this.props.Days.Friday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Saturday</h1>
          <h4>You have {this.props.Days.Saturday.length} shows.</h4>
          {this.props.Days.Saturday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
        <div className="innerDay">
          <h1 onClick={this.handleClick}>Sunday</h1>
          <h4>You have {this.props.Days.Sunday.length} shows.</h4>
          {this.props.Days.Sunday.map(show => (
            <p>
              {show.name} at {show.schedule.time}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
export default CalenderPage;
