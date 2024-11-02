// import React from 'react';
import { Container, Row, Col } from "react-bootstrap"; 
import CustomButton from "../button/CustomButton";

const VideoWithText = () => {
  return (
    <Container className="pt-4 pb-4">
      <Row>
        <Col md={6} className="video-container"> 
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/o3LwrgW86U8?si=u_rw9sllPPAtLxfO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Col>
        <Col md={6} className="text-container"> 
          <h2>Menjelajahi Peluang Baru di UIKA Bogor</h2>
          <p>
            Bergabunglah dengan komunitas kami dan ambil langkah pertama menuju
            masa depan yang cerah. Klik tombol di bawah ini untuk mendaftar dan
            menjadi bagian dari keluarga besar UIKA Bogor!
          </p>
          <CustomButton
            href="https://spmb.uika-bogor.ac.id/#"
            label="Daftar Sekarang"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default VideoWithText;
