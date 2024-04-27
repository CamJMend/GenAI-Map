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
                <button className="search-button">&gt;</button>
                <select className="search-sort">
                    <option disabled selected value="">Sort by</option>
                    <option value="sortby">Date</option>
                    <option value="sortby">A-Z</option>
                    <option value="sortby">Z-A</option>
                </select>
                <div className='search-dropdown'>
                    <select className="category-dropdown">
                        <option disabled selected value="">Categories</option>
                        <option value="all">All Categories</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                        <option value="category4">Category 4</option>
                        <option value="category5">Category 5</option>
                    </select>
                    <select className="task-dropdown">
                        <option disabled selected value="">Tasks</option>
                        <option value="all">All Tasks</option>
                        <option value="task1">Task 1</option>
                        <option value="task2">Task 2</option>
                        <option value="task3">Task 3</option>
                        <option value="task4">Task 4</option>
                        <option value="task5">Task 5</option>
                    </select>
                </div>
            </header>
            <div className="search-body">
                <section className="search-results">
                    <h2>--&gt;  XX Results found</h2>
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

