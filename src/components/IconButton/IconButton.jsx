/* eslint-disable react/prop-types */
import "./IconButton.scss";

const IconButton = ({
  width = 24,
  height = 24,
  extraClassName = "",
  children,
}) => {
  return (
    <button
      className={`icon-button ${extraClassName}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </button>
  );
};

export default IconButton;
