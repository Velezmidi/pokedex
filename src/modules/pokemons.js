import React, { useState, useEffect } from "react";

function Pokemons() {
  const [pokemons, setPokemons] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    fetch(currentUrl)
      .then((resp) => {
        return resp.json();
      })
      .then((poke) => {
        const { results, next, previous } = poke;
        setPokemons(results);
        setNextPage(next);
        setPrevPage(previous);
        setIsLoading(false);
      });
  }, [currentUrl]);

  const handleNextPage = () => {
    setCurrentUrl(nextPage);
  };

  const handlePrevPage = () => {
    setCurrentUrl(prevPage);
  };

  // console.log(pokemons);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <div>
          {pokemons.map((pokemon) => {
            const { name } = pokemon;
            const img = `https://img.pokemondb.net/artwork/${name}.jpg`;
            return (
              <div key={name} className="pokecard">
                <div className="cardContent">
                  <h2>{name}</h2>
                  <img src={img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        {prevPage && (
          <button type="button" onClick={handlePrevPage}>
            Previous page
          </button>
        )}
        {nextPage && (
          <button type="button" onClick={handleNextPage}>
            Next page
          </button>
        )}
      </>
    );
  }
}

export default Pokemons;
