/* eslint-disable react/prop-types */
import "./IconButton.scss";

const IconButton = ({
  width = 24,
  height = 24,
  extraClassName = "",
  notifications = 0,
  children,
}) => {
  return (
    <button
      className={`icon-button ${extraClassName}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
      {notifications ? <span className="icon-notification">{notifications}</span> : null}
    </button>
  );
};

export default IconButton;
