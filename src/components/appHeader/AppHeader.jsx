import "./AppHeader.scss";

import BurgerMenuIcon from "../../assets/icons/burger-menu.svg";
import CameraIcon from "../../assets/icons/camera.svg";
import NineDotsIcon from "../../assets/icons/nine-dots.svg";
import BellIcon from "../../assets/icons/bell.svg";
import SearchIcon from "../../assets/icons/search.svg";
import ThreeDotsIcon from "../../assets/icons/three-dots.svg";

import userpictureImage from "../../assets/images/userpicture.png";

import YoutubeLogoLink from "../YoutubeLogoLink/YoutubeLogoLink.jsx";
import SearchInput from "../SearchInput/SearchInput.jsx";
import RoundLogoLink from "../RoundLogoLink/RoundLogoLink.jsx";
import IconButton from "../IconButton/IconButton.jsx";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__left-wrapper">
        <IconButton extraClassName="header__burger-btn">
          <BurgerMenuIcon />
        </IconButton>
        <YoutubeLogoLink />
        <span className="header__youtube-link-span">Margaret Phelps</span>
        <SearchInput />
      </div>
      <div className="header__right-wrapper">
        <div className="header__btns-wrapper">
          <IconButton>
            <CameraIcon />
          </IconButton>
          <IconButton>
            <NineDotsIcon />
          </IconButton>
          <IconButton notifications={3}>
            <BellIcon />
          </IconButton>
        </div>
        <IconButton extraClassName="header__btn-search">
          <SearchIcon />
        </IconButton>
        <RoundLogoLink
          extraClassName="header__btn-profile"
          image={userpictureImage}
          imageAlt="avatar"
        />
        <IconButton extraClassName="header__btn-three-dots">
          <ThreeDotsIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default AppHeader;
