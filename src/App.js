import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";

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
  }

  render() {
    return (
      <Container>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default App;