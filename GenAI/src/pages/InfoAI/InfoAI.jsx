import "./InfoAI.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toolImage from "../../assets/images/AiToolImage.png";
import returnArrow from "../../assets/images/arrowReturn.png";
import Loading from "../../components/Loading/Loading";
import { FAQ } from "../../components/FAQ/faq";

const InfoAI = () => {
  const { id } = useParams();
  const [toolData, setToolData] = useState({
    name: "",
    pricingModel: "",
    licensingType: "",
    categories: [], // Initialize as empty arrays to ensure .map() can always run
    tasks: [],
    description: "",
    shortDescription: "",
    referenceURL: "",
  });
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToolData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/ai-info/${id}`);
        const data = await response.json();
        setToolData(data[0]); // Assume data is directly the tool object
        console.log("Tool data fetched:", data[0]);
      } catch (error) {
        console.error("Failed to fetch tool data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchToolData();
  }, [id]);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  if (loading) {
    return <Loading />;
  }

  if (!toolData) {
    return <p>No data found for tool with ID {id}</p>;
  }
  console.log();
  return (
    <div className="infoai">
      <div className="information">
        <div className="return">
          <img
            src={returnArrow}
            alt="Back arrow"
            onClick={() => window.history.back()}
          />
          <h5>Return to search</h5>
        </div>
        <div className="logo-title">
          <h1>
            {toolData.name}{" "}
            <img
              style={{ maxWidth: "100px", height: "auto" }}
              src={toolData.urlLogo}
              alt=""
            />
          </h1>
        </div>
        <div className="pricing-licensing">
          <ul id="pricing-licensing-list">
            <li
              className={
                toolData.pricingModel == "FREE"
                  ? "free"
                  : toolData.pricingModel == "PAID"
                  ? "premium"
                  : "freemium"
              }
            >
              {toolData.pricingModel}
            </li>
            <li className="freemium">{toolData.licensingType}</li>
          </ul>
        </div>
        <div className="categories">
          <ul id="categories-list">
            {toolData.categories.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
          </ul>
        </div>
        <div className="tasks">
          <ul id="tasks-list">
            {toolData.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        {toolData.ranking && toolData.ranking > 0 ? (
          <div className="ranking">
            <h2>
              {" "}
              <strong style={{ fontWeight: "1000" }}>Ranking:</strong>
              {toolData.ranking}
            </h2>
          </div>
        ) : null}
        <div className="description">
          <p>{toolData.shortDescription}</p>
        </div>

        <div className="description">
          <p
            dangerouslySetInnerHTML={{
              __html: showFullDescription
                ? toolData.description.replaceAll("\n", "<br>")
                : "",
            }}
          />
          {toolData.description ? (
            <button onClick={toggleDescription}>
              {showFullDescription ? "Show Less " : "Show More"}
            </button>
          ) : (
            ""
          )}
        </div>
        {toolData.questions.length > 0 ? <h2 className="FAQ-h2">FAQ</h2> : null}
        {toolData.questions.map((faq, index) => (
          <FAQ faq={faq} key={index} />
        ))}
        <button
          id="visit-button"
          onClick={() => (window.location.href = toolData.referenceURL)}
        >
          Visit tool website
        </button>
        <h2 className="rel-searches-h2">Search on the web:</h2>
        <ul className="rel-searches-ul">
          {toolData.searches.map((search) => (
            <li key={search.id} className="rel-searches-li">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "black" }}
              ></i>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  search.query
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rel-searches-a"
              >
                {search.query}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="image">
        <img src={toolImage} alt="Tool Representation" />
      </div>
    </div>
  );
};

export default InfoAI;
