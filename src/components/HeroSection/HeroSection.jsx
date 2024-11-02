// import React from 'react';
import "./HeroSection.css"; // Import CSS untuk styling
import CustomButton from "../button/CustomButton";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3>Program Studi </h3>
        <h1 className="mb-4">Teknik Informatika</h1>
        <CustomButton href="https://spmb.uika-bogor.ac.id/#" label="Daftar Sekarang" />
      </div>
    </div>
  );
}

export default HeroSection;
