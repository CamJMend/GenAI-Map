import { useState, useEffect } from "react";
import "./Landing.css";
import bgndImage from "../../assets/images/top-home-rectagnle.png";
import imagenMap from "../../assets/images/AI-Map.png";
import { Link } from "react-router-dom";
import fetchItems from "../../components/fetchAndCache/fetchAndCache";
import Loading from "../../components/Loading/Loading";

const Landing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems().then((data) => {
      setLoading(false);
      setData(data);
    });
  }, []);

  let index = Math.floor(Math.random() * data.length - 10);

  return (
    <div className="home">
      <div className="background-landing">
        <img id="bgndImage" src={bgndImage} alt="Imagen de background" />
        <Link to="/map">
          <img id="imagenMap" src={imagenMap} alt="Imagen de mapa" />
        </Link>
      </div>
      <div className="landingTexts">
        <p id="A">A</p>
        <p id="UTOGEN">UTO GEN</p>
        <p id="IMAP">I MAP</p>
        <p id="sub">A new door to innovation...</p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="landing-cards">
            <div id="left-column">
              <div
                id="left-column-first"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/infoai/${data[index] ? data[index].id : ""}`}
                >
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={data[index] ? data[index].urlLogo : ""}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                    }}
                  />
                  {index++}
                </Link>
              </div>
              <Link to="/search">
                <div id="left-column-second">
                  <h3>Search AI Tools</h3>
                  <p>
                    The search bar component is a key feature of the web
                    application, implementing this in the prototyping phase of
                    the project allows for unit testing on the database response
                    times and query efficiency.
                  </p>
                </div>
              </Link>
              <div
                id="left-column-third"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/infoai/${data[index] ? data[index].id : ""}`}
                >
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={data[index] ? data[index].urlLogo : ""}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                    }}
                  />
                  {index++}
                </Link>
              </div>
              <div id="left-column-fourth-back">
                <div id="left-column-fourth">
                  <h3>What is Gen AI?</h3>
                  <p>
                    Gen AI is an innovative project developed by a group of
                    students from Tec de Monterrey in collaboration with
                    Wizeline, designed to provide users with a unique platform
                    to explore and discover a wide array of AI technologies.
                  </p>
                </div>
              </div>
            </div>
            <div id="right-column">
              <div id="right-column-first">
                <div
                  id="right-column-first-left"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/infoai/${data[index] ? data[index].id : ""}`}
                  >
                    <img
                      style={{ width: "150px", height: "150px" }}
                      src={data[index] ? data[index].urlLogo : ""}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                      }}
                    />
                    {index++}
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/infoai/${data[index] ? data[index].id : ""}`}
                  >
                    <img
                      style={{ width: "150px", height: "150px" }}
                      src={data[index] ? data[index].urlLogo : ""}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                      }}
                    />
                    {index++}
                  </Link>
                </div>
                <div id="right-column-first-right">
                  <div
                    id="right-column-first-right-up"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    {" "}
                    <Link
                      style={{ textDecoration: "none", marginBottom: "80px" }}
                      to={`/infoai/${data[index] ? data[index].id : ""}`}
                    >
                      <img
                        style={{ width: "150px", height: "150px" }}
                        src={data[index] ? data[index].urlLogo : ""}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                        }}
                      />
                      {index++}
                    </Link>
                  </div>
                  <div
                    id="right-column-first-right-down"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/infoai/${data[index] ? data[index].id : ""}`}
                    >
                      <img
                        style={{ width: "150px", height: "150px" }}
                        src={data[index] ? data[index].urlLogo : ""}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                        }}
                      />
                      {index++}
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <div id="right-column-second">
                  <h3>Who are we?</h3>
                  <p>
                    We are a dedicated group of students from Tec de Monterrey,
                    working in collaboration with Wizeline, to develop an
                    innovative platform. This platform uniquely showcases a
                    variety of AI tools that we systematically gather from
                    across the web. Our aim is to provide a dynamic and
                    interactive experience where users can easily explore and
                    learn about the latest advancements in AI technology.
                    Through this initiative, we hope to facilitate better
                    understanding and accessibility of AI tools, enabling users
                    to discover applications that can drive their projects and
                    research forward.
                  </p>
                </div>
              </Link>
              <div id="right-column-third">
                <div id="right-column-third-left-back">
                  <div
                    id="right-column-third-left"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/infoai/${data[index] ? data[index].id : ""}`}
                    >
                      <img
                        style={{ width: "150px", height: "150px" }}
                        src={data[index] ? data[index].urlLogo : ""}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                        }}
                      />
                      {index++}
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/infoai/${data[index] ? data[index].id : ""}`}
                    >
                      <img
                        style={{ width: "150px", height: "150px" }}
                        src={data[index] ? data[index].urlLogo : ""}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                        }}
                      />
                      {index++}
                    </Link>
                  </div>
                </div>
                <div id="right-column-third-right-back">
                  <div
                    id="right-column-third-right"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/infoai/${data[index] ? data[index].id : ""}`}
                    >
                      <img
                        style={{ width: "150px", height: "150px" }}
                        src={data[index] ? data[index].urlLogo : ""}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
                        }}
                      />
                      {index++}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Landing;
