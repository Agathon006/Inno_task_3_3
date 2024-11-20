/* eslint-disable react/prop-types */
import "./LogoLink.scss";

const LogoLink = ({hrefProp='#', extraClassName, image, imageAlt}) => {
  return (
    <a href={hrefProp} target="_blank" className={extraClassName}>
      <img src={image} alt={imageAlt} className="logo-link" />
    </a>
  );
};

export default LogoLink;
