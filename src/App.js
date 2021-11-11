import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import * as API from "./services/api";

function App() {
  const[query, setQuery] = useState("");
  const[parks, setParks] = useState([]);

  useEffect(() => {
    API.getParks(query)
      .then((parks) => setParks(parks))
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Search query={query} setQuery={setQuery} parks={parks} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;