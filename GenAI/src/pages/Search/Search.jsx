import "./Search.css";
import PruebaItems from "../../components/PruebaItems/PruebaItems";
import Dropdown from "../../components/DropDown/Dropdown";
import { useState, useEffect, useContext } from "react";
import Loading from "../../components/Loading/Loading";
import fetchItems from "../../components/fetchAndCache/fetchAndCache";
import Pagination from "../../components/Pagination/Pagination";
import { GlobalContext } from "../../GlobalContext/GlobalContext"; // Assume GlobalContext is being used

function Search() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { state } = useContext(GlobalContext); // Accessing global state

  useEffect(() => {
    fetchItems().then((items) => {
      setData(items);
      setFilteredData(items);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, data, state]); // Reacting to changes in searchTerm, data, or global context

  const handleSearch = () => {
    const normalizedQuery = searchTerm.toLowerCase().replace(/\s+/g, "");
    const filteredItems = data.filter(
      (item) =>
        item.name.toLowerCase().replace(/\s+/g, "").includes(normalizedQuery) &&
        (state.task === "" || item.tasks.includes(state.task)) &&
        (state.category === "" || item.categories.includes(state.category))
    );
    setFilteredData(filteredItems);
    setCurrentPage(1); // Reset to first page whenever filter changes
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
          {loading ? (
            <Loading />
          ) : (
            <PruebaItems data={currentItems} total={filteredData.length} />
          )}
        </section>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Search;
