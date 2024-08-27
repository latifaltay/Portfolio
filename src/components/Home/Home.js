import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  
  useEffect(() => {
    const sendUserInfo = async () => {
      try {
        const userAgent = navigator.userAgent || "User agent bilgisi alınamadı";
        const browserLanguage = navigator.language || "Dil bilgisi alınamadı";
        const timeVisited = new Date().toLocaleString() || "Zaman bilgisi alınamadı";
        
        const userInfo = {
            userAgent,
            browserLanguage,
            timeVisited,
        };

        // IP ve lokasyon bilgilerini almak için bir API çağrısı
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) {
                throw new Error("IP bilgisi alınamadı");
            }
            const data = await response.json();

            // Tüm gelen verileri userInfo nesnesine ekle
            Object.assign(userInfo, data);
            
        } catch (ipError) {
            console.error("IP bilgisi alınamadı:", ipError.message);
        }

        // Bilgileri sunucuya gönder
        try {
            const response = await fetch('https://api.latifaltay.com/logUserInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
            if (!response.ok) {
                throw new Error("Bilgiler sunucuya gönderilemedi");
            }
            console.log("Bilgiler başarıyla sunucuya gönderildi");
        } catch (serverError) {
            console.error("Bilgiler sunucuya gönderilemedi:", serverError.message);
        }

      } catch (error) {
        console.error("Beklenmedik bir hata oluştu:", error.message);
      }
    };

    sendUserInfo();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> LATİF ALTAY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
