import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import States from "./pages/States";
import Webcams from "./pages/Webcams";

function App() {
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
        <Route path="/info/:code">
          <Info />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;