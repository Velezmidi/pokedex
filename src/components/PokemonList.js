import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonPage from "./PokemonPage";

function PokemonList() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const { isLoading, data } = useFetch(currentUrl);
  const { next, previous, results } = data;

  const [pokemons, setPokemons] = useState([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    setPokemons(results);
    setPreviousUrl(previous);
    setNextUrl(next);
  }, [data]);

  const handleNext = () => {
    setCurrentUrl(nextUrl);
  };
  const handlePrev = () => {
    setCurrentUrl(previousUrl);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {pokemons.map((element) => {
          const { name, url } = element;
          return (
            <div key={name}>
              <Link to={{ pathname: name, state: { url } }}>
                <h2>{name}</h2>
              </Link>
            </div>
          );
        })}
        {previousUrl && (
          <button type="button" className="btn" onClick={handlePrev}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button type="button" className="btn" onClick={handleNext}>
            Next
          </button>
        )}
      </>
    );
  }
}

export default PokemonList;
