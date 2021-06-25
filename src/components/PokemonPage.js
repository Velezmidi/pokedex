import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

import { useParams } from "react-router-dom";
import NotFoundPok from "./NotFoundPok";

function PokemonPage() {
  const { handle } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${handle}`;
  const { isLoading, data, isError } = useFetch(pokemonUrl);
  console.log(data);

  if (!isError) {
    return <div>Wololo {handle}</div>;
  } else {
    return <NotFoundPok />;
  }
}

export default PokemonPage;
