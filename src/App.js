import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
function App() {
  return (
    <Router>
      <Route to="/">
        <PokemonList />
      </Route>
    </Router>
  );
}

export default App;
