import "./style.css";
import { useEffect, useState } from "react";

import { getAllPokemon } from "./utils/pokemon";

export function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンのデータを取得するためのロジック
      let res = await getAllPokemon(initialURL);
      console.log(res);
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