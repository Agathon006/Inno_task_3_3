import "./videoCard.css";

const videoCard = ({image, timeCode, videoHeadline, views, authorName}) => {
  return (
    <div className="video-card">
      <div className="video-card__img-wrapper">
        <span className="time-label">{timeCode}</span>
        <img
          src={image}
          alt={videoHeadline}
          className="video-card__img"
        />
      </div>
      <h3 className="video-card__video-headline">{videoHeadline}</h3>
      <div className="video-card__additional-info-wrapper">
        <span className="video-card__text-views">{views}</span>
        <span className="video-card__text-author">{authorName}</span>
      </div>
    </div>
  );
};

export default videoCard;
