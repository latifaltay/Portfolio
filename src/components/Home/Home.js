import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  
  // useEffect(() => {
  //   const sendUserInfo = async () => {
  //     try {
  //       const userAgent = navigator.userAgent || "User agent bilgisi alınamadı";
  //       const browserLanguage = navigator.language || "Dil bilgisi alınamadı";
  //       const timeVisited = new Date().toLocaleString() || "Zaman bilgisi alınamadı";
        
  //       const userInfo = {
  //         userAgent,
  //         browserLanguage,
  //         timeVisited,
  //       };
  
  //       // IP ve lokasyon bilgilerini almak için bir API çağrısı
  //       try {
  //         const response = await fetch('https://ipapi.co/json/');
  //         if (!response.ok) {
  //           throw new Error("IP bilgisi alınamadı");
  //         }
  //         const data = await response.json();
  
  //         // Tüm gelen verileri userInfo nesnesine ekle
  //         Object.assign(userInfo, data);
          
  //       } catch (ipError) {
  //         console.error("IP bilgisi alınamadı:", ipError.message);
  //       }
  
  //       // Bilgileri .NET API'ye gönder
  //       try {
  //         const response = await fetch('https://api.latifaltay.com/api/UserInfo/LogUserInfo', { // Burada localhost kullanıyoruz
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(userInfo),
  //         });
  //         if (!response.ok) {
  //           throw new Error("Bilgiler sunucuya gönderilemedi");
  //         }
  //         console.log("Bilgiler başarıyla sunucuya gönderildi");
  //       } catch (serverError) {
  //         console.error("Bilgiler sunucuya gönderilemedi:", serverError.message);
  //       }
  
  //     } catch (error) {
  //       console.error("Beklenmedik bir hata oluştu:", error.message);
  //     }
  //   };
  
  //   sendUserInfo();
  // }, []);


  useEffect(() => {
    const sendUserInfo = async () => {
      try {
        const KullaniciAjani = navigator.userAgent || "User agent bilgisi alınamadı";
        const TarayiciDili = navigator.language || "Dil bilgisi alınamadı";
        const ZiyaretZamani = new Date().toLocaleString() || "Zaman bilgisi alınamadı";
        
        let userInfo = {
          KullaniciAjani,                // userAgent -> KullaniciAjani
          TarayiciDili,                  // browserLanguage -> TarayiciDili
          ZiyaretZamani,                 // timeVisited -> ZiyaretZamani
          IpAdresi: "",                  // ip -> IpAdresi
          Sehir: "",                     // city -> Sehir
          KitaKodu: "",                  // continent_code -> KitaKodu
          Ulke: "",                      // country -> Ulke
          UlkeAlani: 0,                  // country_area -> UlkeAlani
          UlkeAlanKodu: "",              // country_calling_code -> UlkeAlanKodu
          UlkeBaskenti: "",              // country_capital -> UlkeBaskenti
          UlkeKodu: "",                  // country_code -> UlkeKodu
          UlkeKoduIso3: "",              // country_code_iso3 -> UlkeKoduIso3
          UlkeAdi: "",                   // country_name -> UlkeAdi
          UlkeNufusu: 0,                 // country_population -> UlkeNufusu
          UlkeTld: "",                   // country_tld -> UlkeTld
          ParaBirimi: "",                // currency -> ParaBirimi
          ParaBirimiAdi: "",             // currency_name -> ParaBirimiAdi
          AbUyesiMi: false,              // in_eu -> AbUyesiMi
          KullaniciDilleri: "",          // languages -> KullaniciDilleri
          Enlem: 0,                      // latitude -> Enlem
          Boylam: 0,                     // longitude -> Boylam
          AgBilgisi: "",                 // network -> AgBilgisi
          Organizasyon: "",              // org -> Organizasyon
          PostaKodu: "",                 // postal -> PostaKodu
          Bolge: "",                     // region -> Bolge
          BolgeKodu: "",                 // region_code -> BolgeKodu
          SaatDilimi: "",                // timezone -> SaatDilimi
          UtcFarki: "",                  // utc_offset -> UtcFarki
          IpVersiyonu: "",               // version -> IpVersiyonu
          AsnNumarasi: ""                // asn -> AsnNumarasi
        };
  
        // IP ve lokasyon bilgilerini almak için bir API çağrısı
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (!response.ok) {
            throw new Error("IP bilgisi alınamadı");
          }
          const data = await response.json();
    
          // Tüm gelen verileri userInfo nesnesine ekle
          Object.assign(userInfo, {
            IpAdresi: data.ip,                // ip -> IpAdresi
            Sehir: data.city,                 // city -> Sehir
            KitaKodu: data.continent_code,    // continent_code -> KitaKodu
            Ulke: data.country,               // country -> Ulke
            UlkeAlani: data.country_area,     // country_area -> UlkeAlani
            UlkeAlanKodu: data.country_calling_code, // country_calling_code -> UlkeAlanKodu
            UlkeBaskenti: data.country_capital, // country_capital -> UlkeBaskenti
            UlkeKodu: data.country_code,      // country_code -> UlkeKodu
            UlkeKoduIso3: data.country_code_iso3, // country_code_iso3 -> UlkeKoduIso3
            UlkeAdi: data.country_name,       // country_name -> UlkeAdi
            UlkeNufusu: data.country_population, // country_population -> UlkeNufusu
            UlkeTld: data.country_tld,        // country_tld -> UlkeTld
            ParaBirimi: data.currency,        // currency -> ParaBirimi
            ParaBirimiAdi: data.currency_name, // currency_name -> ParaBirimiAdi
            AbUyesiMi: data.in_eu,            // in_eu -> AbUyesiMi
            KullaniciDilleri: data.languages, // languages -> KullaniciDilleri
            Enlem: data.latitude,             // latitude -> Enlem
            Boylam: data.longitude,           // longitude -> Boylam
            AgBilgisi: data.network,          // network -> AgBilgisi
            Organizasyon: data.org,           // org -> Organizasyon
            PostaKodu: data.postal,           // postal -> PostaKodu
            Bolge: data.region,               // region -> Bolge
            BolgeKodu: data.region_code,      // region_code -> BolgeKodu
            SaatDilimi: data.timezone,        // timezone -> SaatDilimi
            UtcFarki: data.utc_offset,        // utc_offset -> UtcFarki
            IpVersiyonu: data.version,        // version -> IpVersiyonu
            AsnNumarasi: data.asn             // asn -> AsnNumarasi
          });
  
        } catch (ipError) {
          console.error("IP bilgisi alınamadı:", ipError.message);
        }
    
        // Bilgileri .NET API'ye gönder
        try {
          const response = await fetch('https://api.latifaltay.com/api/UserInfo/LogUserInfo', { 
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