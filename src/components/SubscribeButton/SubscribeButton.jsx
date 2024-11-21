/* eslint-disable react/prop-types */
import "./SubscribeButton.scss";

const SubscribeButton = ({ subNumber = null, extraClassName }) => {
  return (
    <button className={`subscribe-btn ${extraClassName}`}>
      Subscribe<span className="subscribe-btn__span"> {subNumber}</span>
    </button>
  );
};

export default SubscribeButton;
