import Card from "../Card/Card";
import "./PruebaItems.css";

const PruebaItems = ({ data }) => {
  return (
    <>
      <h2>--&gt; {data.length} Results found</h2>
      <div className="results-grid">
        {data.map((item) => (
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
