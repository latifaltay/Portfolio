import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaNetworkWired } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaLinux } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { DiDocker } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiKalilinux } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { IoGitMerge } from "react-icons/io5";
import { SiElasticsearch } from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoGitMerge />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>      

      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
      </Col>

    </Row>
  );
}

export default Techstack;
