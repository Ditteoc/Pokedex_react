import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(currentUrl);
        const data = await res.json();
        setNextUrl(data.next);
        setPrevUrl(data.previous);

        const details = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            return res.json();
          })
        );

        setPokemon(details);
      } catch (err) {
        console.error("Fejl:", err);
      }
    };
    fetchPokemon();
  }, [currentUrl]);

  return (
    <>
      <ul className="tw-grid-list">
        {pokemon.map((p) => (
          <PokemonCard key={p.id} data={p} />
        ))}
      </ul>
      <Pagination
        onPrevious={() => setCurrentUrl(prevUrl)}
        onNext={() => setCurrentUrl(nextUrl)}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
      />
    </>
  );
};

export default PokemonList;
