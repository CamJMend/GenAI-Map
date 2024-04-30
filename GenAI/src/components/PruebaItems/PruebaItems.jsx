import Card from "../Card/Card";
import "./PruebaItems.css";

import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const filterData = (data, task, category) => {
  if (task === "" && category === "") return data;
  return data.filter(
    (item) =>
      (task === "" || task === "all" || item.tasks.includes(task)) &&
      (category === "" ||
        category === "all" ||
        item.categories.includes(category))
  );
};

const PruebaItems = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    const filteredData = filterData(data, state.task, state.category);
      console.log(filteredData);
    setFilteredData(filteredData);
  }, [data, state.task, state.category]);
  return (
    <>
      <h2>--&gt; {filteredData.length} Results found</h2>
      <div className="results-grid">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            urlLogo={item.urlLogo}
            name={item.name}
            description={item.shortDescription}
            url={item.referenceURL}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default PruebaItems;
