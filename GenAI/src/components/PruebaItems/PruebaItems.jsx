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
const sortData = (data, sortBy) => {
  if (sortBy === "") return data;
  return data.sort((a, b) => {
    const aN = a.name.toLowerCase();
    const bN = b.name.toLowerCase();
    if (aN < bN) {
      if (sortBy === "A-Z") return 1;
      return -1;
    }
    if (aN > bN) {
      if (sortBy === "A-Z") return -1;
      return 1;
    }
    return 0;
  });
};
// eslint-disable-next-line react/prop-types
const PruebaItems = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    const filteredData = filterData(data, state.task, state.category);
    setFilteredData(sortData(filteredData, state.sortBy));
  }, [data, state.task, state.category, state.sortBy]);
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
