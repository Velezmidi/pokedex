import React, { useState } from "react";
import { useFetch } from "../customHooks/useFetch";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const { isLoading, data } = useFetch(currentUrl);

  console.log(data);

  return <div>Prueba</div>;
}

export default PokemonList;
