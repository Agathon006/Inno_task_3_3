import "./VideoDescription.scss";

import channelIcon from "../../assets/images/food-and-drink.png";

import RoundLogoLink from "../RoundLogoLink/RoundLogoLink.jsx";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton.jsx";
import SubscribeButton from "../SubscribeButton/SubscribeButton.jsx";

const VideoDescription = () => {
  return (
    <div className="video-description">
      <div className="video-description__left">
        <RoundLogoLink
          extraClassName="video-description__channel-icon"
          image={channelIcon}
          imageAlt="channelLogo"
        />
        <div className="video-description__text">
          <h3 className="video-description__text-title">Food & Drink</h3>
          <span className="video-description__text-sub-number">
            245K subscribed
          </span>
          <span className="video-description__text-date">
            Published on 14 Jun 2019
          </span>
          <p className="video-description__text-content">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood when they see your ad.
          </p>
          <ShowMoreButton extraClassName="video-description__text-show-more" />
        </div>
      </div>
      <SubscribeButton subNumber="2.3m" />
    </div>
  );
};

export default VideoDescription;
