import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Rating from "./components/Rating";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./components/Schedule";
import MainContent from "./components/MainContent";
import NewServices from "./components/NewService";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              path="/schedule"
              render={props => <MainContent {...props} link="schedule" />}
            />
            <Route
              path="/services"
              render={props => <MainContent {...props} link="services" />}
            />
            <Route
              path="/rating"
              render={props => <MainContent {...props} link="rating" />}
            />
            <Route path="/new" component={NewServices} />
          </Switch>
        </div>
      </Router>
      // <Login />
    );
  }
}

export default App;
