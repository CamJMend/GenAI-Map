import { useState } from "react";
import "./GitCard.css";
import { Link } from "react-router-dom";

const GitCard = ({ gitData, key }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="git-card" key={key}>
      <h2>{gitData.repo}</h2>
      <p>
        Category: <div className="cat-cont cat">{gitData.category}</div>
      </p>
      <p>
        Subcat:{" "}
        <div className="cat-cont subcat">
          {gitData.subcat ? gitData.subcat : ""}
        </div>
      </p>
      <p>
        <i className="fas fa-star" style={{ color: "black" }}></i> Stars:{" "}
        {gitData.stars}
      </p>
      <p>
        <i className="fas fa-download" style={{ color: "black" }}></i>{" "}
        Downloads: {gitData["downloads*"]}
      </p>
      <p>Created: {new Date(gitData.created_at).toLocaleDateString()}</p>
      <p>Updated: {new Date(gitData.updated_at).toLocaleDateString()}</p>

      <Link
        to={`/infogithub/${gitData.repo}`}
        style={{ textDecoration: "none" }}
      >
        ReadMe
      </Link>
      {gitData.description && (
        <button onClick={handleOpenModal}>Description</button>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{gitData.repo} Description</h2>
            <p>{gitData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitCard;
