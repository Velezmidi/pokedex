import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonList from "./modules/PokemonList";
function App() {
  return (
    <Router>
      <PokemonList />
    </Router>
  );
}

export default App;
