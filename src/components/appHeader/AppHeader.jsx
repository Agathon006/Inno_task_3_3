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
import LogoLink from "../LogoLink/LogoLink.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import IconNotification from "../IconNotification/IconNotification.jsx";

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
          <IconButton>
            <BellIcon />
            <IconNotification notificationNumber={3} />
          </IconButton>
        </div>
        <IconButton extraClassName="header__btn-search" width={19} height={19}>
          <SearchIcon />
        </IconButton>
        <LogoLink
          extraClassName="header__btn-profile"
          image={userpictureImage}
          imageAlt="avatar"
        />
        <IconButton
          extraClassName="header__btn-three-dots"
          width={5}
          height={19}
        >
          <ThreeDotsIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default AppHeader;
