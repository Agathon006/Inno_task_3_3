/* eslint-disable react/prop-types */
import "./IconNotification.scss";

const IconNotification = ({ notificationNumber }) => {
  return (
    <span className="icon-notification">{notificationNumber}</span>
  );
};

export default IconNotification;
