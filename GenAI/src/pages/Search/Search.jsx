import "./Search.css"; // Make sure to create a Search.css file in the same folder
import PruebaItems from "../../components/PruebaItems/PruebaItems";
import Dropdown from "../../components/DropDown/Dropdown";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import fetchItems from "../../components/fetchAndCache/fetchAndCache";
import Pagination from "../../components/Pagination/Pagination";

function Search() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchItems().then((items) => {
      setData(items);
      setFilteredData(items); // Initialize with all items
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    handleSearch(); // Re-filter items when data changes
  }, [data]);


  const handleSearch = () => {
    const normalizedQuery = searchTerm.toLowerCase().replace(/\s+/g, "");
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().replace(/\s+/g, "").includes(normalizedQuery)
    );
    setFilteredData(filteredItems);
    setCurrentPage(1); // Reset to first page
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
          {loading ? <Loading /> : <PruebaItems data={currentItems} />}
        </section>
      </div>
      <Pagination 
      currentPage={currentPage} 
      totalItems={data.length}
      itemsPerPage={itemsPerPage} 
      onPageChange={handlePageChange} />
    </div>
  );
}

export default Search;