/* eslint-disable react/prop-types */
import "./IconWithSpanButton.scss";

const IconWithSpanButton = ({
  extraClassName = "",
  spanText = "click",
  children,
}) => {
  return (
    <button className={`icon-with-span-button ${extraClassName}`}>
      {children}
      <span className="icon-with-span-button__span">{spanText}</span>
    </button>
  );
};

export default IconWithSpanButton;
