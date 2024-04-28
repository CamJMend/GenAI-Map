import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./PruebaItems.css";
import Loading from "../Loading/Loading";

const fetchItems = async () => {
  try {
    const response = await fetch("http://localhost:3001/ai-info");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch items:", error);
    return [];
  }
};

const PruebaItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2>--&gt; {data.length} Results found</h2>
      <div className="results-grid">
        {loading ? (
          <Loading /> // Render loading indicator if data is not yet available
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              urlLogo={item.urlLogo}
              name={item.name}
              description={item.shortDescription}
              url={item.referenceURL}
              id={item.id}
            />
          ))
        )}
      </div>
    </>
  );
};

export default PruebaItems;
