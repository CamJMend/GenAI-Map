import React from "react";
import "./Card.css";
import image_logo from "../../assets/images/main_logo_white_X1.png";
import data from "../../assets/data.js";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <div className="bgnd-image">
        <img
          src={props.urlLogo}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://img.freepik.com/foto-gratis/vista-robot-grafico-3d_23-2150849173.jpg";
          }}
        />
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button>
        <Link to={`/infoai/${props.id}`} className="visit-button">
          See more Info
        </Link>
      </button>
    </div>
  );
};

export default Card;
