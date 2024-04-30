// src/components/Search/Search.js

import "./Search.css"; // Asegúrate de crear un archivo Search.css en la misma carpeta
import PruebaItems from "../../components/PruebaItems/PruebaItems";
import Dropdown from "../../components/DropDown/Dropdown";
import { useState, useEffect, useContext } from "react";
import Loading from "../../components/Loading/Loading";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import fetchItems from "../../components/fetchAndCache/fetchAndCache";

function Search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state, updateState } = useContext(GlobalContext);
  console.log(state);
  useEffect(() => {
    fetchItems().then((data) => {
      console.log(data);
      setData(data);
      setLoading(false);
      updateState("query", "");
      updateState("sortBy", "");
      updateState("category", "");
      updateState("task", "");
    });
  }, []);

  return (
    <div className="search-container">
      <header className="search-header">
        <h1>Search</h1>
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">&gt;</button>

        <Dropdown />
      </header>
      <div className="search-body">
        <section className="search-results">
          {loading ? <Loading /> : <PruebaItems data={data} />}
        </section>
      </div>
    </div>
  );
}

export default Search;
