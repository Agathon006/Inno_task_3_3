/* eslint-disable react/prop-types */
import "./AutoPlayButton.scss";

const AutoPlayButton = () => {
  return (
    <button className="autoplay-btn">
      <span className="autoplay-btn__span">Autoplay</span>
      <div className="autoplay-btn__slider">
        <div className="autoplay-btn__slider--inside"></div>
      </div>
    </button>
  );
};

export default AutoPlayButton;
