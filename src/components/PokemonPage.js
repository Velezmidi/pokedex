import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

import { useParams } from "react-router-dom";
import NotFoundPok from "./NotFoundPok";

function PokemonPage() {
  const { handle } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${handle}`;
  const { isLoading, data, isError } = useFetch(pokemonUrl);
  // console.log(data);
  const { id, name } = data;
  console.log(data);

  if (!isError) {
    return (
      <div>
        <div>Display name from Handle: {handle}</div>
        <div>Display name from fetched data: {name}</div>
        <div>Display id from fetched data: {id}</div>
      </div>
    );
  } else {
    return <NotFoundPok />;
  }
}

export default PokemonPage;
