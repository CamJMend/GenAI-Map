import { useState } from "react";
import PropTypes from "prop-types";

export const FAQ = ({ faq, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div key={index} className="FAQ-div">
      <div
        className="FAQ-title"
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        {faq.question}{" "}
        <i
          className={`fa-solid fa-arrow-${showAnswer ? "up" : "down"}`}
          style={{ color: "#000000" }}
        ></i>
      </div>

      <div
        className={
          showAnswer
            ? "FAQ-answers-slide-down"
            : "FAQ-answers-slide-up no-display"
        }
      >
        <div className="FAQ-answer">{faq.snippet}</div>

        <div className="FAQ-answer">
          Source:
          <a href={faq.link} className="FAQ-a" target="_blank">
            {faq.title}
          </a>
        </div>
      </div>
    </div>
  );
};

FAQ.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, // Add this line
  }).isRequired,
  index: PropTypes.number.isRequired,
};
