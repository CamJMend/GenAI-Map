// src/components/Search/Search.js
import React from 'react';
import './Search.css'; // Asegúrate de crear un archivo Search.css en la misma carpeta
import PruebaItems from '../../components/PruebaItems/PruebaItems';

function Search() {
    return (
        <div className="search-container">
            <header className="search-header">
                <h1>Search</h1>
                <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-button">Buscar</button>
                <p className='sort-by-text'>Sort by: </p>
                <select className="search-sort">
                    <option value="sortby">Date</option>
                    <option value="sortby">A-Z</option>
                    <option value="sortby">Z-A</option>
                </select>
            </header>
            div.container
            <div className="search-body">
                <section className="search-results">
                    <h2>XX Results found</h2>
                    <div className="results-grid">
                        {/* Iterar sobre los resultados de búsqueda y renderizar cada uno */}
                        <PruebaItems />
                        {/* Repetir para otros resultados */}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Search;

