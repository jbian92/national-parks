import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      parks: []
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
            <Search query={this.state.query} updateQuery={this.updateQuery} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;