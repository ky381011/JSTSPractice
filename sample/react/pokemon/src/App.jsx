import "./style.css";
import { useEffect, useState } from "react";

import { getAllPokemon } from "./utils/pokemon";

export function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得するためのロジック
      let res = await getAllPokemon(initialURL);
      console.log(res);
    }
    fetchPokemonData();
  }, []);

  return (
    <>
      <div className="App"></div>
    </>
  );
}