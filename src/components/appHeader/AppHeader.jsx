import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__left-wrapper">
        <button className="header__burger-btn" id="burger-btn"></button>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          className="header__youtube-link"
        ></a>
        <button className="header__youtube-link-mob"></button>
        <span className="header__youtube-link-span">Margaret Phelps</span>
        <div className="header__search-input-wrapper">
          <input
            type="search"
            name="video-search"
            placeholder="Search"
            className="header__search-input"
          />
          <button className="header__input-search-btn"></button>
        </div>
      </div>
      <div className="header__right-wrapper">
        <div className="header__btns-wrapper">
          <button className="header__btn-camera"></button>
          <button className="header__btn-nine-dots"></button>
          <button className="header__btn-bell">
            <span className="header__bell-notifications">3</span>
          </button>
        </div>
        <button className="header__btn-search"></button>
        <button className="header__btn-profile"></button>
        <button className="header__btn-three-dots"></button>
      </div>
    </header>
  );
};

export default AppHeader;
