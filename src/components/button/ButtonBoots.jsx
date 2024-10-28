import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import './Button.css'

function ButtonBoots({ children, className }) {

  return (
    <Button className={`custom-button ${className}`}>
      {children}
    </Button>
  );
}

ButtonBoots.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ButtonBoots;
