import "./nextVideos.scss";

import VideoCard from "../videoCard/videoCard";

import babyMonitorTechnologyImage from "../../assets/images/baby-monitor-technology.png";
import aGoodAutoresponderImage from "../../assets/images/a-good-autoresponder.png";
import selectingTheRightHotelImage from "../../assets/images/selecting-the-right-hotel.png";
import selectingTheRightHotelBottomImage from "../../assets/images/selecting-the-right-hotel-bottom.png";

const videoData = [
  {
    image: babyMonitorTechnologyImage,
    timeCode: "8:00",
    videoHeadline: "Baby Monitor Technology",
    views: "123k views",
    authorName: "Dollie Blair",
  },
  {
    image: aGoodAutoresponderImage,
    timeCode: "8:00",
    videoHeadline: "A Good Autoresponder",
    views: "123k views",
    authorName: "Dollie Blair",
  },
  {
    image: selectingTheRightHotelImage,
    timeCode: "8:00",
    videoHeadline: "Selecting The Right Hotel",
    views: "123k views",
    authorName: "Dollie Blair",
  },
  {
    image: selectingTheRightHotelBottomImage,
    timeCode: "8:00",
    videoHeadline: "Selecting The Right Hotel",
    views: "123k views",
    authorName: "Dollie Blair",
  },
];

const NextVideos = () => {
  return (
    <aside className="next-videos">
      <div className="next-videos__head">
        <h2 className="next-videos__head-title">Next</h2>
        <div className="next-videos__head-right">
          <span className="next-videos__head-span">Autoplay</span>
          <div className="next-videos__head-slider">
            <div className="next-videos__head-slider-inside"></div>
          </div>
        </div>
      </div>
      <div className="next-videos__body">
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            image={video.image}
            timeCode={video.timeCode}
            videoHeadline={video.videoHeadline}
            views={video.views}
            authorName={video.authorName}
          />
        ))}
      </div>
    </aside>
  );
};

export default NextVideos;
