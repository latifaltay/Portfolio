import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rentalCar from "../../Assets/Projects/rentalCar.png";
import northwind from "../../Assets/Projects/northwind.png";
import eCommerce from "../../Assets/Projects/eCommerce.png";
import maclab from "../../Assets/Projects/maclab.png";
import snake from "../../Assets/Projects/snake.png";
import minesweeper from "../../Assets/Projects/minesweeper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentalCar}
              isBlog={false}
              title="Car Rental"
              description="Developed to simulate car rental operations. Built using ASP.NET, Entity Framework, Fluent API, Repository Design Pattern, Code First approach, and Autofac. The project includes a Web API for managing rental operations. Additionally, it features comprehensive customer management and vehicle tracking functionalities."
              ghLink="https://github.com/latifaltay/CarRental_BackEnd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={northwind}
              isBlog={false}
              title="Northwind Project"
              description="This project aims to enhance my .NET skills through operations with the Northwind database. Developed using ASP.NET, Entity Framework, Fluent API, Repository Design Pattern, Code First approach, and Autofac, the project includes a Web API for managing vehicle rental operations."
              ghLink="https://github.com/latifaltay/Northwind-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="E-Commerce Project"
              description=" Developed a small-scale e-commerce application using React and Redux Toolkit. The project leverages modern React technologies, including React Router for navigation, Axios for API requests, and styled-components for styling. Redux Toolkit is utilized for state management, ensuring a scalable and efficient application structure."
              ghLink="https://github.com/latifaltay/Simple-E-Commerce-Project-With-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maclab}
              isBlog={false}
              title="MacLab"
              description="This Python script is designed to change MAC addresses of network interfaces and send random SYN and UDP packets to target IP addresses. The Scapy library is used for creating and sending network packets, the subprocess module is used for MAC address changes, and the threading module is employed for concurrent packet sending. This tool is useful for network security and performance testing."
              ghLink="https://github.com/latifaltay/MacLab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="This project features a Snake game developed using Java Swing. The game utilizes the Swing library to provide a graphical user interface and implements core game logic, user interactions, and graphics updates. This application serves as a practical exercise to enhance skills in GUI design and event handling in Java programming."
              ghLink="https://github.com/latifaltay/SnakeGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minesweeper}
              isBlog={false}
              title="Minesweeper"
              description="This project involves creating a Minesweeper game using Java Swing. The game employs the Swing library to deliver a graphical user interface and manages core game mechanics, user interactions, and graphical updates. This application serves as a practical exercise for improving skills in GUI design and event handling in Java."
              ghLink="https://github.com/latifaltay/MayinTarlasi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
