// BackgroundComponent.js
// import React from 'react';
import { useEffect } from "react";
import "./BackgroundComponentG1.css"; // Pastikan file CSS ini dibuat
import { FaCertificate } from "react-icons/fa"; 

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
      <div className="content-container">
        <div className="icon"><FaCertificate /></div>
        <h1 className="title">Akreditasi B</h1>
        <p className="description">
        Berdasarkan Keputusan BAN-PT Nomor: 3318/SK/BAN-PT/Akred/S/IX/2019, Program Studi Teknik Informatika, pada Program Sarjana Universitas Ibn Khaldun Bogor, memenuhi syarat peringkat Akreditasi B.
        </p>
      </div>
    </div>
  );
};

export default BackgroundComponent;
