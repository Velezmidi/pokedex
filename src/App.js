import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonPage from "./components/PokemonPage";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/:handle">
          <PokemonPage />
        </Route>
        <Route path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
