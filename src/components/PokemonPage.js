import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as useLocation } from "react-router-dom";

function PokemonPage() {
  try {
    const location = useLocation();
    const { url } = location.state;

    if (url) {
      return (
        <div>
          Poke page, pika pika modafoca
          {url}
        </div>
      );
    } else {
      return <div>No match</div>;
    }
  } catch {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
}

export default PokemonPage;
