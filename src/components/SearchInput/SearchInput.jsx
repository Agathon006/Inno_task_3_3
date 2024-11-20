/* eslint-disable react/prop-types */
import "./SearchInput.scss";

import IconButton from "../IconButton/IconButton.jsx";
import SearchIcon from "../../assets/icons/search.svg";

const SearchInput = () => {
  return (
    <div className="search-input-wrapper">
      <input
        type="search"
        name="video-search"
        placeholder="Search"
        className="search-input"
      />
      <IconButton extraClassName="search-input__btn">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchInput;
