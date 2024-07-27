import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Latif Altay </span>
            from <span className="purple"> Istanbul, Turkey</span>
            <br />
            I am currently employed as a software developer at a corporate company.
            <br />
            I completed my undergraduate studies in Management Information Systems at Anadolu University and my associate degree in Computer Programming at Mehmet Akif Ersoy University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cyber Security
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Trip
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Once you stop learning you start dying."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
