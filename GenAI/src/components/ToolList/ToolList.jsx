import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination"; // Asegúrate de que el path al componente de Pagination es correcto
import "./ToolList.css";

const ToolList = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/ai-info/trending/true"
        );
        const data = await response.json();
        setTools(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
        setIsLoading(false);
      }
    };

    fetchTools();
  }, []);

  // Calcular el rango de datos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tools.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tool-list-container">
      <h1>Top 50 AI Tools</h1>
      <ul className="tool-list">
        {currentItems.map((tool) => (
          <li key={tool.id}>
            <h2>
              {tool.ranking}. {tool.name}
            </h2>
            <p>Categories: {tool.categories.join(", ")}</p>
            <p>{tool.shortDescription}</p>
            <Link
              to={`/infoai/${tool.id}`}
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              See detailed info
            </Link>
            <a
              href={tool.referenceURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={tools.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ToolList;
