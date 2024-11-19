import "./nextVideos.css";

import VideoCard from "../videoCard/videoCard";

import babyMonitorTechnologyImage from "../../assets/images/baby-monitor-technology.png";
import aGoodAutoresponderImage from "../../assets/images/a-good-autoresponder.png";
import selectingTheRightHotelImage from "../../assets/images/selecting-the-right-hotel.png";
import selectingTheRightHotelBottomImage from "../../assets/images/selecting-the-right-hotel-bottom.png";

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
      <aside className="next-videos__body">
        <VideoCard
          image={babyMonitorTechnologyImage}
          timeCode="8:00"
          videoHeadline="Baby Monitor Technology"
          views="123k views"
          authorName="Dollie Blair"
        />
        <VideoCard
          image={aGoodAutoresponderImage}
          timeCode="8:00"
          videoHeadline="A Good Autoresponder"
          views="123k views"
          authorName="Dollie Blair"
        />
        <VideoCard
          image={selectingTheRightHotelImage}
          timeCode="8:00"
          videoHeadline="Selecting The Right Hotel"
          views="123k views"
          authorName="Dollie Blair"
        />
        <VideoCard
          image={selectingTheRightHotelBottomImage}
          timeCode="8:00"
          videoHeadline="Selecting The Right Hotel"
          views="123k views"
          authorName="Dollie Blair"
        />
      </aside>
    </aside>
  );
};

export default NextVideos;
