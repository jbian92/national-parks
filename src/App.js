import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import States from "./pages/States";
import Webcams from "./pages/Webcams";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery
    });
  };

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/activities">
            <Activities />
          </Route>
          <Route exact path="/states">
            <States />
          </Route>
          <Route path="/webcams/:code">
            <Webcams />
          </Route>
          <Route path="/:code">
            <Info />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;