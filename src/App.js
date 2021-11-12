import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Activities from "./pages/Activities";

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
          <Route exact path="/search">
            <Search query={this.state.query} updateQuery={this.updateQuery} />
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