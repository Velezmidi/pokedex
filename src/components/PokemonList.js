import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

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
              <h2>{name}</h2>
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
