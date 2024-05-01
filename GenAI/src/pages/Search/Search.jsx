import "./Search.css"; // Make sure to create a Search.css file in the same folder
import PruebaItems from "../../components/PruebaItems/PruebaItems";
import Dropdown from "../../components/DropDown/Dropdown";
import { useState, useEffect, useContext } from "react";
import Loading from "../../components/Loading/Loading";
import fetchItems from "../../components/fetchAndCache/fetchAndCache";

function Search() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchItems().then((items) => {
      setData(items);
      setFilteredData(items); // Initialize with all items
      setLoading(false);
    });
  }, []);

  const handleSearch = () => {
    const normalizedQuery = searchTerm.toLowerCase().replace(/\s+/g, "");
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().replace(/\s+/g, "").includes(normalizedQuery)
    );
    setFilteredData(filteredItems);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <header className="search-header">
        <h1>Search</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <Dropdown />
      </header>
      <div className="search-body">
        <section className="search-results">
          {loading ? <Loading /> : <PruebaItems data={filteredData} />}
        </section>
      </div>
    </div>
  );
}

export default Search;
