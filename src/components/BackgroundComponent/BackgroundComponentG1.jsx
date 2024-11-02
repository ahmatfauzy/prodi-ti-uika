// BackgroundComponent.js
// import React from 'react';
import { useEffect } from "react";
import "./BackgroundComponentG1.css"; // Pastikan file CSS ini dibuat

const BackgroundComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.querySelector(
        ".background-section"
      ).style.backgroundPositionY = `${scrollPosition * 0.1}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="background-section">
      <div className="overlay"></div>
    </div>
  );
};

export default BackgroundComponent;
