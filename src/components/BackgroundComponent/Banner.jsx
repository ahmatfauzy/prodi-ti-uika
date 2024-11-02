// import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ imageUrl, title }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
