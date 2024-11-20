import { useState, useEffect } from "react";

import "./YoutubeLogoLink.scss";

import youtubeImage from "../../assets/images/youtube.png";
import youtubeMobImage from "../../assets/images/youtube-mob.png";

const YoutubeLogoLink = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <a href="https://www.youtube.com/" target="_blank">
      <img
        src={isMobile ? youtubeMobImage : youtubeImage}
        alt="YouTube"
        className="youtube-link"
      />
    </a>
  );
};

export default YoutubeLogoLink;
