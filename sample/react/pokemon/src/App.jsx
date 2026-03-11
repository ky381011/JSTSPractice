import "./App.css";
import { useEffect, useState } from "react";

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

import { getAllPokemon, getPokemon } from "./utils/pokemon";

export function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all( // すべてのポケモンの詳細データを取得するためにPromise.allを使用している
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  }

  // console.log(pokemonData);

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  }

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得するためのロジック
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細データを取得するためのロジック
      loadPokemon(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>Loading Now...</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}