import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSwagger, SiAzuredevops } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiVisualstudio size={50} />
      </Col>
      <Col xs={6} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode size={50} />
      </Col>
      <Col xs={6} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostman size={50} />
      </Col>
      <Col xs={6} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiSwagger size={50} />
      </Col>
      <Col xs={6} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiAzuredevops size={50} />
      </Col>
    </Row>
  );
}

export default Toolstack;
