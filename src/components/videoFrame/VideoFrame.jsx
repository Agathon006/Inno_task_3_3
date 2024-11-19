import "./videoFrame.scss";
import videoPreview from "../../assets/images/dude-you-re-getting-a-telescope.png";
import videoPreviewMob from "../../assets/images/dude-you-re-getting-a-telescope-mob.png";
import likeIcon from "../../assets/icons/like.svg";
import disLikeIcon from "../../assets/icons/dislike.svg";
import shareIcon from "../../assets/icons/share.svg";
import extraIcon from "../../assets/icons/extra.svg";
import showMoreIcon from "../../assets/icons/show-more.svg";

const videoFrame = () => {
  return (
    <div className="video-frame">
      <img
        src={videoPreview}
        alt="Dude You Re Getting A Telescope"
        className="video-frame__preview"
      />
      <img
        src={videoPreviewMob}
        alt="Dude You Re Getting A Telescope"
        className="video-frame__preview-mob"
      />
      <div className="video-frame__title-wrapper">
        <h2 className="video-frame__title">Dude You Re Getting A Telescope</h2>
        <button
          style={{
            backgroundImage: `url(${showMoreIcon})`,
          }}
          className="video-frame__button-more"
        ></button>
      </div>
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
