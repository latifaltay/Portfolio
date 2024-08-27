import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const browserLanguage = navigator.language;
    const timeVisited = new Date().toLocaleString();

    // IP ve lokasyon bilgilerini almak için bir API çağrısı
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const userInfo = {
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country_name,
                userAgent,
                browserLanguage,
                timeVisited,
            };

            // Bu bilgileri sunucuya gönder
            fetch('http://localhost:5000/logUserInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        })
        .catch(error => {
            console.error("IP bilgisi alınamadı: ", error);
        });
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
