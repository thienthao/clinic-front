import React from "react";
import "./MainContent.css";
import MaterialTable from "material-table";
import Schedule from "./Schedule";
import Services from "./Services";
import Rating from "./Rating";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: props.link
    };
  }
  render() {
    if (this.state.link === "services") {
      return (
        <div className="container">
          <Services />
        </div>
      );
    } else if (this.state.link === "schedule") {
      return (
        <div className="container">
          <Schedule />
        </div>
      );
    } else if (this.state.link === "rating") {
      return (
        <div className="container">
          <Rating />
        </div>
      );
    }
  }
}

export default MainContent;
