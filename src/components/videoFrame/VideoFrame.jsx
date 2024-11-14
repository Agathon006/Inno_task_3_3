import "./videoFrame.css";
import videoPreview from "../../assets/images/dude-you-re-getting-a-telescope.png";
import likeIcon from "../../assets/icons/like.svg";
import disLikeIcon from "../../assets/icons/dislike.svg";
import shareIcon from "../../assets/icons/share.svg";
import extraIcon from "../../assets/icons/extra.svg";

const videoFrame = () => {
  return (
    <div className="video-frame">
      <img
        src={videoPreview}
        alt="Dude You Re Getting A Telescope"
        className="video-frame__preview"
      />
      <h2 className="video-frame__title">Dude You Re Getting A Telescope</h2>
      <div className="video-frame__subtitle">
        <div className="video-frame__subtitle-left">
          <span className="video-frame__views">123k views</span>
        </div>
        <div className="video-frame__subtitle-right">
          <button className="video-frame__button">
            <img
              src={likeIcon}
              alt="like"
              className="video-frame__button-logo"
            />
            <span className="video-frame__button-span">123k</span>
          </button>
          <button className="video-frame__button">
            <img
              src={disLikeIcon}
              alt="dislike"
              className="video-frame__button-logo"
            />
            <span className="video-frame__button-span">435k</span>
          </button>
          <button className="video-frame__button">
            <img
              src={shareIcon}
              alt="share"
              className="video-frame__button-logo"
            />
            <span className="video-frame__button-span">Share</span>
          </button>
          <button
            style={{
              backgroundImage: `url(${extraIcon})`,
            }}
            className="video-frame__extra-button"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default videoFrame;
