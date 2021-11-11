import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import * as API from "./services/api";

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
    //this.updateParks(newQuery);
  };

  // updateParks = (query) => {
  //   API.getParks(query)
  //     .then((parks) => {
  //       this.setState({
  //         parks: parks
  //       })
  //     })
  //     .catch((err) => console.log(err));
  // };

  render() {
    const { query, parks } = this.state;

    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <Search query={query} updateQuery={this.updateQuery} parks={parks} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;