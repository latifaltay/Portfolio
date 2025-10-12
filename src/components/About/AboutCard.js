import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi, I am <span className="purple">Latif Altay</span> from <span className="purple">Istanbul, Turkey</span>.
  <br />
  I am a software developer at Pegasus Airlines through Nexum, focusing on building scalable, maintainable, and high-performance backend applications. 
  <br />
  I work extensively with <span className="purple">ASP.NET Core, C#, Entity Framework Core, Dapper, Clean Architecture, Onion Architecture, N-Tier Architecture, CQRS, MediatR, Generic Repository & Unit of Work, Redis, RabbitMQ, PostgreSQL, and Docker</span>.
  <br />
  I am passionate about designing robust software architectures, improving application performance, and continuously learning modern backend development practices.
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
