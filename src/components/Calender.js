import React, { Component } from "react";
import CalenderPage from "./CalenderPage";
import ShowTile from "./ShowTile";

class Calender extends Component {
  constructor() {
    super();
    this.state = {
      Days: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
      }
    };
  }

  componentDidMount() {
    this.filterDay("Monday");
    this.filterDay("Tuesday");
    this.filterDay("Wednesday");
    this.filterDay("Thursday");
    this.filterDay("Friday");
    this.filterDay("Saturday");
    this.filterDay("Sunday");
  }

  filterDay = day => {
    let thisDay = this.props.myShows.filter(show =>
      show.schedule.days.includes(day)
    );
    this.updateState(day, thisDay);
  };

  updateState = (day, thisDay) => {
    switch (day) {
      case "Monday":
        this.setState({
          Days: Object.assign(this.state.Days, { Monday: thisDay })
        });
        break;
      case "Tuesday":
        this.setState({
          Days: Object.assign(this.state.Days, { Tuesday: thisDay })
        });
        break;
      case "Wednesday":
        this.setState({
          Days: Object.assign(this.state.Days, { Wednesday: thisDay })
        });
        break;
      case "Thursday":
        this.setState({
          Days: Object.assign(this.state.Days, { Thursday: thisDay })
        });
        break;
      case "Friday":
        this.setState({
          Days: Object.assign(this.state.Days, { Friday: thisDay })
        });
        break;
      case "Saturday":
        this.setState({
          Days: Object.assign(this.state.Days, { Saturday: thisDay })
        });
        break;
      case "Sunday":
        this.setState({
          Days: Object.assign(this.state.Days, { Sunday: thisDay })
        });
    }
  };

  handleClick = e => {
    return <div className="Card">{this.renderShowTiles()}</div>;
  };

  render() {
    return <CalenderPage Days={this.state.Days} />;
  }
}
export default Calender;
