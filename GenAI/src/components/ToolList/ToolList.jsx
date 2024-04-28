import React from "react";
import mockData from "../../assets/data";
import "./ToolList.css";
import { Link } from "react-router-dom";

const ToolList = () => {
  return (
    <div className="tool-list-container">
      <h1>AI Tools</h1>
      <ul className="tool-list">
        {mockData.map((tool) => (
          <li key={tool.id}>
            <h2>{tool.name}</h2>
            <p>Categories: {tool.categories}</p>
            <p>{tool.shortDescription}</p>
            <a
              href={tool.referenceURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link style={{ textDecoration: null }} to={`/infoai/${tool.id}`}>
                See detailed info
              </Link>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolList;
