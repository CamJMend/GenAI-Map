import "./About.css"; // Asegúrate de tener un archivo About.css en la misma carpeta que About.js
import aboutImage from "../../assets/images/About-image.png";
import aboutArrow from "../../assets/images/Arrow-about.png";

function About() {
  return (
    <div className="about-container">
      <img src={aboutArrow} alt="Arrow beside title" />
      <h1>About</h1>
      <div className="about-section-up">
        <h2>About us</h2>
        <p>
          We are a dedicated group of students from Tec de Monterrey, working in
          collaboration with Wizeline, to develop an innovative platform. This
          platform uniquely showcases a variety of AI tools that we
          systematically gather from across the web. Our aim is to provide a
          dynamic and interactive experience where users can easily explore and
          learn about the latest advancements in AI technology. Through this
          initiative, we hope to facilitate better understanding and
          accessibility of AI tools, enabling users to discover applications
          that can drive their projects and research forward.
        </p>
      </div>
      <div className="about-section-down">
        <div className="about-inside-section">
          <h2>Wizeline</h2>
          <p>
            Wizeline is a global technology services provider that builds
            high-quality digital products and platforms. It partners with
            companies to drive digital transformation and develop scalable
            solutions with a focus on the user experience, product design, and
            engineering capabilities. Mission: Our mission is to drive the
            frontier of technology further by developing AI tools that are both
            revolutionary and user-friendly. We aim to empower individuals and
            organizations around the world to achieve more with our
            state-of-the-art digital solutions{" "}
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Network graphic" />
        </div>
      </div>
    </div>
  );
}

export default About;
