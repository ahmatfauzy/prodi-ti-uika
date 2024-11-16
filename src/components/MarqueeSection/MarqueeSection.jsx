// import React from 'react';
import "./Marquee.css";
import BIA from "../../assets/image/KERJASAMA/BIA.png";
import BRIN from "../../assets/image/KERJASAMA/BRIN.png";
import IPB from "../../assets/image/KERJASAMA/IPB.png";
import KALORINDO from "../../assets/image/KERJASAMA/KALORINDO.png";
import NTU from "../../assets/image/KERJASAMA/ntu.png";
import smk from "../../assets/image/KERJASAMA/SMK-PENERBANGAN.png";
import TANRI from "../../assets/image/KERJASAMA/TANRI-ABENG-UNIVERSITY.png";
import TELKOM from "../../assets/image/KERJASAMA/TELKOM.png";
import UNVPAKUAN from "../../assets/image/KERJASAMA/UNIVERSITY-PAKUAN.png";

// Data logo
const logos = [BIA, BRIN, IPB, KALORINDO, NTU, smk, TANRI, TELKOM, UNVPAKUAN];

const MarqueeSection = () => {
    return (
      <section className="marquee">
        <div className="marquee-content">
          {/* Duplicate logos to create continuous scrolling effect */}
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className="marquee-logo" />
          ))}
        </div>
      </section>
    );
  };
  
  export default MarqueeSection;
  