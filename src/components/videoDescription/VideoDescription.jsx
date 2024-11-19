import "./videoDescription.scss";
import channelIcon from "../../assets/images/food-and-drink.png";

const VideoDescription = () => {
  return (
    <div className="video-description">
      <div className="video-description__left">
        <img
          src={channelIcon}
          alt="Food & Drink"
          className="video-description__channel-icon"
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
          <span className="video-description__text-show-more">Show more</span>
        </div>
      </div>
      <button className="video-description__subscribe-btn">
        Subscribe 2.3m
      </button>
      <span className="video-description__subscribe-span">Subscribe</span>
    </div>
  );
};

export default VideoDescription;
