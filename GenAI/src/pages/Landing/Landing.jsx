import "./Landing.css";
import bgndImage from "../../assets/images/top-home-rectagnle.png";
import imagenMap from "../../assets/images/AI-Map.png";
import { Link } from "react-router-dom";
//import PruebaItems from '../../components/PruebaItems/PruebaItems';
//import Hero from '../../components/Hero/Hero';

const Landing = () => {
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
        <p id="IMAP">I MAP</p>
        <p id="sub">A new door to innovation ...</p>
      </div>
      <div className="landing-cards">
        <div id="left-column">
          <div id="left-column-first"></div>
          <Link to="/search">
            <div id="left-column-second">
              <h3>Search AI Tools</h3>
              <p>
                The search bar component is a key feature of the web
                application, implementing this in the prototyping phase of the
                project allows for unit testing on the database response times
                and query efficiency as well as user input processing,
              </p>
            </div>
          </Link>
          <div id="left-column-third"></div>
          <div id="left-column-fourth-back">
            <div id="left-column-fourth">
              <h3>What is Gen AI?</h3>
              <p>
                Gen AI is an innovative project developed by a group of students
                from Tec de Monterrey in collaboration with Wizeline, designed
                to provide users with a unique platform to explore and discover
                a wide array of AI technologies.
              </p>
            </div>
          </div>
        </div>
        <div id="right-column">
          <div id="right-column-first">
            <div id="right-column-first-left"></div>
            <div id="right-column-first-right">
              <div id="right-column-first-right-up">
                <img
                  src="https://s2.googleusercontent.com/s2/favicons?sz=64&domain_url=https://chat.openai.com/"
                  alt=""
                />
              </div>
              <div id="right-column-first-right-down"></div>
            </div>
          </div>
          <Link to="/about">
            <div id="right-column-second">
              <h3>Who are we?</h3>
              <p>
                We are a dedicated group of students from Tec de Monterrey,
                working in collaboration with Wizeline, to develop an innovative
                platform. This platform uniquely showcases a variety of AI tools
                that we systematically gather from across the web. Our aim is to
                provide a dynamic and interactive experience where users can
                easily explore and learn about the latest advancements in AI
                technology. Through this initiative, we hope to facilitate
                better understanding and accessibility of AI tools, enabling
                users to discover applications that can drive their projects and
                research forward.
              </p>
            </div>
          </Link>
          <div id="right-column-third">
            <div id="right-column-third-left-back">
              <div id="right-column-third-left">
                https://s2.googleusercontent.com/s2/favicons?sz=64&domain_url=https://chat.openai.com/
              </div>
            </div>
            <div id="right-column-third-right-back">
              <div id="right-column-third-right">
                https://s2.googleusercontent.com/s2/favicons?sz=64&domain_url=https://chat.openai.com/
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
