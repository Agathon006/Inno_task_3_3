import "./videoFrame.css";
import videoPreview from "../../assets/images/dude-you-re-getting-a-telescope.png";
import likeIcon from "../../assets/icons/like.svg";
import disLikeIcon from "../../assets/icons/dislike.svg";
import shareIcon from "../../assets/icons/share.svg";
import extraIcon from "../../assets/icons/extra.svg";

const VideoFrame = () => {
  return (
    <div className="videoFrame">
      <img
        src={videoPreview}
        alt="Dude You Re Getting A Telescope"
        className="videoFrame__preview"
      />
      <h2 className="videoFrame__title">Dude You Re Getting A Telescope</h2>
      <div className="videoFrame__subtitle">
        <div className="videoFrame__subtitle-left">
          <span className="videoFrame__views">123k views</span>
        </div>
        <div className="videoFrame__subtitle-right">
          <button className="videoFrame__button">
            <img
              src={likeIcon}
              alt="like"
              className="videoFrame__button-logo"
            />
            <span className="videoFrame__button-span">123k</span>
          </button>
          <button className="videoFrame__button">
            <img
              src={disLikeIcon}
              alt="dislike"
              className="videoFrame__button-logo"
            />
            <span className="videoFrame__button-span">435k</span>
          </button>
          <button className="videoFrame__button">
            <img
              src={shareIcon}
              alt="share"
              className="videoFrame__button-logo"
            />
            <span className="videoFrame__button-span">Share</span>
          </button>
          <button
            style={{
              backgroundImage: `url(${extraIcon})`,
            }}
            className="videoFrame__extra-button"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;
