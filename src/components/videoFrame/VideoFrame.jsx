import "./videoFrame.scss";

import LikeIcon from "../../assets/icons/like.svg";
import DislikeIcon from "../../assets/icons/dislike.svg";
import ShareIcon from "../../assets/icons/share.svg";
import ExtraIcon from "../../assets/icons/extra.svg";
import ShowMoreIcon from "../../assets/icons/show-more.svg";

import videoPreview from "../../assets/images/dude-you-re-getting-a-telescope.png";
import videoPreviewMob from "../../assets/images/dude-you-re-getting-a-telescope-mob.png";

import IconButton from "../IconButton/IconButton";
import IconWithSpanButton from "../IconWithSpanButton/IconWithSpanButton";

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
        <IconButton extraClassName="video-frame__button-more">
          <ShowMoreIcon />
        </IconButton>
      </div>
      <div className="video-frame__subtitle">
        <div className="video-frame__subtitle-left">
          <span className="video-frame__views">123k views</span>
        </div>
        <div className="video-frame__subtitle-right">
          <IconWithSpanButton spanText="123k">
            <LikeIcon />
          </IconWithSpanButton>
          <IconWithSpanButton
            spanText="435k"
            extraClassName="video-frame__button--middle"
          >
            <DislikeIcon />
          </IconWithSpanButton>
          <IconWithSpanButton spanText="Share">
            <ShareIcon />
          </IconWithSpanButton>
          <IconButton extraClassName="video-frame__extra-button">
            <ExtraIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default videoFrame;
