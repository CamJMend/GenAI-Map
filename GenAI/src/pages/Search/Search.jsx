// src/components/Search/Search.js
import React from "react";
import "./Search.css"; // Asegúrate de crear un archivo Search.css en la misma carpeta
import PruebaItems from "../../components/PruebaItems/PruebaItems";
import Dropdown from "../../components/DropDown/Dropdown";

function Search() {
  return (
    <div className="search-container">
      <header className="search-header">
        <h1>Search</h1>
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">&gt;</button>
        <select className="search-sort">
          <option disabled selected value="">
            Sort by
          </option>
          <option value="sortby">Date</option>
          <option value="sortby">A-Z</option>
          <option value="sortby">Z-A</option>
        </select>
        <Dropdown />
      </header>
      <div className="search-body">
        <section className="search-results">
          <PruebaItems />
        </section>
      </div>
    </div>
  );
}

export default Search;
