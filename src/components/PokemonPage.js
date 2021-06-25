import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";

function PokemonPage() {
  const { handle } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${handle}`;
  const { isLoading, data } = useFetch(pokemonUrl);
  console.log(data);

  return <div>Wololo {handle}</div>;
}

export default PokemonPage;
