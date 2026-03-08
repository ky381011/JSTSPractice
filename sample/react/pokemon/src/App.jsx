import "./style.css";
import { useEffect, useState } from "react";

import { getAllPokemon, getPokemon } from "./utils/pokemon";

export function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

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

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得するためのロジック
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細データを取得するためのロジック
      loadPokemon(res.results);
      setLoading(false);
    }
    fetchPokemonData();
  }, []);

  return (
    <>
      <div className="App">
        {loading ? <h1>Loading Now...</h1> : <h1>Loading Complete!</h1>}
      </div>
    </>
  );
}