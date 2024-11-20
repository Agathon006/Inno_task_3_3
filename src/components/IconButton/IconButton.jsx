/* eslint-disable react/prop-types */
import "./IconButton.scss";

const IconButton = ({
  extraClassName = "",
  notifications = 0,
  children,
}) => {
  return (
    <button
      className={`icon-button ${extraClassName}`}
    >
      {children}
      {notifications ? <span className="icon-notification">{notifications}</span> : null}
    </button>
  );
};

export default IconButton;
