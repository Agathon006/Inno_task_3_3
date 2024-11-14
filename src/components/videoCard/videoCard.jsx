import "./videoCard.css";

const videoCard = ({image, timeCode, videoHeadline, views, authorName}) => {
  return (
    <div class="video-card">
      <div class="video-card__img-wrapper">
        <span class="time-label">{timeCode}</span>
        <img
          src={image}
          alt={videoHeadline}
          class="video-card__img"
        />
      </div>
      <h3 class="video-card__video-headline">{videoHeadline}</h3>
      <div class="video-card__additional-info-wrapper">
        <span class="video-card__text-views">{views}</span>
        <span class="video-card__text-author">{authorName}</span>
      </div>
    </div>
  );
};

export default videoCard;
