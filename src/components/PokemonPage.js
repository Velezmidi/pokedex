import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

import { useParams } from "react-router-dom";
import NotFoundPok from "./NotFoundPok";

function PokemonPage() {
  const { handle } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${handle}`;
  const { isLoading, data, isError } = useFetch(pokemonUrl);
  // console.log(data);
  const { id } = data;
  console.log(id);

  if (!isError) {
    return (
      <div>
        Display name from Handle: {handle} Display id from fetched data: {id}
      </div>
    );
  } else {
    return <NotFoundPok />;
  }
}

export default PokemonPage;
