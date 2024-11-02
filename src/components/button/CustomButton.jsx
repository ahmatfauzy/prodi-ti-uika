// import React from 'react';
// import Button from 'react-bootstrap/Button';
import "./CustomButton.css";
import PropTypes from "prop-types";

function CustomButton({ href, label = "Learn More" }) {
  return (
    <a
      href={href}
      className="custom-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

CustomButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default CustomButton;
