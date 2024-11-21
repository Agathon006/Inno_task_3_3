/* eslint-disable react/prop-types */
import "./ShowMoreButton.scss";

const ShowMoreButton = ({ text = "Show more", extraClassName }) => {
  return <button className={`show-more-btn ${extraClassName}`}>{text}</button>;
};

export default ShowMoreButton;
